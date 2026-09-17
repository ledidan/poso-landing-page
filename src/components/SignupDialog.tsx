import { useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrialSignupForm } from "@/components/TrialSignupForm";

export function SignupDialog({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  function handleOpenChange(next: boolean) {
    if (pending && !next) return;
    setOpen(next);
    if (!next) setDone(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92svh] overflow-y-auto rounded-3xl sm:max-w-md">
        {done ? (
          <div className="signup-success">
            <CheckCircle2 size={40} aria-hidden="true" />
            <DialogTitle>Đã nhận đăng ký!</DialogTitle>
            <DialogDescription>
              Đội ngũ Poso sẽ liên hệ để hỗ trợ shop bắt đầu dùng thử.
            </DialogDescription>
            <button type="button" className="signup-submit" onClick={() => handleOpenChange(false)}>
              Đóng
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold tracking-tight">
                Đăng ký dùng thử Poso
              </DialogTitle>
              <DialogDescription>
                Điền thông tin bên dưới, Poso sẽ liên hệ mở tài khoản dùng thử miễn phí cho shop của
                bạn.
              </DialogDescription>
            </DialogHeader>
            <TrialSignupForm
              compact={compact}
              onSuccess={() => setDone(true)}
              onPendingChange={setPending}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
