import ProductCard from '../../components/ProductCard';
import { Section } from '../../components/Section';
import PageHeader from '../../components/PageHeader';

export default function CarpetCleaning() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Carpet cleaning"
        description="My simple setup for carpets and floor mats. This combo handles most stains without overcomplicating things."
      />

      <Section title="Tools I Use">
        <ProductCard
          name="Chemical Guys Foaming Citrus Fabric Clean Carpet & Upholstery Cleaner"
          image=""
          description="Foaming Citrus Fabric Clean delivers rich, penetrating foam that lifts and suspends dirt from deep within carpet and fabric fibers for an easy, residue-free clean that doesn’t just mask odors—removes them at the source."
          link="https://amzn.to/4lTi4dQ"
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
          description="Strong enough for stains but doesn’t leave residue or smell."
          link="#"
        />
      </Section>
    </main>
  );
}
