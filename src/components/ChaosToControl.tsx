import { PosoLogo } from "@/components/PosoLogo";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { AlertTriangle, Check, PackageCheck, ScanLine } from "lucide-react";

const chips = [
  { label: "ÁO COTTON", x: -110, y: -155, r: -10 },
  { label: "MÀU ĐEN", x: 105, y: -128, r: 8 },
  { label: "SIZE M", x: -118, y: -48, r: 7 },
  { label: "SKU: TS-BLK-M", x: 88, y: -32, r: -7 },
  { label: "CÒN 12", x: -94, y: 58, r: 11 },
  { label: "SIZE L", x: 112, y: 78, r: -5 },
  { label: "MÀU TRẮNG", x: -84, y: 148, r: -6 },
  { label: "SẮP HẾT", x: 94, y: 166, r: 9 },
];

function Chip({
  label,
  x,
  y,
  r,
  progress,
  index,
}: {
  label: string;
  x: number;
  y: number;
  r: number;
  progress: MotionValue<number>;
  index: number;
}) {
  const tx = useTransform(progress, [0, 0.48], [x, 0]);
  const ty = useTransform(progress, [0, 0.48], [y, 0]);
  const rot = useTransform(progress, [0, 0.48], [r, 0]);
  const opacity = useTransform(progress, [0.14, 0.32], [1, 0]);
  const scale = useTransform(progress, [0, 0.48], [1, 0.82]);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.span
        style={{ x: tx, y: ty, rotate: rot, opacity, scale }}
        transition={{ delay: index * 0.02 }}
        className="whitespace-nowrap rounded-full border-2 border-poso/30 bg-card px-3.5 py-2 text-xs font-bold text-foreground shadow-md sm:px-4 sm:text-sm"
      >
        {label}
      </motion.span>
    </div>
  );
}

const variants = [
  { color: "Đen", tone: "bg-foreground", sizes: [12, 8, 2] },
  { color: "Trắng", tone: "bg-card", sizes: [6, 3, 0] },
];

export function ChaosToControl() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 42%"],
  });

  const cardOpacity = useTransform(scrollYProgress, [0.38, 0.68], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0.38, 0.76], [0.92, 1]);
  const cardY = useTransform(scrollYProgress, [0.38, 0.76], [28, 0]);
  const successOpacity = useTransform(scrollYProgress, [0.72, 0.94], [0, 1]);
  const successY = useTransform(scrollYProgress, [0.72, 0.94], [10, 0]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-[10px] font-bold uppercase sm:gap-4 sm:text-xs">
        <span className="rounded-md border border-border bg-muted px-2 py-2 text-muted-foreground sm:px-4">
          1. Đang rối
        </span>
        <span aria-hidden className="text-poso">
          →
        </span>
        <span className="rounded-md border border-poso/30 bg-poso/10 px-2 py-2 text-poso sm:px-4">
          2. POSO xếp
        </span>
        <span aria-hidden className="text-poso">
          →
        </span>
        <span className="rounded-md bg-poso px-2 py-2 text-poso-foreground sm:px-4">3. Đã rõ</span>
      </div>
      <div
        ref={ref}
        className="relative mx-auto flex h-[38rem] max-w-xl items-center justify-center sm:h-[42rem]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {chips.map((chip, index) => (
            <Chip key={chip.label} {...chip} progress={scrollYProgress} index={index} />
          ))}
        </div>

        <motion.div
          style={{ opacity: cardOpacity, scale: cardScale, y: cardY }}
          className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
            <div>
              <div className="flex items-center gap-2">
                <PosoLogo className="w-16" />
                <span className="text-xs font-bold text-poso">ĐÃ SẮP XẾP</span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold text-foreground sm:text-xl">
                Áo thun cotton basic
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                1 sản phẩm · 2 màu · 3 size · 6 SKU
              </p>
            </div>
            <PackageCheck className="h-7 w-7 shrink-0 text-poso" aria-hidden />
          </div>

          <div className="px-3 py-4 sm:px-6 sm:py-5">
            <div className="grid grid-cols-[5.25rem_repeat(3,1fr)] gap-1.5 text-center text-xs sm:grid-cols-[7rem_repeat(3,1fr)] sm:gap-2">
              <div className="flex items-center text-left font-semibold text-muted-foreground">
                Màu / Size
              </div>
              {["S", "M", "L"].map((size) => (
                <div key={size} className="rounded-md bg-muted py-2 font-extrabold text-foreground">
                  {size}
                </div>
              ))}
              {variants.flatMap((variant) => [
                <div
                  key={`${variant.color}-label`}
                  className="flex items-center gap-2 rounded-md border border-border px-2 py-3 text-left font-bold text-foreground"
                >
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full border border-border ${variant.tone}`}
                  />
                  {variant.color}
                </div>,
                ...variant.sizes.map((stock, index) => (
                  <div
                    key={`${variant.color}-${index}`}
                    className={`flex min-h-14 flex-col items-center justify-center rounded-md border font-extrabold ${
                      stock === 0
                        ? "border-border bg-muted text-muted-foreground"
                        : stock <= 3
                          ? "border-destructive/30 bg-destructive/10 text-destructive"
                          : "border-poso/25 bg-poso/10 text-foreground"
                    }`}
                  >
                    <span className="text-base sm:text-lg">{stock}</span>
                    <span className="text-[9px] font-semibold">
                      {stock === 0 ? "Hết" : stock <= 3 ? "Sắp hết" : "Còn"}
                    </span>
                  </div>
                )),
              ])}
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-md border-2 border-poso bg-poso/5 p-3">
                <p className="text-[10px] font-bold uppercase text-poso">Đang chọn</p>
                <p className="mt-1 text-sm font-extrabold text-foreground">Đen · Size M</p>
                <p className="mt-1 font-mono text-xs font-semibold text-muted-foreground">
                  SKU: TS-BLK-M
                </p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-foreground p-3 text-background">
                <div>
                  <p className="text-[10px] font-bold uppercase opacity-60">Tồn chính xác</p>
                  <p className="mt-1 text-lg font-extrabold">12 sản phẩm</p>
                </div>
                <ScanLine className="h-6 w-6 text-poso" aria-hidden />
              </div>
            </div>
            <div className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" aria-hidden />
              <span>POSO báo ngay biến thể sắp hết hoặc đã hết hàng.</span>
            </div>
          </div>

          <motion.div
            style={{ opacity: successOpacity, y: successY }}
            className="flex items-center justify-center gap-2 border-t border-poso/20 bg-poso/10 px-4 py-3 text-sm font-bold text-poso"
          >
            <Check className="h-4 w-4" aria-hidden /> Bán 1 áo · tồn kho tự giảm 12 → 11
          </motion.div>
        </motion.div>
      </div>
      <p className="mx-auto -mt-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        Chọn đúng <strong className="text-foreground">màu + size</strong>, POSO tự tìm đúng mã SKU
        và số lượng còn lại.
      </p>
    </div>
  );
}
