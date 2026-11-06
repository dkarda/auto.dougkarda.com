import PageHeader from '../../components/PageHeader';

export default function Paint() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Repair"
        title="Paint"
        description="Fix chips and scratches when a match is realistic. Start with the factory code, not a guess from a swatch."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">How to find your exact paint code</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Driver&apos;s side door jamb: look for a sticker on the door column. It will often have{' '}
              <span className="text-zinc-100">EXT PNT</span> followed by a 3-digit code.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
