import { PosoLogo } from "@/components/PosoLogo";
import {
  Check,
  ChevronDown,
  CreditCard,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Wifi,
} from "lucide-react";
import imgTee from "@/assets/product-ao-thun.jpg";
import imgShirt from "@/assets/product-so-mi.jpg";
import imgJeans from "@/assets/product-jeans.jpg";
import imgHoodie from "@/assets/product-hoodie.jpg";

const products = [
  {
    name: "Áo thun cotton",
    image: imgTee,
    price: "249.000",
    variant: "Đen",
    sizes: "S · M · L",
    stock: 24,
  },
  {
    name: "Quần jeans slim",
    image: imgJeans,
    price: "690.000",
    variant: "Xanh denim",
    sizes: "29 · 30 · 31",
    stock: 8,
  },
  {
    name: "Áo sơ mi linen",
    image: imgShirt,
    price: "459.000",
    variant: "Trắng",
    sizes: "M · L · XL",
    stock: 12,
  },
  {
    name: "Hoodie nỉ bông",
    image: imgHoodie,
    price: "520.000",
    variant: "Be",
    sizes: "M · L",
    stock: 3,
  },
];

/** A static product illustration, not a live till. Keep sample figures explicit. */
export function PosoPosPreview() {
  return (
    <figure className="pos-preview">
      <div className="pos-window">
        <div className="pos-window-bar" aria-hidden="true">
          <div className="pos-window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>Poso / Bán hàng</span>
          <span className="pos-online">
            <Wifi size={11} /> Đã đồng bộ
          </span>
        </div>
        <div className="pos-toolbar">
          <PosoLogo className="w-14" />
          <span className="pos-active-tab">
            <ShoppingBag size={13} /> Bán hàng
          </span>
          <span className="pos-shop">
            Shop của bạn <ChevronDown size={12} />
          </span>
          <span className="pos-avatar" aria-hidden="true">
            H
          </span>
        </div>
        <div className="pos-workspace">
          <div className="pos-catalog">
            <div className="pos-search" aria-hidden="true">
              <Search size={13} />
              <span>Tìm sản phẩm hoặc quét mã</span>
              <span className="pos-shortcut">F3</span>
            </div>
            <div className="pos-categories" aria-hidden="true">
              <span>Tất cả</span>
              <span>Áo</span>
              <span>Quần</span>
              <SlidersHorizontal size={12} />
            </div>
            <div className="pos-products">
              {products.map((product) => (
                <div className="pos-product" key={product.name}>
                  <div className="pos-product-photo">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={512}
                      height={512}
                      decoding="async"
                    />
                    <span className="pos-product-add" aria-hidden="true">
                      <Plus size={12} />
                    </span>
                  </div>
                  <div className="pos-product-info">
                    <p className="pos-product-name">{product.name}</p>
                    <p className="pos-product-variant">
                      {product.variant} · {product.sizes}
                    </p>
                    <div className="pos-product-bottom">
                      <strong>{product.price}đ</strong>
                      <span className={product.stock <= 3 ? "pos-stock-low" : ""}>
                        Tồn {product.stock}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pos-order">
            <div className="pos-order-heading">
              <span>Đơn hàng #038</span>
              <span className="pos-order-dot" aria-hidden="true" />
            </div>
            <p className="pos-customer">
              <span>Khách lẻ</span>
              <span>3 sản phẩm</span>
            </p>
            <div className="pos-order-items">
              <div className="pos-order-item">
                <img src={imgTee} alt="" width={36} height={42} />
                <div>
                  <p>Áo thun cotton</p>
                  <span>Đen / M · SL: 2</span>
                  <strong>498.000đ</strong>
                </div>
              </div>
              <div className="pos-order-item">
                <img src={imgShirt} alt="" width={36} height={42} />
                <div>
                  <p>Áo sơ mi linen</p>
                  <span>Trắng / L · SL: 1</span>
                  <strong>459.000đ</strong>
                </div>
              </div>
            </div>
            <div className="pos-order-summary">
              <p>
                <span>Tạm tính</span>
                <span>957.000đ</span>
              </p>
              <p>
                <span>Giảm giá</span>
                <span>0đ</span>
              </p>
              <div className="pos-order-total">
                <span>Tổng cộng</span>
                <strong>957.000đ</strong>
              </div>
              <div className="pos-payment">
                <CreditCard size={14} />
                <span>Thanh toán</span>
                <span>F9</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pos-today">
          <div>
            <span className="pos-today-icon">
              <ShoppingBag size={17} />
            </span>
            <div>
              <p>Đơn hôm nay</p>
              <strong>
                38 <span>đơn hàng</span>
              </strong>
            </div>
          </div>
          <div>
            <span className="pos-revenue-dot" aria-hidden="true" />
            <div>
              <p>Doanh thu hôm nay</p>
              <strong>
                14.280.000<span>đ</span>
              </strong>
            </div>
            <div className="pos-mini-chart" aria-hidden="true">
              {[35, 52, 42, 70, 58, 82, 100].map((height, i) => (
                <i key={i} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption>
        <Check size={13} aria-hidden="true" /> Một màn hình. Trọn việc bán hàng.
        <span>Giao diện minh họa</span>
      </figcaption>
    </figure>
  );
}
