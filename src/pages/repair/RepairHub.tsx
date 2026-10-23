import HubGrid from '../../components/HubGrid';
import PageHeader from '../../components/PageHeader';
import { repairPages } from '../../lib/site';

export default function RepairHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Repair"
        title="Fix what you can, stop before you make it worse"
        description="Repair notes I want later: diagnosis first, the jobs I will do myself, and the ones I hand off. More pages will land here as I write them up."
      />
      <HubGrid items={repairPages} />
    </main>
  );
}
