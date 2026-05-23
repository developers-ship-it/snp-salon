import { reviews, ratingSummary } from "../data/site";
import Stars from "./Stars";
export default function ReviewsSection() {
  return (
    <section className="section bg-ink">
      <div className="container-x">
        <div className="text-center mb-12"><p className="eyebrow mb-3">What clients say</p><h2 className="h-display text-3xl sm:text-4xl lg:text-5xl">Review</h2></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-lg border border-line bg-panel p-6 flex flex-col">
              <Stars count={r.stars} className="mb-4" />
              <blockquote className="text-sm text-body leading-relaxed flex-1">{r.text}</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-line"><span className="block text-head font-semibold">{r.name}</span><span className="text-xs uppercase tracking-widest text-body">Customer</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 mx-auto max-w-md text-center rounded-lg border border-copper/40 bg-panel2 p-8">
          <div className="font-display text-5xl text-tan font-semibold">{ratingSummary.score}<span className="text-2xl text-body"> / {ratingSummary.outOf}</span></div>
          <Stars count={5} className="justify-center my-3" />
          <p className="text-sm text-body">Based on {ratingSummary.count} reviews</p>
        </div>
      </div>
    </section>
  );
}
