import { Link } from 'react-router-dom';
import { sections, site } from '../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-12 bg-[#0a0b0c]/80">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-zinc-500">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
          {sections.map((section) => (
            <Link key={section.href} to={section.href} className="hover:text-amber-400">
              {section.title}
            </Link>
          ))}
        </div>
        <p className="mb-2">Affiliate disclosure: As an Amazon Associate, I earn from qualifying purchases.</p>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
