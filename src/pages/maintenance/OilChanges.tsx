import PageHeader from '../../components/PageHeader';

export default function OilChanges() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Maintenance"
        title="Oil changes"
        description="The one interval I do not stretch. Everything else is easier if this stays honest."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">What I follow</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the viscosity and spec the owner&apos;s manual calls for — not whatever is on sale.</li>
            <li>Time matters as much as miles if the car sits. Oil still ages.</li>
            <li>Reset the reminder and write the date/mileage down. Memory is not a log.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Still to add</h2>
          <p>Filter part numbers, drain-plug torque, and the exact interval I use on the Lexus.</p>
        </section>
      </div>
    </main>
  );
}
