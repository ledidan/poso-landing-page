import { useId, useRef, useState } from "react";
import "@/styles/signup-form.css";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  full_name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(100, "Họ tên quá dài"),
  phone: z
    .string()
    .trim()
    .regex(/^(?:0|\+84)[1-9][0-9]{8,9}$/, "Vui lòng nhập số điện thoại Việt Nam hợp lệ"),
  shop_name: z.string().trim().max(120, "Tên shop quá dài"),
  email: z.string().trim().max(255, "Email quá dài").email("Email chưa hợp lệ").or(z.literal("")),
  note: z.string().trim().max(500, "Ghi chú quá dài"),
});

export function TrialSignupForm({
  compact = false,
  inline = false,
  onSuccess,
  onPendingChange,
}: {
  compact?: boolean;
  inline?: boolean;
  onSuccess?: () => void;
  onPendingChange?: (pending: boolean) => void;
}) {
  const id = useId();
  const submitting = useRef(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const formElement = event.currentTarget;
    const data = new FormData(formElement);
    const parsed = schema.safeParse({
      full_name: String(data.get("full_name") ?? ""),
      phone: String(data.get("phone") ?? "").replace(/[\s.-]/g, ""),
      shop_name: String(data.get("shop_name") ?? ""),
      email: String(data.get("email") ?? ""),
      note: String(data.get("note") ?? ""),
    });
    setSubmitError("");
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const field = formElement.elements.namedItem(Object.keys(next)[0] ?? "");
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    setErrors({});
    submitting.current = true;
    setLoading(true);
    onPendingChange?.(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase
        .from("trial_signups")
        .insert({
          full_name: parsed.data.full_name,
          phone: parsed.data.phone,
          shop_name: parsed.data.shop_name || null,
          email: parsed.data.email || null,
          note: parsed.data.note || null,
        })
        .abortSignal(AbortSignal.timeout(15000));
      if (error) throw error;
      setDone(true);
      onSuccess?.();
    } catch {
      setSubmitError(
        "Chưa gửi được thông tin. Vui lòng thử lại hoặc liên hệ qua Zalo / điện thoại.",
      );
    } finally {
      submitting.current = false;
      setLoading(false);
      onPendingChange?.(false);
    }
  }

  if (done)
    return (
      <div className="signup-success" role="status" aria-live="polite">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h3>Đã nhận thông tin của bạn!</h3>
        <p>Đội ngũ Poso sẽ liên hệ để tư vấn và hỗ trợ shop bắt đầu dùng thử.</p>
      </div>
    );

  const fields = [
    {
      name: "full_name",
      label: "Họ và tên",
      placeholder: "Nguyễn Thu Hà",
      autoComplete: "name",
      maxLength: 100,
      required: true,
    },
    {
      name: "phone",
      label: "Số điện thoại",
      placeholder: "0901 234 567",
      autoComplete: "tel",
      maxLength: 18,
      required: true,
    },
    {
      name: "shop_name",
      label: "Tên shop",
      placeholder: "Tên cửa hàng của bạn",
      autoComplete: "organization",
      maxLength: 120,
      required: false,
    },
    ...(!compact
      ? [
          {
            name: "email",
            label: "Email",
            placeholder: "ban@shop.vn",
            autoComplete: "email",
            maxLength: 255,
            required: false,
          },
        ]
      : []),
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={loading}
      className={inline ? "signup-form signup-form-inline" : "signup-form"}
    >
      <fieldset disabled={loading} className="signup-fields">
        {fields.map((field) => (
          <div key={field.name} className="signup-field">
            <Label htmlFor={`${id}-${field.name}`}>
              {field.label}
              {field.required ? " *" : ""}
            </Label>
            <Input
              id={`${id}-${field.name}`}
              name={field.name}
              type={field.name === "phone" ? "tel" : field.name === "email" ? "email" : "text"}
              autoComplete={field.autoComplete}
              required={field.required}
              maxLength={field.maxLength}
              placeholder={field.placeholder}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `${id}-${field.name}-error` : undefined}
            />
            {errors[field.name] && (
              <p id={`${id}-${field.name}-error`} role="alert" className="signup-error">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
        {!compact && (
          <div className="signup-field signup-field-wide">
            <Label htmlFor={`${id}-note`}>Bạn cần Poso hỗ trợ gì?</Label>
            <Textarea
              id={`${id}-note`}
              name="note"
              rows={3}
              maxLength={500}
              placeholder="Ví dụ: Quản lý size, màu và tồn kho cho shop…"
              aria-invalid={!!errors["note"]}
              aria-describedby={errors["note"] ? `${id}-note-error` : undefined}
            />
            {errors["note"] && (
              <p id={`${id}-note-error`} role="alert" className="signup-error">
                {errors["note"]}
              </p>
            )}
          </div>
        )}
      </fieldset>
      {submitError && (
        <p role="alert" className="signup-error">
          {submitError}
        </p>
      )}
      <button type="submit" disabled={loading} className="signup-submit">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Đang gửi…
          </>
        ) : (
          <>
            {inline ? "Gửi thông tin liên hệ" : compact ? "Dùng thử miễn phí" : "Gửi đăng ký"}
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      {inline && (
        <p className="signup-privacy">
          Poso sử dụng thông tin để liên hệ hỗ trợ bạn.{" "}
          <a href="https://www.poso.vn/privacy" target="_blank" rel="noopener noreferrer">
            Chính sách bảo mật
          </a>
          .
        </p>
      )}
    </form>
  );
}
