import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://ekids:TpwyczbWh9tghnoX@cluster0.haunkpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = process.env.DB_NAME || 'ekids';

let client; let db; let appointments; let enrollments;

async function init() {
  client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  appointments = db.collection('appointments');
  enrollments = db.collection('enrollments');
  await appointments.createIndex({ status: 1, createdAt: -1 });
  await enrollments.createIndex({ createdAt: -1 });
  console.log('Mongo connected');
}

// Health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Enroll form submit
app.post('/api/enroll', async (req, res) => {
  try {
    const data = req.body || {};
    const doc = {
      ...data,
      formType: 'enroll',
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const r = await enrollments.insertOne(doc);
    res.json({ ok: true, id: r.insertedId });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Appointment submit
app.post('/api/appointments', async (req, res) => {
  try {
    const data = req.body || {};
    const doc = {
      ...data,
      formType: 'appointment',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const r = await appointments.insertOne(doc);
    res.json({ ok: true, id: r.insertedId });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Update status or staff notes for appointment
app.put('/api/appointments/:id', async (req, res) => {
  try {
    const { status, staffNotes } = req.body || {};
    const update = { $set: { updatedAt: new Date() } };
    if (status) update.$set.status = status;
    if (typeof staffNotes !== 'undefined') update.$set.staffNotes = staffNotes;
    await appointments.updateOne({ _id: new ObjectId(req.params.id) }, update);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

const PORT = process.env.PORT || 8081;
init().then(() => {
  app.listen(PORT, () => console.log(`API on :${PORT}`));
});


