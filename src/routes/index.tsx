import { createPageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PosoPosPreview } from "@/components/PosoPosPreview";
import { PosoLogo } from "@/components/PosoLogo";
import { PosoTerminal } from "@/components/PosoTerminal";
import { FloatingContact } from "@/components/FloatingContact";
import { TrialSignupForm } from "@/components/TrialSignupForm";
import workflowImage from "@/assets/poso-workflow-simulation.jpg";
import { SignupDialog } from "@/components/SignupDialog";
import "@/styles/ads-landing.css";

const title = "Phần mềm quản lý shop thời trang | Poso";
const description =
  "Poso giúp shop thời trang quản lý bán hàng, sản phẩm, tồn kho và doanh thu đơn giản hơn. Dùng thử miễn phí.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://poso.vn" }],
  }),
  component: AdsLanding,
});

const workflow = [
  {
    title: "Tạo sản phẩm gốc",
    copy: "Nhập tên mẫu, chất liệu, giá và ảnh một lần. Các biến thể cùng nằm dưới một sản phẩm, báo cáo theo mẫu cũng gọn hơn.",
  },
  {
    title: "Gắn size và màu",
    copy: "Chọn bộ size và bảng màu, Poso tạo các biến thể tương ứng. Mỗi màu, mỗi size có giá và số lượng tồn riêng.",
  },
  {
    title: "Sinh mã SKU",
    copy: "Đặt mã theo mẫu – màu – size. TS-BLK-M là áo thun đen size M; mỗi mã gắn với mã vạch để quét ngay tại quầy.",
  },
  {
    title: "Nhập kho theo biến thể",
    copy: "Hàng về được ghi vào đúng ô size và màu, cùng giá nhập từng lần. Tồn kho từng chi nhánh được quản lý riêng, tổng vẫn xem chung.",
  },
  {
    title: "Bán hàng, tự động trừ kho",
    copy: "Quét mã, chọn đúng màu và size, tạo đơn rồi thanh toán. Bán tại cửa hàng, online hay livestream đều cập nhật cùng một kho.",
  },
  {
    title: "Kiểm kho và đọc số liệu",
    copy: "Đối chiếu tồn thực tế, theo dõi doanh thu và mẫu bán chạy mỗi ngày. Biết size nào tồn, màu nào nên nhập thêm để quyết định dễ hơn.",
  },
];

const stock = [
  { color: "Đen", sku: "TS-BLK", quantities: [12, 8, 2] },
  { color: "Trắng", sku: "TS-WHT", quantities: [6, 3, 0] },
];

function TrialButton() {
  return (
    <SignupDialog compact>
      <button type="button" className="ads-trial-button group">
        Dùng thử miễn phí
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 transition-transform group-hover:translate-x-1"
        />
      </button>
    </SignupDialog>
  );
}

