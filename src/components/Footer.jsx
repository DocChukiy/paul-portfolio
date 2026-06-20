import { profile } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05050A] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-white/50 md:flex-row md:items-center">
        <p className="leading-6">© 2026 {profile.name}. Built with React, Tailwind CSS, and ambition.</p>
        <a className="w-fit text-white/45 transition hover:text-cyan-200" href="#hero">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
