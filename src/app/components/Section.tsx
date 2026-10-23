export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold uppercase tracking-wide text-zinc-100 mb-3">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
