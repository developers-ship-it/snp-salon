import { useState, useEffect, useRef } from "react";

// CSS injected into every framed page at load time.
const FIX_CSS = `
.ekit-template-content-header{position:sticky!important;top:0!important;z-index:990!important;}
.ekit-template-content-footer .elementor-element-83b8b5c{display:flex!important;}
.ekit-template-content-footer .elementor-element-6801b9e{display:none!important;}
.ekit-sidebar-group.ekit_isActive{visibility:visible!important;opacity:1!important;}
@media(max-width:767px){.ekit-template-content-footer .elementor-element-316f12f .elementor-nav-menu{display:flex!important;flex-direction:column!important;align-items:center!important;gap:8px!important;}}
`;

// Applies universal fixes to the framed page's document (same-origin iframe):
//  - sticky header + footer visible on every page/device (CSS)
//  - working off-canvas (hamburger) menu toggle
//  - cleans the duplicated "Develop by by" footer credit
function applyFixes(doc) {
  if (!doc) return;
  if (!doc.getElementById("snp-fixes")) {
    const st = doc.createElement("style");
    st.id = "snp-fixes";
    st.textContent = FIX_CSS;
    (doc.head || doc.documentElement).appendChild(st);
  }
  if (!doc.__snpToggle) {
    doc.__snpToggle = true;
    doc.addEventListener(
      "click",
      function (e) {
        const t = e.target;
        const open = t.closest && t.closest(".ekit_navSidebar-button");
        if (open) {
          e.preventDefault();
          doc.querySelectorAll(".ekit-sidebar-group").forEach((s) => s.classList.add("ekit_isActive"));
          return;
        }
        const close =
          (t.closest && t.closest(".ekit_close-side-widget")) ||
          (t.classList && t.classList.contains("ekit-overlay"));
        if (close) {
          e.preventDefault();
          doc.querySelectorAll(".ekit-sidebar-group").forEach((s) => s.classList.remove("ekit_isActive"));
        }
      },
      true
    );
  }
  // remove the duplicated "by" in the footer credit (handles non-breaking spaces)
  doc.querySelectorAll("p").forEach((p) => {
    if (p.innerHTML.indexOf("Develop by") !== -1) {
      p.innerHTML = p.innerHTML.replace(/Develop by[\s ]+by[\s ]+/, "Develop by ");
    }
  });
}

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
        src={`/pages/${page}.html?v=19`}
        className="site-frame"
        onLoad={() => {
          setLoading(false);
          try { applyFixes(ref.current && ref.current.contentDocument); } catch (err) { /* cross-origin guard */ }
        }}
      />
    </>
  );
}
