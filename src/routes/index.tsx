import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PosoTerminal } from "@/components/PosoTerminal";
import { SignupDialog } from "@/components/SignupDialog";

import { ChaosToControl } from "@/components/ChaosToControl";
import { FloatingContact } from "@/components/FloatingContact";
import storeHero from "@/assets/poso-store-hero.jpg";
import sellerHero from "@/assets/poso-seller-hero.jpg";
import staffInventory from "@/assets/poso-staff-inventory.jpg";
import ownerReport from "@/assets/poso-owner-report.jpg";
import caseStore from "@/assets/poso-case-store.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POSO — Bán hàng thời trang gọn hơn" },
      {
        name: "description",
        content:
          "POSO giúp shop thời trang bán hàng nhanh, quản lý size — màu — SKU và tồn kho trong một hệ thống duy nhất.",
      },
      { property: "og:title", content: "POSO — Bán hàng thời trang gọn hơn" },
      {
        property: "og:description",
        content:
          "Bán hàng, quản lý size — màu — SKU và tồn kho. Tất cả trong một hệ thống.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.poso.vn/poso_og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.poso.vn/poso_og.jpg" },
    ],
  }),
  component: Index,
});

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    no: "01",
    title: "Tạo sản phẩm gốc",
    lead: "Một mẫu áo là một sản phẩm — không phải mười dòng rời rạc.",
    body: [
      "Bạn nhập tên mẫu, ngành hàng, chất liệu, giá bán và ảnh. Ví dụ: “Áo thun cotton basic”, giá 249.000đ.",
      "Tất cả biến thể sau này đều nằm dưới sản phẩm gốc này, nên báo cáo doanh thu theo mẫu luôn gọn và dễ đọc.",
    ],
    image: sellerHero,
    alt: "Chủ shop thời trang tạo sản phẩm mới trên POSO",
  },
  {
    no: "02",
    title: "Gắn thuộc tính size và màu",
    lead: "Chọn bộ size và bảng màu một lần, POSO tự sinh toàn bộ biến thể.",
    body: [
      "Bạn chọn size S, M, L, XL và màu Đen, Trắng, Be. POSO tạo sẵn 12 biến thể tương ứng, mỗi biến thể có giá và tồn kho riêng.",
      "Nếu một màu chỉ có vài size, bạn tắt các ô không bán — kho sẽ không bao giờ hiện những biến thể không tồn tại.",
    ],
    image: staffInventory,
    alt: "Nhân viên shop kiểm size và màu trên kệ hàng",
  },
  {
    no: "03",
    title: "Sinh mã SKU theo quy tắc",
    lead: "Mã SKU tự đặt theo công thức, không còn gõ tay mỗi lần nhập hàng.",
    body: [
      "Quy tắc mặc định: MÃ MẪU – MÀU – SIZE. Ví dụ TS-BLK-M là áo thun đen size M, TS-WHT-L là áo thun trắng size L.",
      "Mỗi mã gắn với một mã vạch để quét tại quầy. Không trùng mã, không nhầm biến thể khi hai nhân viên cùng nhập hàng.",
    ],
    image: caseStore,
    alt: "Quầy thu ngân shop thời trang với máy quét mã SKU",
  },
  {
    no: "04",
    title: "Nhập kho theo từng biến thể",
    lead: "Số lượng ghi vào đúng ô size — màu, không gộp chung.",
    body: [
      "Khi hàng về, bạn quét mã hoặc nhập bảng: Đen/M 12 cái, Đen/L 8 cái, Trắng/S 5 cái. POSO ghi nhận giá nhập từng lần để tính lãi thật.",
      "Có nhiều chi nhánh hoặc kho phụ thì mỗi nơi có tồn riêng, tổng vẫn xem được ở một màn hình.",
    ],
    image: staffInventory,
    alt: "Nhân viên nhập hàng vào kho theo từng size và màu",
  },
  {
    no: "05",
    title: "Bán hàng và trừ kho tức thì",
    lead: "Quét mã, chọn size — màu, kho giảm ngay giây đó.",
    body: [
      "Tại quầy hoặc trên máy cầm tay, nhân viên chọn sản phẩm rồi chọn ô màu và size. Màn hình hiện tồn còn lại để tránh bán hàng đã hết.",
      "Bán online, livestream hay tại cửa hàng đều trừ chung một kho, nên không còn cảnh chốt đơn rồi báo khách hết hàng.",
    ],
    image: sellerHero,
    alt: "Người bán chốt đơn hàng thời trang trên POSO",
  },
  {
    no: "06",
    title: "Kiểm kho và đọc số liệu",
    lead: "Biết mẫu nào chạy, size nào tồn, màu nào nên nhập thêm.",
    body: [
      "Kiểm kho bằng cách quét lần lượt, POSO tự so lệch và ghi biên bản điều chỉnh.",
      "Báo cáo cho biết size M bán gấp ba size XL, màu đen chiếm 48% doanh thu — đủ cơ sở để quyết định đơn nhập kế tiếp.",
    ],
    image: ownerReport,
    alt: "Chủ shop xem báo cáo tồn kho và doanh thu của POSO",
  },
];

