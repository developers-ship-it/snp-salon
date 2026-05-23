import { Link } from "react-router-dom";
import { nav, site } from "../data/site";
function Fb(p){return(<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>);}
function Ig(p){return(<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 4.38a5.46 5.46 0 1 0 0 10.92 5.46 5.46 0 0 0 0-10.92Zm0 9a3.54 3.54 0 1 1 0-7.08 3.54 3.54 0 0 1 0 7.08Zm6.95-9.22a1.27 1.27 0 1 1-2.54 0 1.27 1.27 0 0 1 2.54 0Z"/></svg>);}
export default function Footer() {
  return (
    <footer className="bg-panel border-t border-line">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={site.logo} alt={site.name} className="h-10 w-auto mb-5" />
          <p className="text-body text-sm leading-relaxed max-w-xs">Your family's trusted salon in {site.city}. Trendy haircuts, beard grooming, colour and rejuvenating treatments for men, women and kids.</p>
          <div className="flex gap-3 mt-5">
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full border border-line text-tan hover:bg-copper hover:text-white hover:border-copper transition"><Fb className="h-4 w-4" /></a>
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full border border-line text-tan hover:bg-copper hover:text-white hover:border-copper transition"><Ig className="h-4 w-4" /></a>
          </div>
        </div>
        <div><h4 className="text-head font-semibold mb-4 tracking-wide">Explore</h4><ul className="space-y-2.5 text-sm text-body">{nav.map((n) => (<li key={n.to}><Link to={n.to} className="hover:text-tan transition">{n.label}</Link></li>))}</ul></div>
        <div><h4 className="text-head font-semibold mb-4 tracking-wide">Ahmedabad</h4><p className="text-sm text-body leading-relaxed">{site.address}</p><a href={`tel:${site.phoneIntl}`} className="block mt-3 text-sm text-tan hover:brightness-110">{site.phoneIntl}</a><a href={`mailto:${site.email}`} className="block mt-1 text-sm text-tan hover:brightness-110 break-all">{site.email}</a><a href={site.mapUrl} target="_blank" rel="noreferrer" className="inline-block mt-3 text-xs uppercase tracking-widest text-head/70 hover:text-tan">View on Map →</a></div>
        <div><h4 className="text-head font-semibold mb-4 tracking-wide">Opening Hours</h4><ul className="space-y-1.5 text-sm text-body">{site.hours.map(([d, t]) => (<li key={d} className="flex justify-between gap-4"><span>{d}</span><span className="text-head/80">{t}</span></li>))}</ul></div>
      </div>
      <div className="border-t border-line"><div className="container-x py-5 text-center text-xs text-body"><p>© {new Date().getFullYear()} Salt 'N' Pepper. All rights reserved.</p></div></div>
    </footer>
  );
}
