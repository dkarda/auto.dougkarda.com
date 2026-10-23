import HubGrid from '../../components/HubGrid';
import PageHeader from '../../components/PageHeader';
import { resourcePages } from '../../lib/site';

export default function ResourcesHub() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Resources"
        title="The stuff I keep reaching for"
        description="Vehicle notes, manuals, tools, and links. This is the catch-all for anything that is not a how-to in another section."
      />
      <HubGrid items={resourcePages} />
    </main>
  );
}
