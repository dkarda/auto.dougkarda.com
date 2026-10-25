import PageHeader from '../../components/PageHeader';

export default function Registration() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="License"
        title="Registration"
        description="The annual (or biennial) reminder that the car is allowed on the road. Easy to ignore until a sticker expires."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Before you renew</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Insurance has to be active and match the name and VIN on the registration. Lapses get expensive fast.</li>
            <li>Emissions or safety inspection, if your state requires one. Fail that and the renewal stops.</li>
            <li>Address on the registration should be current. Mail is how most people find out they missed it.</li>
            <li>Unpaid tickets or tolls can block the renewal. Check that before you stand in line.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">What I keep in the car</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Current registration card — not last year&apos;s, not a photo of a photo if the state wants paper.</li>
            <li>Insurance card or the digital proof the carrier actually accepts.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Affixing the sticker</h2>
          <p className="mb-3">
            Easiest path: time the renewal with the inspection and let them put it on. They do this all day and the
            glass is already clean.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Doing it yourself: a metal razor scraper and glass cleaner get the old sticker off without leaving a cloudy patch.</li>
            <li>Clean, dry glass — then the new sticker, square, in the same corner the old one lived.</li>
            <li>Do not stack years. Peel the expired one. A pile of stickers is how they peel themselves off in July.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Renewal</h2>
          <p>
            Based on what my state does, I suspect they all give plenty of notice — email or standard U.S. mail — and
            the letter explains the steps. I have not hunted down every DMV portal. When the notice shows up, follow it.
          </p>
        </section>
      </div>
    </main>
  );
}
