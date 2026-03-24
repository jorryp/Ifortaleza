"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="tbl">
          <a href="/magazine">Magazine</a>
          <a href="/forum">Forum</a>
          <a href="#press">Press &amp; Media</a>
          <a href="#advertise">Advertise</a>
          <span className="hot-badge">🍹 Botecos Open Now!</span>
        </div>
        <div className="tbr">
          <button className="lbtn active">EN</button>
          <button className="lbtn">PT</button>
          <button className="lbtn">NL</button>
        </div>
      </div>

      {/* HEADER */}
      <header className={`hdr${scrolled ? " scrolled" : ""}`}>
        <div className="hdri">
          <Link href="/" className="logo" aria-label="Fortaleza Spotlight">
            <Image
              src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp"
              alt="Fortaleza beach Ceará Brazil"
              width={36} height={36}
              className="logo-bg"
              unoptimized
            />
            <Image
              src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/name.webp"
              alt="Fortaleza Spotlight"
              width={155} height={21}
              className="logo-nm"
              unoptimized
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav-desktop" aria-label="Main navigation">
            {NAV_ITEMS.map((item, i) => (
              <div key={i} className="nitem" tabIndex={0}>
                <span>{item.label.en}</span>
                {item.type !== "none" && <span className="nc">▾</span>}

                {item.type === "wide" && (
                  <div className="mm wide">
                    <div className="mmfeat">
                      <div className="mmfbg" style={{ backgroundImage: `url(${item.feat!.img})` }} />
                      <div className="mmfgrad" />
                      <div className="mmfcnt">
                        <div className="mmfl">{item.feat!.eyebrow}</div>
                        <div className="mmft">{item.feat!.title}</div>
                        <div className="mmfs">{item.feat!.sub}</div>
                      </div>
                    </div>
                    {item.cols!.map((col, ci) => (
                      <div key={ci} className="mm-col">
                        <div className="mmct">{col.title}</div>
                        {col.links.map((l, li) => (
                          <Link key={li} href={l.href} className="mmlink">
                            <span className="mmli">{l.icon}</span>
                            <span>{l.label}{l.desc && <span className="mmld">{l.desc}</span>}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.seo && <p className="mmseo">{item.seo}</p>}
                  </div>
                )}

                {item.type === "mid" && (
                  <div className="mm mid">
                    {item.cols!.map((col, ci) => (
                      <div key={ci} className="mm-col">
                        <div className="mmct">{col.title}</div>
                        {col.links.map((l, li) => (
                          <Link key={li} href={l.href} className="mmlink">
                            <span className="mmli">{l.icon}</span>
                            <span>{l.label}{l.desc && <span className="mmld">{l.desc}</span>}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.seo && <p className="mmseo">{item.seo}</p>}
                  </div>
                )}

                {item.type === "slim" && (
                  <div className="mm slim">
                    <div className="mm-col">
                      {item.links!.map((l, li) => (
                        <Link key={li} href={l.href} className="mmlink">
                          <span className="mmli">{l.icon}</span>
                          <span>{l.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ha">
            <button className="bsrch" aria-label="Search">🔍</button>
            <a href="#advertise" className="badv">💼 Advertise</a>
            <Link href="#plan-my-night" className="bpri">Plan My Night →</Link>
            <button
              className="ham"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div className={`mnav${mobileOpen ? " open" : ""}`} role="dialog" aria-label="Mobile navigation">
        <div className="mnh">
          <Image
            src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/name.webp"
            alt="Fortaleza Spotlight"
            width={155} height={21}
            style={{ filter: "brightness(0) invert(1)", opacity: 0.88 }}
            unoptimized
          />
          <button className="mnc" onClick={() => setMobileOpen(false)}>✕</button>
        </div>
        <Link href="/beaches" className="mnl" onClick={() => setMobileOpen(false)}>🌊 Beaches</Link>
        <Link href="/botecos" className="mnl" onClick={() => setMobileOpen(false)}>🍹 Botecos &amp; Happy Hour</Link>
        <Link href="/parties" className="mnl" onClick={() => setMobileOpen(false)}>🎶 Parties &amp; Events</Link>
        <Link href="/barracas" className="mnl" onClick={() => setMobileOpen(false)}>🏖 Barracas</Link>
        <Link href="/restaurants" className="mnl" onClick={() => setMobileOpen(false)}>🦞 Food &amp; Restaurants</Link>
        <Link href="/activities" className="mnl" onClick={() => setMobileOpen(false)}>🪁 Activities</Link>
        <Link href="/magazine" className="mnl" onClick={() => setMobileOpen(false)}>📰 Magazine</Link>
        <Link href="#advertise" className="mnl" onClick={() => setMobileOpen(false)}>💼 Advertise</Link>
        <div className="mnlangs">
          <button className="lbtn active">EN</button>
          <button className="lbtn">PT</button>
          <button className="lbtn">NL</button>
        </div>
      </div>
    </>
  );
}
