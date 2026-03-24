import Image from "next/image";

const FOOTER_COLS = [
  {
    title: "Beaches",
    links: [
      { href: "/beaches/meireles", label: "Meireles" },
      { href: "/beaches/iracema", label: "Praia de Iracema" },
      { href: "/beaches/cumbuco", label: "Cumbuco" },
      { href: "/beaches/canoa-quebrada", label: "Canoa Quebrada" },
      { href: "/beaches/jericoacoara", label: "Jericoacoara" },
      { href: "/beaches", label: "All Beaches →" },
    ],
  },
  {
    title: "Botecos & Bars",
    links: [
      { href: "/botecos", label: "Boteco Guide" },
      { href: "/botecos/now", label: "Open Right Now" },
      { href: "/botecos/iracema", label: "Iracema Bars" },
      { href: "/barracas", label: "Top Barracas" },
      { href: "/caipirinha", label: "Best Caipirinhas" },
      { href: "/sunset-bars", label: "Sunset Bars" },
    ],
  },
  {
    title: "Food & Stay",
    links: [
      { href: "/seafood", label: "Seafood" },
      { href: "/barracas", label: "Barracas" },
      { href: "/tapioca", label: "Tapioca Spots" },
      { href: "/hotels/luxury", label: "Luxury Hotels" },
      { href: "/hotels/beach", label: "Beachfront Hotels" },
      { href: "/hotels/budget", label: "Budget Stays" },
    ],
  },
  {
    title: "Info",
    links: [
      { href: "/about", label: "About Us" },
      { href: "#advertise", label: "Advertise" },
      { href: "#press", label: "Press & Media" },
      { href: "/safety", label: "Safety Guide" },
      { href: "/sitemap.xml", label: "Sitemap" },
      { href: "https://policies.google.com/privacy", label: "Google Privacy", external: true },
    ],
  },
];

const TRUST = ["🔒 SSL Secured", "✅ Verified Listings", "🇧🇷 Based in Fortaleza", "⭐ 4.9 Rating", "🌍 EN · PT · NL", "📱 Mobile-First"];
const SOCIALS = [
  { href: "https://instagram.com/fortalezaspotlight", icon: "📸", label: "Instagram" },
  { href: "https://tiktok.com/@fortalezaspotlight", icon: "🎵", label: "TikTok" },
  { href: "https://facebook.com/fortalezaspotlight", icon: "📘", label: "Facebook" },
  { href: "https://youtube.com/@fortalezaspotlight", icon: "▶️", label: "YouTube" },
  { href: "https://pinterest.com/fortalezaspotlight", icon: "📌", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="ftr" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="fi">
        <div className="ftop">
          <div>
            <Image
              src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/name.webp"
              alt="Fortaleza Spotlight"
              width={155} height={30}
              className="flogo"
              itemProp="logo"
              unoptimized
            />
            <p className="ftag-txt">
              The ultimate live guide to Fortaleza — beaches, botecos, barracas, parties,
              food and everything this incredible city has to offer.
            </p>
            <div className="fsocs">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="sb" aria-label={s.label} itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
            <div>
              <div className="nllbl">🏖 Weekly Beach &amp; Boteco Tips</div>
              <div className="nlfrm">
                <input className="nlinp" type="email" placeholder="your@email.com" aria-label="Newsletter email" />
                <button className="nlbtn">Subscribe</button>
              </div>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="fcol">
              <div className="fct">{col.title}</div>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <hr className="fsep" />
        <div className="fmid">
          {TRUST.map((t) => <div key={t} className="ftrust">{t}</div>)}
        </div>

        <div className="fads">
          <div className="fadslbl">Advertisement</div>
          <div className="fadsbox">AdSense Footer Banner — Replace with your ad unit</div>
        </div>

        <div className="fbot">
          <div className="fcopy">
            © 2026{" "}
            <span itemProp="name">Fortaleza Spotlight</span> · All rights reserved ·{" "}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Fortaleza</span>,{" "}
              <span itemProp="addressRegion">Ceará</span>,{" "}
              <span itemProp="addressCountry">Brazil</span>
            </span>
          </div>
          <div className="fleg">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Use" },
              { href: "/cookies", label: "Cookie Policy" },
              { href: "/disclaimer", label: "Disclaimer" },
              { href: "https://support.google.com/adsense/answer/48182", label: "AdSense Policy", external: true },
              { href: "/sitemap.xml", label: "Sitemap" },
            ].map((l) => (
              <a key={l.label} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
