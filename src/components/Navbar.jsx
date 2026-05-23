import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20); f();
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/95 backdrop-blur border-b border-line py-3" : "bg-transparent py-5"}`}>
      <nav className="container-x flex items-center justify-between gap-4">
        <Link to="/" onClick={() => setOpen(false)}><img src={site.logo} alt={site.name} className="h-10 w-auto" /></Link>
        <ul className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <li key={n.to}>
              <NavLink to={n.to} end={n.to === "/"} className={({ isActive }) => `text-[15px] tracking-wide transition-colors hover:text-tan ${isActive ? "text-tan" : "text-head/90"}`}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
        <a href={`tel:${site.phoneIntl}`} className="hidden lg:inline-flex btn-ghost">Book Now</a>
        <button aria-label="Menu" className="lg:hidden p-2" onClick={() => setOpen((o) => !o)}>
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 bg-tan transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-tan transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-tan transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="container-x py-3 flex flex-col bg-ink/97">
          {nav.map((n) => (
            <li key={n.to}><NavLink to={n.to} end={n.to === "/"} onClick={() => setOpen(false)} className={({ isActive }) => `block py-2.5 border-b border-line/60 ${isActive ? "text-tan" : "text-head/90"}`}>{n.label}</NavLink></li>
          ))}
          <li className="pt-3 pb-1"><a href={`tel:${site.phoneIntl}`} className="btn-ghost w-full">Book Now</a></li>
        </ul>
      </div>
    </header>
  );
}
