import { useState } from "react";
export default function BookingForm() {
  const [d, setD] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const u = (e) => setD({ ...d, [e.target.name]: e.target.value });
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
      {sent ? (
        <div className="rounded-md border border-copper/50 bg-copper/10 p-6 text-center">
          <p className="text-head font-medium">Thank you, {d.name || "friend"}!</p>
          <p className="text-body text-sm mt-1">We've received your request and will contact you to confirm your appointment.</p>
        </div>
      ) : (<>
        <div><label className="block text-xs uppercase tracking-widest text-body mb-2">Name</label>
          <input name="name" value={d.name} onChange={u} required placeholder="Your name" className="w-full bg-ink border border-line rounded-md px-4 py-3 text-head placeholder-body/60 focus:border-copper focus:outline-none transition" /></div>
        <div><label className="block text-xs uppercase tracking-widest text-body mb-2">Email</label>
          <input type="email" name="email" value={d.email} onChange={u} required placeholder="you@example.com" className="w-full bg-ink border border-line rounded-md px-4 py-3 text-head placeholder-body/60 focus:border-copper focus:outline-none transition" /></div>
        <div><label className="block text-xs uppercase tracking-widest text-body mb-2">Message</label>
          <textarea name="message" value={d.message} onChange={u} rows={4} placeholder="Which service would you like to book?" className="w-full bg-ink border border-line rounded-md px-4 py-3 text-head placeholder-body/60 focus:border-copper focus:outline-none transition resize-none" /></div>
        <button type="submit" className="btn-copper w-full">Send</button>
      </>)}
    </form>
  );
}
