import { useState } from "react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "/about" },
  { label: "Docs", href: "#docs" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10"
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" role="img" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#111111] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 120 120" fill="none" role="img" aria-hidden="true">
                <path
                  d="M60 0c33.137 0 60 26.863 60 60s-26.863 60-60 60-60-26.863-60-60 26.863-60 60-60z m6.976 32.692c-2.497-6.331-11.456-6.331-13.953 0l-4.546 11.55c-0.762 1.933-2.293 3.464-4.226 4.226l-11.55 4.546c-6.331 2.497-6.331 11.456 0 13.953l11.55 4.546c1.933 0.762 3.464 2.293 4.226 4.226l4.546 11.55c2.497 6.331 11.456 6.331 13.953 0l4.546-11.55c0.762-1.933 2.293-3.464 4.226-4.226l11.55-4.546c6.331-2.497 6.331-11.456 0-13.953l-11.55-4.546c-1.933-0.762-3.464-2.293-4.226-4.226l-4.546-11.55z"
                  fill="#FF8400"
                />
              </svg>
              <span className="text-white text-base font-bold tracking-wider font-[var(--font-primary)]">
                UTILITIES
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" role="img" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#2E2E2E] mx-5" />

          {/* Nav links */}
          <nav className="flex flex-col px-5 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-white text-lg font-medium font-[var(--font-secondary)] hover:text-[#FF8400] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px bg-[#2E2E2E] mx-5" />

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 px-5 py-6">
            <a
              href="#login"
              className="w-full py-3 text-center text-white border border-[#2E2E2E] rounded-lg text-base font-medium font-[var(--font-secondary)] hover:border-[#888] transition-colors"
            >
              Log In
            </a>
            <a
              href="#trial"
              className="w-full py-3 text-center text-[#111111] bg-[#FF8400] rounded-lg text-base font-semibold font-[var(--font-secondary)] hover:bg-[#E67700] transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </>
  );
}
