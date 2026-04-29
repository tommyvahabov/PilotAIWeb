import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="flex min-h-11 items-center">
          <Image src="/logo.svg" alt="Pilot AI" width={110} height={27} />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <a href="#products" className="inline-flex min-h-10 items-center rounded-full px-3 text-xs text-muted transition-colors hover:text-foreground">Products</a>
          <a href="#about" className="inline-flex min-h-10 items-center rounded-full px-3 text-xs text-muted transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="inline-flex min-h-10 items-center rounded-full px-3 text-xs text-muted transition-colors hover:text-foreground">Contact</a>
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Pilot AI Systems
        </p>
      </div>
    </footer>
  );
}
