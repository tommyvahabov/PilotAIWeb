import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#" className="flex items-center">
          <Image src="/logo.svg" alt="Pilot AI" width={110} height={27} />
        </a>

        <div className="flex items-center gap-6">
          <a href="#products" className="text-xs text-muted transition-colors hover:text-foreground">Products</a>
          <a href="#about" className="text-xs text-muted transition-colors hover:text-foreground">About</a>
          <a href="#contact" className="text-xs text-muted transition-colors hover:text-foreground">Contact</a>
        </div>

        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Pilot AI Systems
        </p>
      </div>
    </footer>
  );
}
