import PageHeader from '../../components/PageHeader';

export default function Preparedness() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Resources"
        title="Preparedness"
        description="What I keep in the car so a small problem stays a small problem. Cabin for papers and the tools I grab first. Trunk for the bulky stuff."
      />
      <div className="space-y-6 text-zinc-400">
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Cabin</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Current registration card.</li>
            <li>Insurance card, or the digital proof the carrier actually accepts.</li>
            <li>A screwdriver. Enough fasteners and panels need one that it earns a spot in the glovebox.</li>
            <li>Tire pressure gauge. Check before a trip, not after the light comes on.</li>
            <li>Flashlight. A phone light is a weak stand-in on the shoulder at night.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-zinc-100 mb-2">Trunk</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Jumper cables. Roadside assistance is a backup, not a plan for a dead battery in a parking lot.</li>
            <li>Work gloves. Changing a tire or grabbing a dirty jack without them is how you ruin a Saturday shirt.</li>
            <li>A working spare tire. “Working” means it holds air when you check it, not that it was full the day you bought the car.</li>
            <li>Jack and lug wrench. Confirm they are actually in the well, not left in the garage after the last rotation.</li>
            <li>A maintained first-aid kit. Maintained means you restock what you use and replace what expires. An old box is theater.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
