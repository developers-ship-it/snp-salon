import { useState, useEffect, useRef } from "react";
// Renders the exact original page (its real HTML/CSS/JS) inside a frame so the
// layout is pixel-identical to snpsalon.in. Internal nav links use target="_top",
// so they update the React route + URL.
export default function SiteFrame({ page }) {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  useEffect(() => { setLoading(true); }, [page]);
  return (
    <>
      {loading && <div className="frame-loader">Loading…</div>}
      <iframe
        ref={ref}
        key={page}
        title="Salt 'N' Pepper"
        src={`/pages/${page}.html?v=17`}
        className="site-frame"
        onLoad={() => setLoading(false)}
      />
    </>
  )
}