export function PosoLogo({ className = "w-28" }: { className?: string }) {
  return (
    <img
      src="/poso-logo.webp"
      alt="Poso"
      width={560}
      height={144}
      className={`poso-brand-logo block h-auto max-w-full ${className}`}
    />
  );
}
