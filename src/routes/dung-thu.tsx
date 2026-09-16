import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Zap, Boxes, LineChart } from "lucide-react";
import { PosoPosPreview } from "@/components/PosoPosPreview";
import { SignupDialog } from "@/components/SignupDialog";

export const Route = createFileRoute("/dung-thu")({
  head: () => ({
    meta: [
      { title: "Phần mềm quản lý shop thời trang | Poso" },
      {
        name: "description",
        content:
          "Poso giúp shop thời trang quản lý bán hàng, sản phẩm, tồn kho và doanh thu đơn giản hơn. Dùng thử miễn phí.",
      },
      { property: "og:title", content: "Phần mềm quản lý shop thời trang | Poso" },
      {
        property: "og:description",
        content:
          "Bán hàng, quản lý sản phẩm, tồn kho và doanh thu trên một nền tảng duy nhất. Dùng thử Poso miễn phí.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://poso-style-launchpad.lovable.app/dung-thu" }],
  }),
  component: AdsLanding,
});

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    icon: Zap,
    title: "Bán hàng nhanh",
    desc: "Tạo đơn và thanh toán nhanh ngay tại cửa hàng.",
  },
  {
    icon: Boxes,
    title: "Quản lý tồn kho",
    desc: "Biết sản phẩm và size nào còn hàng.",
  },
  {
    icon: LineChart,
    title: "Theo dõi doanh thu",
    desc: "Nắm doanh thu và sản phẩm bán chạy mỗi ngày.",
  },
];

function CtaButton({ size = "lg" }: { size?: "lg" | "xl" }) {
  return (
    <SignupDialog>
      <button
        type="button"
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-poso font-semibold text-poso-foreground shadow-lg shadow-poso/25 transition-transform hover:scale-[1.02] sm:w-auto ${
          size === "xl" ? "px-9 py-5 text-lg" : "px-8 py-4 text-base"
        }`}
      >
        Dùng thử miễn phí
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </SignupDialog>
  );
}

function AdsLanding() {
  return (
    <div className="bg-background">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-poso text-sm font-bold text-poso-foreground">
            P
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">Poso</span>
        </div>
        <a
          href="https://www.poso.vn"
          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          Đăng nhập
        </a>
      </header>

      <main>
        {/* 1 — HERO */}
        <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[42rem] -translate-x-1/2 rounded-full bg-poso/10 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex rounded-full bg-poso/10 px-3 py-1.5 text-xs font-semibold text-poso"
              >
                Poso · Bán hàng tinh gọn
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05, ease }}
                className="mt-5 text-[clamp(2.25rem,7.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground"
              >
                Quản lý shop thời trang
                <br />
                <span className="text-poso">đơn giản hơn với Poso</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease }}
                className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Bán hàng, quản lý sản phẩm, tồn kho và doanh thu trên một nền tảng duy nhất.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease }}
                className="mt-8"
              >
                <CtaButton size="xl" />
                <p className="mt-3 text-sm text-muted-foreground">Thiết lập nhanh · Dễ sử dụng</p>
              </motion.div>
            </div>

            <div className="w-full">
              <PosoPosPreview />
            </div>
          </div>
        </section>

        {/* 2 — BA LỢI ÍCH */}
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease }}
              className="max-w-2xl text-[clamp(1.85rem,5.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            >
              Shop gọn hơn. Bán hàng nhanh hơn.
            </motion.h2>

            <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6">
              {benefits.map((b, i) => (
                <motion.article
                  key={b.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease }}
                  className="rounded-3xl border border-border bg-card p-6 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-poso/10 text-poso">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{b.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — CTA CUỐI */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[oklch(0.16_0.02_60)] px-6 py-14 text-center sm:px-12 sm:py-20"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-poso/25 blur-3xl"
            />
            <div className="relative">
              <p className="text-[clamp(1.75rem,5.5vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                Sẵn sàng bán hàng tinh gọn?
              </p>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
                Bắt đầu quản lý shop với Poso ngay hôm nay.
              </p>
              <div className="mt-8 flex flex-col items-center">
                <CtaButton size="xl" />
                <p className="mt-3 text-sm text-white/55">
                  Không cần thẻ tín dụng · Bắt đầu nhanh
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-foreground">Poso — Bán hàng tinh gọn</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://www.poso.vn/bang-gia" className="hover:text-foreground">
              Bảng giá
            </a>
            <a href="https://www.poso.vn/chinh-sach-bao-mat" className="hover:text-foreground">
              Chính sách bảo mật
            </a>
            <a href="https://www.poso.vn/dieu-khoan" className="hover:text-foreground">
              Điều khoản
            </a>
          </nav>
          <p>© 2026 Poso</p>
        </div>
      </footer>
    </div>
  );
}
