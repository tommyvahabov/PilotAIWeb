export default function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Pilot<span className="text-accent-light">AI</span>
          </span>
        </div>

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
