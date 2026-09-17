import { PosoLogo } from "@/components/PosoLogo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import sellerHero from "@/assets/poso-seller-hero.jpg";
import staffInventory from "@/assets/poso-staff-inventory.jpg";
import ownerReport from "@/assets/poso-owner-report.jpg";
import caseStore from "@/assets/poso-case-store.jpg";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu POSO — Quản lý size, màu, SKU và tồn kho" },
      {
        name: "description",
        content:
          "Hướng dẫn từng bước cách POSO giúp shop thời trang tạo sản phẩm, gắn size và màu, sinh mã SKU, nhập kho, bán hàng và kiểm kho chính xác.",
      },
      {
        property: "og:title",
        content: "Giới thiệu POSO — Quản lý size, màu, SKU và tồn kho",
      },
      {
        property: "og:description",
        content:
          "Sáu bước cụ thể để shop thời trang chuẩn hoá sản phẩm, mã SKU và tồn kho với POSO.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GioiThieu,
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

function GioiThieu() {
  return (
    <main className="bg-background">
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <PosoLogo />
        </Link>
        <a
          href="https://poso.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
        >
          Bắt đầu ngay →
        </a>
      </nav>

      {/* Intro */}
      <section className="bg-[oklch(0.14_0.02_60)] px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-poso"
          >
            Giới thiệu POSO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="mt-6 text-[clamp(2.25rem,7.5vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-white"
          >
            Sáu bước để shop thời trang
            <br />
            <span className="text-poso">hết rối size, màu, SKU.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Đây là cách POSO xử lý phần khó nhất của ngành thời trang: một mẫu áo có nhiều màu, mỗi
            màu nhiều size, mỗi size một tồn kho riêng. Xem từng bước bên dưới.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
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
                <span className="text-sm font-bold tracking-[0.2em] text-poso">{step.no}</span>
                <h2 className="mt-4 text-[clamp(1.75rem,5.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground">
                  {step.title}
                </h2>
                <p className="mt-4 text-lg font-medium text-foreground/80">{step.lead}</p>
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
      </section>

      {/* Closing */}
      <section className="px-5 pb-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto max-w-5xl"
        >
          <p className="text-[clamp(2rem,7vw,3.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-foreground">
            Một hệ thống.
            <br />
            Toàn bộ kho hàng.
          </p>
          <a
            href="https://poso.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-poso px-8 py-4 text-base font-semibold text-poso-foreground shadow-lg shadow-poso/25 transition-transform hover:scale-[1.03] sm:text-lg"
          >
            Bắt đầu với POSO
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-10 text-sm text-muted-foreground">
            <Link to="/" className="underline underline-offset-4">
              Quay lại trang chính
            </Link>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
