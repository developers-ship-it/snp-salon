import { site } from "../data/site";
function Row({ label, children }) {
  return (<div className="flex gap-4 py-4 border-b border-line"><span className="text-tan text-xs uppercase tracking-[0.2em] w-28 shrink-0 pt-0.5">{label}</span><div className="text-head/85 text-sm leading-relaxed">{children}</div></div>);
}
export default function LocationBlock() {
  return (
    <div className="grid gap-1">
      <Row label="Our Salon">{site.address}</Row>
      <Row label="Customer Care"><a href={`tel:${site.phoneIntl}`} className="hover:text-tan">{site.phoneIntl}</a></Row>
      <Row label="Book Appointment"><a href={`mailto:${site.email}`} className="hover:text-tan break-all">{site.email}</a></Row>
      <Row label="Open Hours">Mon – Sun · 10 am – 09 pm <span className="text-body">(last order 9 pm)</span></Row>
      <div className="flex gap-3 pt-4"><a href={site.facebook} target="_blank" rel="noreferrer" className="btn-ghost">Facebook</a><a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost">Instagram</a></div>
    </div>
  );
}
