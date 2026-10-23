import ProductCard from '../../components/ProductCard';
import PageHeader from '../../components/PageHeader';

const features = [
  {
    feature: 'Hold down unlock on FOB for 5 seconds to open all windows and sunroof',
  },
];

export default function MyLexus() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PageHeader
        eyebrow="Resources"
        title="My Lexus"
        description="Notes, quirks, and products for the car I actually drive."
      />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Quirks worth remembering</h2>
        <ul className="list-disc pl-5 space-y-1 text-zinc-400">
          {features.map((item) => (
            <li key={item.feature}>{item.feature}</li>
          ))}
        </ul>
      </section>

      <div className="space-y-4">
        <ProductCard
          name="ForPro Disposable Nitrile Gloves"
          image=""
          description="Chemical & puncture-resistant nitrile gloves provide a higher level of protection against liquids, gases, & sharp objects. The textured finish provides slip resistance in wet or dry conditions. Each glove features a beaded cuff and is 4 mil. thick."
          link="https://amzn.to/4bCjciA"
        />
      </div>
    </main>
  );
}
