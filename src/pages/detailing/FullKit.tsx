import ProductCard from '../../components/ProductCard';
import PageHeader from '../../components/PageHeader';

export default function FullKit() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Detailing"
        title="My full detailing kit"
        description="Everything I actually use, all in one place."
      />
      <div className="space-y-4">
        <ProductCard
          name="ForPro Disposable Nitrile Gloves"
          image=""
          description="Chemical & puncture-resistant nitrile gloves provide a higher level of protection against liquids, gases, & sharp objects. The textured finish provides slip resistance in wet or dry conditions. Each glove features a beaded cuff and is 4 mil. thick."
          link="https://amzn.to/4bCjciA"
        />
        <ProductCard
          name="Tool Daily Foam Cannon with 1/4 Inch Quick Connector"
          image=""
          description='Adjustable Snow Foam Lance with 1/4" quick connection fitting. Not for garden hose, water hose, or your faucet directly. Container Capacity: 1 Liter / 0.22 Gallon. Working Pressure: 1000 PSI to 3000 PSI.'
          link="https://amzn.to/4sE7Yjw"
        />
        <ProductCard
          name="Interior Cleaner"
          image=""
          description="Safe for most surfaces."
          link="#"
        />
      </div>
    </main>
  );
}
