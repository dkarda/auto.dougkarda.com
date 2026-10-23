import HubGrid from '../components/HubGrid';
import PageHeader from '../components/PageHeader';
import { maintenancePages } from '../../lib/site';

export default function MaintenanceHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Maintenance"
        title="Stay ahead of the expensive stuff"
        description="Intervals, fluids, filters, and wear items. The goal is a short list you can actually follow — not a 40-page schedule nobody opens."
      />
      <HubGrid items={maintenancePages} />
    </main>
  );
}
