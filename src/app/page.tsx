import Link from 'next/link';
import HubGrid from './components/HubGrid';
import PageHeader from './components/PageHeader';
import { sections } from '../lib/site';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        title="auto.dougkarda.com"
        description="A full automotive reference — detailing, repair, maintenance, insurance, and the resources I actually use. No fluff. Just what I want to remember the next time I need it."
      />

      <div className="mb-10 flex flex-wrap gap-3">
        <Link href="/detailing" className="px-4 py-2 rounded-md bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400">
          Start with detailing
        </Link>
        <Link href="/resources" className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-200 hover:border-amber-500/60 hover:text-amber-400">
          Browse resources
        </Link>
      </div>

      <HubGrid items={sections} />
    </main>
  );
}
