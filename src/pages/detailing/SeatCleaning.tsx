import ProductCard from '../../components/ProductCard';
import { Section } from '../../components/Section';
import PageHeader from '../../components/PageHeader';

export default function SeatCleaning() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Seat cleaning"
        description="Cloth and leather routine — keep it simple and do not over-soak the foam."
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
          name="Chemical Guys Leather Cleaner and Conditioner Kit"
          description="Chemical Guys interior cleaner for leather that lifts dirt and grime while the Conditioner nourishes and restores leather suppleness, leaving interior surfaces soft, smooth, refreshed."
          link="https://amzn.to/4sARIQp"
        />
      </Section>
    </main>
  );
}
