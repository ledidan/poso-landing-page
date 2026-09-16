import { useState, type ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z
    .string()
    .trim()
    .min(2, { message: "Vui lòng nhập họ tên" })
    .max(100, { message: "Họ tên quá dài" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s.-]{8,15}$/, { message: "Số điện thoại chưa hợp lệ" }),
  shop_name: z.string().trim().max(120, { message: "Tên shop quá dài" }).optional(),
  email: z
    .string()
    .trim()
    .max(255)
    .email({ message: "Email chưa hợp lệ" })
    .optional()
    .or(z.literal("")),
  note: z.string().trim().max(500, { message: "Ghi chú quá dài" }).optional(),
});

export function SignupDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const raw = {
      full_name: String(form.get("full_name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      shop_name: String(form.get("shop_name") ?? ""),
      email: String(form.get("email") ?? ""),
      note: String(form.get("note") ?? ""),
    };

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setLoading(true);
    const { error } = await supabase.from("trial_signups").insert({
      full_name: parsed.data.full_name,
      phone: parsed.data.phone,
      shop_name: parsed.data.shop_name || null,
      email: parsed.data.email || null,
      note: parsed.data.note || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Gửi đăng ký chưa thành công. Bạn thử lại giúp nhé.");
      return;
    }
    setDone(true);
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setDone(false);
      setErrors({});
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[92svh] overflow-y-auto rounded-3xl sm:max-w-md">
        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-poso" />
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-foreground">
              Đã nhận đăng ký!
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Đội ngũ POSO sẽ liên hệ với bạn trong thời gian sớm nhất để mở tài khoản
              dùng thử.
            </p>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-poso px-6 py-3 text-sm font-semibold text-poso-foreground"
            >
              Đóng
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-extrabold tracking-tight">
                Đăng ký dùng thử POSO
              </DialogTitle>
              <DialogDescription>
                Điền thông tin bên dưới, POSO sẽ liên hệ mở tài khoản dùng thử miễn phí
                cho shop của bạn.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor="full_name">Họ và tên *</Label>
                <Input id="full_name" name="full_name" maxLength={100} placeholder="Nguyễn Thu Hà" />
                {errors["full_name"] && (
                  <p className="text-xs text-destructive">{errors["full_name"]}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  maxLength={15}
                  placeholder="0901 234 567"
                />
                {errors["phone"] && (
                  <p className="text-xs text-destructive">{errors["phone"]}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="shop_name">Tên shop</Label>
                <Input id="shop_name" name="shop_name" maxLength={120} placeholder="LỤA Thời Trang" />
                {errors["shop_name"] && (
                  <p className="text-xs text-destructive">{errors["shop_name"]}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} placeholder="ban@shop.vn" />
                {errors["email"] && (
                  <p className="text-xs text-destructive">{errors["email"]}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="note">Ghi chú</Label>
                <Textarea
                  id="note"
                  name="note"
                  maxLength={500}
                  rows={3}
                  placeholder="Shop bán online hay có cửa hàng? Bao nhiêu chi nhánh?"
                />
                {errors["note"] && (
                  <p className="text-xs text-destructive">{errors["note"]}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-poso px-6 py-4 text-base font-semibold text-poso-foreground shadow-lg shadow-poso/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Đang gửi...
                  </>
                ) : (
                  <>
                    Gửi đăng ký
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
