import { team } from "../data/site";
export default function TeamGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m) => (
        <article key={m.name} className="group relative overflow-hidden rounded-lg border border-line bg-panel">
          <div className="aspect-[3/4] overflow-hidden">
            <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-5 pt-12">
            <h3 className="text-head font-display text-xl">{m.name}</h3>
            <p className="text-tan text-xs uppercase tracking-[0.2em] mt-1">{m.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
