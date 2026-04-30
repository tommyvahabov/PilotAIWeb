"use client";

import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#" className="flex min-h-11 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Pilot AI"
            width={140}
            height={34}
            className="block h-auto w-[140px]"
            loading="eager"
          />
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link inline-flex min-h-11 items-center rounded-full px-3 text-sm text-foreground/75"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-primary inline-flex min-h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/80"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="overflow-hidden border-t border-card-border md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="nav-link inline-flex min-h-11 items-center rounded-full px-3 text-sm text-foreground/75"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-fit rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
