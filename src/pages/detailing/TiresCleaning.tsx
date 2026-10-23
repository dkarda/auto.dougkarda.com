import ProductCard from '../../components/ProductCard';
import { Section } from '../../components/Section';
import PageHeader from '../../components/PageHeader';

export default function TiresCleaning() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Tires and wheels"
        description="Wheels, tires, and a finish that does not sling all over the paint."
      />

      <Section title="Tools I Use">
        <ProductCard
          name="CARRO WheelX Wheel & Tire Cleaner Spray"
          description="Fast-acting Iron Remover & Cleaner in 1, formulated to break down ferrous particles, road grime, dirt and other stubborn stains in one step. No scrubbing needed."
          link="https://amzn.to/47Yb2P3"
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
