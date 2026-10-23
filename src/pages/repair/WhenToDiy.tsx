import PageHeader from '../../components/PageHeader';

export default function WhenToDiy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Repair"
        title="When to DIY"
        description="A filter I use before buying parts or starting a job."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Do it yourself when</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>The failure is obvious and the procedure is documented.</li>
            <li>You have the tools, or the tool cost is still cheaper than shop labor.</li>
            <li>A mistake is reversible — you can stop and take it to a shop.</li>
            <li>Safety systems are not involved (airbags, brakes if you are not set up for them, steering).</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Hand it off when</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>You need a lift, specialty scan tools, or press work you do not have.</li>
            <li>The job can leave the car undrivable in a driveway with no backup plan.</li>
            <li>Torque, calibration, or alignment is required and you cannot verify it.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
