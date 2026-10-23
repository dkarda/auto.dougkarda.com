import ProductCard from '../../components/ProductCard';
import { Section } from '../../components/Section';
import PageHeader from '../../components/PageHeader';

export default function DashTrim() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Dash and trim"
        description="Interior plastics and trim that should look clean, not greasy."
      />

      <Section title="Tools I Use">
        <ProductCard
          name="Drill Brush Attachment Set"
          description="Speeds up scrubbing and pulls dirt out of fibers better than hand scrubbing."
          link="#"
        />
        <ProductCard
          name="Wet/Dry Vacuum"
          description="For extracting dirty water and debris after agitation."
          link="#"
        />
      </Section>

      <Section title="Cleaner I Use">
        <ProductCard
          name="Carpet Cleaning Solution"
          description="Strong enough for stains but doesn't leave residue or smell."
          link="#"
        />
      </Section>
    </main>
  );
}
