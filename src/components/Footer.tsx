import { site } from '../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-12 bg-[#0a0b0c]/80">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-zinc-500">
        <p className="mb-2">Affiliate disclosure: As an Amazon Associate, I earn from qualifying purchases.</p>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
