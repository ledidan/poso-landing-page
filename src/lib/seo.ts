export const SITE_URL = "https://www.poso.vn";

const DEFAULT_TITLE = "POSO | Phần mềm quản lý bán hàng cho shop thời trang";
const DEFAULT_DESCRIPTION =
  "POSO giúp shop thời trang bán hàng nhanh, quản lý sản phẩm theo size, màu, SKU, kiểm soát tồn kho và theo dõi doanh thu trên một hệ thống. Dùng thử miễn phí.";

export function createPageHead({
  path = "/",
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: {
  path?: string;
  title?: string;
  description?: string;
} = {}) {
  const url = new URL(path, SITE_URL).href;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "POSO" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:image", content: `${SITE_URL}/poso_og.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Logo POSO — Bán hàng tinh gọn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/poso_og.jpg` },
      { name: "twitter:image:alt", content: "Logo POSO — Bán hàng tinh gọn" },
    ],
    // Each page owns its canonical; root links are inherited, not overridden.
    links: [{ rel: "canonical", href: url }],
  };
}
