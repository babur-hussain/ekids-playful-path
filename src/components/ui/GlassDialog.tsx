import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type GlassDialogProps = PropsWithChildren<{
  title: string;
  description?: string;
  trigger: React.ReactNode;
}>;

type GlassDialogContextValue = { close: () => void };
const GlassDialogContext = createContext<GlassDialogContextValue>({ close: () => {} });
export const useGlassDialog = () => useContext(GlassDialogContext);

const GlassDialog = ({ title, description, trigger, children }: GlassDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-b from-background/70 via-background/60 to-background/70 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl" data-lenis-prevent>
        <DialogHeader>
          <DialogTitle className="font-cute text-foreground text-3xl">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-foreground/70">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <GlassDialogContext.Provider value={{ close: () => setOpen(false) }}>
          <div className="mt-4 pr-2">
            {children}
          </div>
        </GlassDialogContext.Provider>
      </DialogContent>
    </Dialog>
  );
};

export default GlassDialog;


