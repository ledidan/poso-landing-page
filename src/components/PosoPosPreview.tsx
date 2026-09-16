import { motion } from "motion/react";
import { Search, ShoppingBag, TrendingUp, Receipt } from "lucide-react";
import imgTee from "@/assets/product-ao-thun.jpg";
import imgShirt from "@/assets/product-so-mi.jpg";
import imgJeans from "@/assets/product-jeans.jpg";
import imgHoodie from "@/assets/product-hoodie.jpg";

const products = [
  { name: "Áo thun cotton", image: imgTee, price: "249.000", sizes: ["S", "M", "L"], stock: 24 },
  { name: "Áo sơ mi linen", image: imgShirt, price: "459.000", sizes: ["M", "L", "XL"], stock: 12 },
  { name: "Quần jeans slim", image: imgJeans, price: "690.000", sizes: ["29", "30", "31"], stock: 8 },
  { name: "Hoodie nỉ bông", image: imgHoodie, price: "520.000", sizes: ["M", "L"], stock: 3 },
];

const cart = [
  { name: "Áo thun cotton", variant: "Đen · M", price: "249.000", qty: 2 },
  { name: "Áo sơ mi linen", variant: "Trắng · L", price: "459.000", qty: 1 },
];

export function PosoPosPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[1.75rem] border border-border bg-card p-3 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.28)] sm:p-4"
    >
      {/* Thanh trên */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-poso text-xs font-bold text-poso-foreground">
            P
          </span>
          <span className="truncate text-sm font-semibold text-foreground">Bán hàng</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
          <Search className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden sm:inline">Tìm sản phẩm hoặc quét mã</span>
          <span className="sm:hidden">Quét mã</span>
        </div>
      </div>

      {/* Số liệu nhanh */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-muted/70 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <Receipt className="h-3.5 w-3.5" /> Đơn hôm nay
          </p>
          <p className="mt-1 text-lg font-bold text-foreground">38</p>
        </div>
        <div className="rounded-2xl bg-muted/70 p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" /> Doanh thu hôm nay
          </p>
          <p className="mt-1 text-lg font-bold text-poso">14.280.000đ</p>
        </div>
      </div>

      {/* Lưới sản phẩm */}
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {products.map((p) => (
          <div key={p.name} className="rounded-2xl border border-border bg-background p-2">
            <img
              src={p.image}
              alt={p.name}
              width={512}
              height={512}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <p className="mt-2 truncate text-[12px] font-semibold text-foreground">{p.name}</p>
            <p className="text-[12px] font-bold text-poso">{p.price}đ</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {p.sizes.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <p
              className={`mt-1.5 text-[10px] font-semibold ${
                p.stock <= 3 ? "text-destructive" : "text-muted-foreground"
              }`}
            >
              Tồn: {p.stock} {p.stock <= 3 ? "· sắp hết" : ""}
            </p>
          </div>
        ))}
      </div>

      {/* Giỏ hàng */}
      <div className="mt-3 rounded-2xl border border-border bg-background p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Đơn đang tạo
        </p>
        <div className="mt-2 space-y-2">
          {cart.map((c) => (
            <div key={c.name} className="flex items-center justify-between gap-3 text-[12px]">
              <div className="min-w-0">
                <p className="truncate font-semibold text-foreground">{c.name}</p>
                <p className="text-muted-foreground">{c.variant}</p>
              </div>
              <p className="shrink-0 font-semibold text-foreground">
                {c.price}đ <span className="text-muted-foreground">x{c.qty}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-poso px-3 py-2.5 text-poso-foreground">
          <span className="flex items-center gap-1.5 text-xs font-medium">
            <ShoppingBag className="h-4 w-4" /> 3 sản phẩm
          </span>
          <span className="text-sm font-bold">957.000đ</span>
        </div>
      </div>
    </motion.div>
  );
}
