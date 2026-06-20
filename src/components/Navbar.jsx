import { useState } from 'react';
import { navLinks, profile } from '../data/portfolioData';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070A]/90 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a
            className="group flex min-w-0 items-center gap-3 rounded-md"
            href="#hero"
            onClick={closeMenu}
          >
            <span
              className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white text-sm font-black text-black shadow-[0_0_35px_rgba(255,255,255,0.12)]"
              aria-hidden="true"
            >
              P
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-wide text-white">
                {profile.name}
              </span>
              <span className="block text-xs font-medium uppercase tracking-[0.24em] text-white/40">
                Developer Founder
              </span>
            </span>
          </a>

          <ul className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm font-medium text-white/60 shadow-2xl shadow-black/20 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="hidden rounded-md border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/10 hover:text-white lg:inline-flex"
            href="#contact"
          >
            Start a Project
          </a>

          <button
            className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/10 lg:hidden"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
                aria-hidden="true"
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
                aria-hidden="true"
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          aria-hidden={!isMenuOpen}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <ul className="space-y-1 border-t border-white/10 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="block rounded-md px-3 py-3 text-base font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                    href={link.href}
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? undefined : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