function AdsLanding() {
  return (
    <div className="ads-landing">
      <a href="#noi-dung" className="ads-skip-link">
        Đến nội dung chính
      </a>
      <header className="ads-container poso-site-header">
        <a href="/" aria-label="Poso — Bán hàng tinh gọn" className="ads-logo">
          <PosoLogo />
        </a>
        <a href="https://app.poso.vn" className="ads-login">
          Đăng nhập <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </header>

      <main id="noi-dung">
        <section aria-labelledby="intro-title" className="ads-original-hero ads-container">
          <div className="ads-original-copy ads-enter">
            {/* <p className="ads-eyebrow">
              <span aria-hidden="true" /> POSO · BÁN HÀNG TINH GỌN
            </p> */}
            <h1 id="intro-title">
              Bán hàng thời trang.
              <br />
              <span>Gọn hơn với Poso.</span>
            </h1>
            <p>
              Bán hàng, quản lý size — màu — SKU và tồn kho.
              <br className="hidden sm:block" /> Tất cả trong một hệ thống.
            </p>
            <div className="ads-hero-action">
              <TrialButton />
              <p className="ads-reassurance">
                <Check size={16} aria-hidden="true" /> Thiết lập nhanh · Dễ sử dụng
              </p>
            </div>
          </div>
          <div className="ads-original-terminal">
            <PosoTerminal />
          </div>
        </section>
        <section aria-labelledby="hero-title" className="ads-hero">
          <div className="ads-container ads-hero-grid">
            <div className="ads-hero-copy ads-enter">
              <p className="ads-eyebrow">
                <span aria-hidden="true" /> Phần mềm quản lý shop thời trang
              </p>
              <h2 id="hero-title" className="ads-price-heading">
                Chỉ từ
                <br />
                <span>5.000đ</span> <small>/ ngày</small>
              </h2>
              <p className="ads-hero-description">
                Bán hàng, quản lý size – màu – SKU, tồn kho và doanh thu trên một nền tảng duy nhất.
              </p>
              <div className="ads-hero-action">
                <TrialButton />
                <p className="ads-reassurance">
                  <Check aria-hidden="true" className="h-4 w-4" /> Thiết lập nhanh · Dễ sử dụng
                </p>
              </div>
            </div>
            <div className="ads-product-stage ads-enter">
              <PosoPosPreview />
            </div>
          </div>
        </section>

        <section aria-labelledby="workflow-title" className="ads-workflow ads-container">
          <div className="ads-workflow-intro">
            <div>
              <p className="ads-section-label">DÀNH RIÊNG CHO CÁCH SHOP THỜI TRANG VẬN HÀNH</p>
              <h2 id="workflow-title">
                Size. Màu. SKU.
                <br />
                Tồn kho.
                <br />
                <span>Không còn rối.</span>
              </h2>
              <p className="ads-workflow-description">
                Một mẫu áo, nhiều màu, nhiều size. Poso sắp xếp từng biến thể để bạn biết chính xác
                còn gì, ở đâu — và bán được ngay.
              </p>
            </div>
            <figure className="ads-stock-preview">
              <figcaption>
                <span>QUẢN LÝ BIẾN THỂ</span>
                <strong>Áo thun cotton basic</strong>
                <p>1 sản phẩm · 2 màu · 3 size · 6 SKU</p>
              </figcaption>
              <table>
                <caption className="sr-only">Số lượng tồn minh họa theo màu và size</caption>
                <thead>
                  <tr>
                    <th scope="col">Màu / Size</th>
                    {["S", "M", "L"].map((size) => (
                      <th scope="col" key={size}>
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stock.map((variant) => (
                    <tr key={variant.color}>
                      <th scope="row">
                        <strong>{variant.color}</strong>
                        <span>{variant.sku}</span>
                      </th>
                      {variant.quantities.map((quantity, index) => (
                        <td key={index} className={quantity <= 3 ? "ads-stock-alert" : undefined}>
                          <strong>{quantity}</strong>
                          <span>
                            {quantity === 0 ? "Hết hàng" : quantity <= 3 ? "Sắp hết" : "Còn hàng"}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ads-stock-note">
                <Check size={15} aria-hidden="true" /> Chọn màu + size. Đúng SKU, đúng tồn kho.
              </p>
              <p className="ads-stock-caption">Dữ liệu minh họa</p>
            </figure>
          </div>
          <div className="ads-workflow-heading">
            <p className="ads-section-label">CÁCH POSO HOẠT ĐỘNG</p>
            <h3>
              Từ nhập hàng đến chốt đơn.
              <br />
              Mọi thứ liền mạch.
            </h3>
          </div>
          <div className="ads-workflow-detail">
            <figure className="ads-workflow-image">
              <img
                src={workflowImage}
                alt="Mô phỏng quy trình shop thời trang: nhận hàng, sắp xếp tồn kho, thanh toán tại quầy và theo dõi báo cáo doanh thu"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
              />
              <figcaption>Nhập hàng → Quản lý kho → Chốt đơn → Theo dõi doanh thu</figcaption>
            </figure>
            <ol className="ads-workflow-steps" role="list">
              {workflow.map((step, index) => (
                <li key={step.title}>
                  <span className="ads-step-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="final-cta-title" className="ads-container ads-final-section">
          <div className="ads-final-cta">
            <div className="ads-final-copy">
              <p className="ads-section-label">BÁN NHANH. QUẢN KHO RÕ.</p>
              <h2 id="final-cta-title">
                Sẵn sàng bán hàng
                <br className="hidden sm:block" /> tinh gọn?
              </h2>
              <p>Để Poso lo sản phẩm, tồn kho và doanh thu — bạn tập trung vào việc bán hàng.</p>
            </div>
            <div className="ads-final-action">
              <TrialButton />
              <p>Không cần thẻ tín dụng · Bắt đầu nhanh</p>
            </div>
          </div>
        </section>
        <section aria-labelledby="contact-title" className="ads-contact-section ads-container">
          <h2 id="contact-title">Để lại thông tin</h2>
          <div className="ads-contact-form">
            <TrialSignupForm inline minimal />
          </div>
        </section>
      </main>

      <footer className="ads-container poso-site-footer">
        <p className="poso-site-footer-brand">
          <PosoLogo className="w-20" /> <span>— Bán hàng tinh gọn</span>
        </p>
        <nav aria-label="Thông tin Poso">
          <a href="https://www.poso.vn/bang-gia-phan-mem">Bảng giá</a>
          <a href="https://www.poso.vn/privacy">Chính sách bảo mật</a>
          <a href="https://www.poso.vn/terms">Điều khoản</a>
        </nav>
        <p>© 2026 Poso</p>
      </footer>
      <FloatingContact />
    </div>
  );
}
