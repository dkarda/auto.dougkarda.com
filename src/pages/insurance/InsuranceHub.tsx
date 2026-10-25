import PageHeader from '../../components/PageHeader';

export default function InsuranceHub() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Insurance"
        title="Know what you are actually paying for"
        description="Auto insurance is complex. These notes are the version I want when I am shopping, filing a claim, or deciding what to keep."
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
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Emergency roadside assistance</h2>
          <p>
            Tow, jump, flat, lockout, fuel. Useful if you do not already have it through a club or the car&apos;s
            roadside plan. Check the tow-mile limit and whether it stacks with a manufacturer program you already pay
            for.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Rental reimbursement</h2>
          <p>
            Pays for a rental while your car is in the shop after a covered claim. It is a daily cap and a day limit,
            not a blank check. Worth it if one car is how you get to work. Skip it if you have a spare or can sit
            still for a week.
          </p>
        </section>
      </div>
    </main>
  );
}
