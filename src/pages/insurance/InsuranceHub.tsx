import HubGrid from '../../components/HubGrid';
import PageHeader from '../../components/PageHeader';
import { insurancePages } from '../../lib/site';

export default function InsuranceHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Insurance"
        title="Know what you are actually paying for"
        description="Coverage language is designed to be foggy. These notes are the version I want when I am shopping, filing a claim, or deciding what to keep."
      />
      <HubGrid items={insurancePages} />
    </main>
  );
}
