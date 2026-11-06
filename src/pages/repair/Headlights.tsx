import PageHeader from '../../components/PageHeader';

export default function Headlights() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Repair"
        title="Headlights"
        description="Yellow, cloudy covers are oxidized factory clear, not dirty plastic. Buff them back, then protect them or they haze again in a season."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">When buffing is enough</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>The lens is intact — no cracks, no moisture inside, no deep pitting you can catch a fingernail in.</li>
            <li>The yellow is on the surface. If the plastic itself is cooked through, replacement is cheaper than pretending.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">How I buff them</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Wash the covers. Tape off the paint and trim. Compound on the fender is a new paint job.</li>
            <li>If they are only slightly hazy, polish may be enough. If they are yellow, wet-sand first, coarse to fine, until the color is gone and the surface is even.</li>
            <li>Buff with polish until they look clear and wet. Stop when the haze is gone, not when the plastic is thin.</li>
            <li>UV clear or a dedicated headlight sealant is the job. Skip it and they yellow again. A coat of wax is not UV protection.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
