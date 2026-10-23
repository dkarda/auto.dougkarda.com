type Props = {
  name: string;
  image?: string;
  description: string;
  link: string;
};

export default function ProductCard({ name, image, description, link }: Props) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-5 hover:border-amber-500/40 transition">
      <h3 className="font-semibold text-lg mb-1 text-zinc-100">{name}</h3>
      {image ? (
        <img src={image} alt={name} width={400} height={300} className="rounded-md mb-3" />
      ) : (
        <div className="w-full h-[200px] rounded-md mb-3 bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 text-sm">
          No image yet
        </div>
      )}
      <p className="text-sm text-zinc-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="nofollow sponsored"
        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition"
      >
        Check Price on Amazon
      </a>
    </div>
  );
}