function Index() {
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <main className="bg-background">
      {/* Minimal nav — transparent on hero, solid on scroll */}
      <motion.nav
        ref={navRef}
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.25, ease }}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 backdrop-blur sm:px-8"
      >
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-poso text-xs font-bold text-poso-foreground">
            P
          </span>
          <span
            className={`text-sm font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            POSO
          </span>
        </a>
        <SignupDialog>
          <button
            type="button"
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur transition-colors ${
              scrolled
                ? "border-foreground/10 bg-foreground/5 text-foreground hover:bg-foreground/10"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Bắt đầu ngay →
          </button>
        </SignupDialog>
      </motion.nav>

      {/* SECTION 01 — HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[oklch(0.14_0.02_60)] px-5 pb-16 pt-20 sm:px-8 lg:justify-center lg:pb-0">
        <motion.img
          src={storeHero}
          alt="Không gian cửa hàng thời trang cao cấp với quầy thu ngân dùng POSO"
          width={1600}
          height={1008}
          fetchPriority="high"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.02_60)] via-[oklch(0.12_0.02_60)]/80 to-[oklch(0.12_0.02_60)]/40" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="text-[clamp(2.5rem,8.5vw,5.25rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
            >
              Bán hàng thời trang.
              <br />
              <span className="text-poso">Gọn hơn với POSO.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Bán hàng, quản lý size — màu — SKU và tồn kho.
              <br className="hidden sm:block" /> Tất cả trong một hệ thống.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.6, ease }}
              className="mt-8"
            >
              <SignupDialog>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-poso px-7 py-4 text-base font-semibold text-poso-foreground shadow-lg shadow-poso/25 transition-transform hover:scale-[1.03]"
                >
                  Dùng thử POSO miễn phí
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </SignupDialog>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-[19rem] pb-14 lg:max-w-sm">
            <PosoTerminal />
          </div>
        </div>
      </section>

      {/* SECTION 02 — FROM CHAOS TO CONTROL */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
        {/* Nền nối liền từ ảnh hero */}
        <img
          src={storeHero}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] w-full object-cover opacity-[0.12]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-gradient-to-b from-[oklch(0.14_0.02_60)]/35 via-background/85 to-background"
        />
        <div className="relative mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="max-w-3xl text-[clamp(2.25rem,8vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-foreground"
          >
            Size. Màu. SKU. Tồn kho.
            <br />
            <span className="text-poso">Không còn rối.</span>
          </motion.h2>

          <div className="mt-16 sm:mt-24">
            <ChaosToControl />
          </div>
        </div>
      </section>

      {/* SECTION 03 — STEP BY STEP */}
      <section>
        <div className="bg-[oklch(0.14_0.02_60)] px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
          <div className="mx-auto max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="text-xs font-semibold uppercase tracking-[0.28em] text-poso"
            >
              Cách POSO hoạt động
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="mt-6 text-[clamp(2.25rem,7.5vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white"
            >
              Sáu bước để shop thời trang
              <br />
              <span className="text-poso">hết rối size, màu, SKU.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Đây là cách POSO xử lý phần khó nhất của ngành thời trang: một mẫu áo
              có nhiều màu, mỗi màu nhiều size, mỗi size một tồn kho riêng.
            </motion.p>
          </div>
        </div>

        <div className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto flex max-w-5xl flex-col gap-24 sm:gap-32">
            {steps.map((step, i) => (
              <motion.article
                key={step.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease }}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <span className="text-sm font-bold tracking-[0.2em] text-poso">
                    {step.no}
                  </span>
                  <h3 className="mt-4 text-[clamp(1.75rem,5.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg font-medium text-foreground/80">
                    {step.lead}
                  </p>
                  {step.body.map((p) => (
                    <p
                      key={p.slice(0, 24)}
                      className="mt-4 text-base leading-relaxed text-muted-foreground"
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — CLOSING */}
      <section className="relative overflow-hidden bg-[oklch(0.14_0.02_60)] px-5 py-24 sm:px-8 sm:py-32">
        <img
          src={storeHero}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_60)] via-[oklch(0.12_0.02_60)]/85 to-[oklch(0.12_0.02_60)]/40" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto max-w-5xl"
        >
          <p className="text-[clamp(2rem,7vw,3.75rem)] font-extrabold leading-[1] tracking-[-0.03em] text-white">
            Bán nhanh.
            <br />
            Quản kho rõ.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
            POSO giúp shop thời trang quản lý những thứ quan trọng nhất — để bạn tập
            trung vào việc bán hàng.
          </p>
          <SignupDialog>
            <button
              type="button"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-poso px-8 py-4 text-base font-semibold text-poso-foreground shadow-lg shadow-poso/25 transition-transform hover:scale-[1.03] sm:text-lg"
            >
              Bắt đầu với POSO
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </SignupDialog>
          <p className="mt-10 text-sm text-white/50">
            POSO — Bán hàng tinh gọn cho shop thời trang.
          </p>
        </motion.div>
      </section>

      <FloatingContact />
    </main>
  );
}
