import HubGrid from '../../components/HubGrid';
import PageHeader from '../../components/PageHeader';
import { licensePages } from '../../lib/site';

export default function LicenseHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="License"
        title="Keep the car legal without a DMV scavenger hunt"
        description="Registration, title, and plates. Rules change by state, so this is the checklist I want before I walk into an office or click renew — not a substitute for the local DMV."
      />
      <HubGrid items={licensePages} />
    </main>
  );
}
