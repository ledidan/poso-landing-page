import { motion } from "motion/react";
import { Check, ShoppingBag } from "lucide-react";
import imgTee from "@/assets/product-ao-thun.jpg";
import imgShirt from "@/assets/product-so-mi.jpg";
import imgJeans from "@/assets/product-jeans.jpg";

const lines = [
  { name: "Áo thun cotton", color: "Đen", size: "M", sku: "TS-BLK-M", price: "249.000", qty: 2, image: imgTee },
  { name: "Sơ mi linen", color: "Trắng", size: "L", sku: "SM-WHT-L", price: "459.000", qty: 1, image: imgShirt },
  { name: "Quần jeans slim", color: "Xanh", size: "30", sku: "JN-BLU-30", price: "690.000", qty: 1, image: imgJeans },
];

export function PosoTerminal() {
  return (
    <div className="relative w-full">
      {/* Main terminal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[oklch(0.16_0.02_60)]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-poso text-[11px] font-bold text-poso-foreground">
              P
            </div>
            <span className="text-xs font-semibold tracking-wide text-white/70">POSO · Bán hàng</span>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/60">
            Ca sáng
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {lines.map((l, i) => (
            <motion.div
              key={l.sku}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-2.5"
            >
              <img
                src={l.image}
                alt={l.name}
                width={512}
                height={512}
                loading="lazy"
                className="h-11 w-11 shrink-0 rounded-xl bg-white/10 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-white">{l.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-1">
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-white/70">
                    {l.color}
                  </span>
                  <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-white/70">
                    Size {l.size}
                  </span>
                  <span className="rounded-md bg-poso/20 px-1.5 py-0.5 text-[10px] font-medium text-poso">
                    {l.sku}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[13px] font-semibold text-white">{l.price}</p>
                <p className="text-[10px] text-white/50">x{l.qty}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-4 flex items-center justify-between rounded-2xl bg-poso p-3.5"
        >
          <div className="flex items-center gap-2 text-poso-foreground">
            <ShoppingBag className="h-4 w-4" />
            <span className="text-xs font-medium">4 sản phẩm</span>
          </div>
          <span className="text-base font-bold text-poso-foreground">1.647.000đ</span>
        </motion.div>
      </motion.div>

      {/* Floating variant chip */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
        transition={{
          opacity: { duration: 0.6, delay: 1.5 },
          scale: { duration: 0.6, delay: 1.5 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
        }}
        className="absolute -left-4 top-24 hidden rounded-2xl border border-white/10 bg-[oklch(0.16_0.02_60)]/90 px-3 py-2 shadow-xl backdrop-blur-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-white/50">Tồn kho</p>
        <p className="text-sm font-bold text-white">
          12 <span className="text-[11px] font-normal text-white/50">/ Đen · M</span>
        </p>
      </motion.div>

      {/* Handheld device */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -6 }}
        animate={{ opacity: 1, y: [0, -10, 0], rotate: -6 }}
        transition={{
          opacity: { duration: 0.7, delay: 1.1 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
        }}
        className="absolute -bottom-24 -right-2 w-28 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[oklch(0.16_0.02_60)]/95 p-2.5 shadow-2xl backdrop-blur-xl sm:-bottom-20 sm:-right-10 sm:w-36"
      >
        <p className="text-[9px] uppercase tracking-wider text-white/40">Máy cầm tay</p>
        <p className="mt-1 text-[11px] font-semibold text-white">Quét mã SKU</p>
        <div className="mt-2 h-8 rounded-lg bg-gradient-to-r from-poso/60 to-poso/10" />
        <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-poso">
          <Check className="h-3 w-3" /> Đã trừ kho
        </div>
      </motion.div>
    </div>
  );
}
