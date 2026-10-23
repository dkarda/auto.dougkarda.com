import HubGrid from '../components/HubGrid';
import PageHeader from '../components/PageHeader';
import { detailingPages } from '../../lib/site';

export default function DetailingHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Keep the car clean without collecting products"
        description="I got tired of wasting money on bad products. This is the exact setup I use — simple, effective, and repeatable."
      />
      <HubGrid items={detailingPages} />
    </main>
  );
}
