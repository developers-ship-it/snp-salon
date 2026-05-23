import { Link } from "react-router-dom";
export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 overflow-hidden bg-panel2">
      <div className="absolute inset-0 bg-gradient-to-b from-panel to-ink" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-copper/15 blur-3xl" />
      <div className="container-x relative text-center">
        <p className="eyebrow mb-4">{subtitle || "Salt 'N' Pepper"}</p>
        <h1 className="h-display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        <nav className="mt-5 text-sm text-body">
          <Link to="/" className="hover:text-tan">Home</Link><span className="mx-2 text-copper">/</span><span className="text-head/80">{crumb || title}</span>
        </nav>
      </div>
    </section>
  );
}
