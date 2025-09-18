import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { PropsWithChildren } from "react";

type GlassDialogProps = PropsWithChildren<{
  title: string;
  description?: string;
  trigger: React.ReactNode;
}>;

const GlassDialog = ({ title, description, trigger, children }: GlassDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background/70 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-cute text-foreground text-3xl">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-foreground/70">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4 overflow-y-auto pr-2 max-h-[65vh]">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlassDialog;


