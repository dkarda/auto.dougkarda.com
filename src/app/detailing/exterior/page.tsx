import ProductCard from '../../components/ProductCard';
import { Section } from '../../components/Section';
import PageHeader from '../../components/PageHeader';

export default function ExteriorCleaning() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="Exterior cleaning"
        description="Wash, foam, and the few tools that actually earn a spot in the kit."
      />

      <Section title="Tools I Use">
        <ProductCard
          name='anngrowy 62" Microfiber Car Wash Brush Mop Kit Mitt Sponge with Long Handle'
          description="The car detailing truck washing brush is the perfect helper for washing, drying, waxing, dusting and polishing your vehicles or household."
          link="https://amzn.to/47sbW6l"
        />
        <ProductCard
          name='Amazon Basics Microfiber Car Drying Towel, 36"L x 25"W'
          description="36 x 25-inch extra-large microfiber car drying cloth for conveniently absorbing water from surfaces such as vehicle exteriors, glass and more."
          link="https://amzn.to/4bXipaW"
        />
        <ProductCard
          name="Razor Blade Scraper"
          description="Razor Blade Scraper effectively removes stickers, adhesives, labels and glue from cars, metal and plastic surfaces, tile, mirror, glass shop windows and other hard surfaces."
          link="https://amzn.to/4tg0tiO"
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
