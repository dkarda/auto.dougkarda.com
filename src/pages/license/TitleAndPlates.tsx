import PageHeader from '../../components/PageHeader';

export default function TitleAndPlates() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="License"
        title="Title and plates"
        description="The title is who owns the car. The plates are how the state tracks it. Mixing those up is how you leave a sale unfinished."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Title</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>If a lender is on the title, you do not fully own the car yet. Payoff and a release have to happen before a clean transfer.</li>
            <li>Names should match the buyer and seller IDs. A nickname on the title is a future appointment.</li>
            <li>Keep the title out of the car. Registration belongs in the glovebox. The title does not.</li>
            <li>A bill of sale is not a title. You need both when the state asks.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Plates</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Some states let you move plates to the next car. Some issue new ones. Check before you leave the old plates on a sold car.</li>
            <li>Selling? Take your plates if the state wants them back, or transfer them the same day. Do not wait and hope.</li>
            <li>Buying out of state usually means a temp tag, then a local title and plates within a deadline that is shorter than it feels.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
