import Link from 'next/link';
import { sections, site } from '../../lib/site';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0c0d0e]/85 border-b border-zinc-800">
      <div className="h-0.5 bg-[repeating-linear-gradient(135deg,#e89120_0_8px,#111_8px_16px)]" />
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-[family-name:var(--font-display)] uppercase tracking-wide text-zinc-100 shrink-0">
          {site.name}
        </Link>
        <nav className="flex items-center gap-3 sm:gap-4 text-sm text-zinc-400 overflow-x-auto">
          {sections.map((section) => (
            <Link key={section.href} href={section.href} className="hover:text-amber-400 whitespace-nowrap">
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
