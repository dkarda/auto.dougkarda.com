import PageHeader from '../../components/PageHeader';

export default function CoverageBasics() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Insurance"
        title="Coverage basics"
        description="The common pieces of an auto policy, in plain language."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Liability</h2>
          <p>
            Pays other people when you are at fault. Bodily injury and property damage are separate limits.
            This is the coverage you cannot cheap out on — a totaled Honda is cheaper than a lawsuit.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Collision and comprehensive</h2>
          <p>
            Collision covers your car in a crash. Comprehensive covers the non-crash list: theft, hail, animals,
            falling objects. Both have deductibles. If the car is worth less than a few deductibles, dropping them
            can be rational.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Uninsured / underinsured</h2>
          <p>
            Pays you when the other driver has no insurance, or not enough. In a lot of places this is the coverage
            that actually matters after a crash.
          </p>
        </section>
      </div>
    </main>
  );
}
