import Link from 'next/link';
import type { HubLink } from '../../lib/site';

export default function HubGrid({ items }: { items: HubLink[] }) {
  return (
    <section className="grid sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-lg border border-zinc-800 bg-zinc-900/70 p-5 hover:border-amber-500/50 hover:bg-zinc-900 transition"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">{item.title}</h2>
            <span className="text-amber-500/70 group-hover:translate-x-1 group-hover:text-amber-400 transition">→</span>
          </div>
          <p className="text-sm text-zinc-400 mt-1">{item.desc}</p>
        </Link>
      ))}
    </section>
  );
}
