export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-10">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-500 mb-2">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wide text-zinc-50 mb-3">{title}</h1>
      {description ? <p className="text-zinc-400 max-w-2xl">{description}</p> : null}
    </header>
  );
}
