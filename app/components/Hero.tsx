"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ptclsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ptclsRef.current;
    if (!el) return;
    const emojis = ["🌊", "🍹", "🌴", "☀️", "🪁", "🦞", "🍺", "🌺", "🐚", "🏄"];
    for (let i = 0; i < 16; i++) {
      const p = document.createElement("div");
      const s = Math.random() * 16 + 9;
      p.className = "pt";
      p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;font-size:${s}px;background:transparent;animation-duration:${9 + Math.random() * 15}s;animation-delay:${Math.random() * 14}s;display:flex;align-items:center;justify-content:center;`;
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.appendChild(p);
    }
  }, []);

  return (
    <section className="hero" aria-label="Welcome to Fortaleza Spotlight">
      <div className="hbg" role="img" aria-label="Fortaleza beach Ceará Brazil — turquoise ocean, golden sand, coconut palms" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=90')"}} />
      <div className="hgrd" />
      <div className="hflare1" />
      <div className="hflare2" />
      <div className="hptcls" ref={ptclsRef} />

      <div className="hcnt">
        <div>
          <div className="hbadge">
            <div className="ldot" />
            Fortaleza, Brazil — Live Right Now
          </div>
          <h1 className="hh1">
            Beaches, Botecos<br />
            &amp; <em>Barracas</em> —<br />
            Fortaleza Right Now
          </h1>
          <p className="hsub">
            Fortaleza&apos;s #1 live guide — updated daily. Find what&apos;s open, what&apos;s hot
            and where everyone is going right now in Ceará&apos;s most vibrant city.
          </p>

          {/* SEARCH */}
          <div className="search-shell" role="search">
            <div className="srch-top">
              <span className="s-icon">🔍</span>
              <input
                className="sinp"
                type="search"
                placeholder="Search beaches, botecos, barracas, parties, food…"
                aria-label="Search Fortaleza"
              />
              <button className="sbtn">Search</button>
            </div>
            <div className="srch-pills" role="group">
              {["🔥 Trending Now", "🌊 Beaches", "🍹 Boteco & HH", "🎶 Tonight", "🏖 Barracas", "🦞 Seafood", "🪁 Kitesurf", "🚗 Buggy", "🌅 Sunset", "🎟 Tickets"].map((p, i) => (
                <button key={i} className={`spill${i === 0 ? " fire" : i === 1 ? " active" : ""}`}>{p}</button>
              ))}
            </div>
          </div>

          <div className="hstats">
            {[["34km", "Of Coastline"], ["8", "Great Beaches"], ["200+", "Restaurants"], ["340 days", "Of Sun/Year"]].map(([n, l]) => (
              <div key={l} className="hst"><strong>{n}</strong>{l}</div>
            ))}
          </div>
        </div>

        {/* WEATHER */}
        <div className="hwx">
          <div className="hwcnt">
            <div className="hwt">
              <div className="hwe">☀️</div>
              <div>
                <div className="hwtemp">31°C</div>
                <div className="hwl">Fortaleza Today</div>
                <div className="hwd">Sunny · Perfect beach day</div>
              </div>
            </div>
            <div className="hwg">
              {[["28 km/h", "Wind"], ["27°C", "Sea Temp"], ["UV 9", "UV Index"], ["82%", "Humidity"]].map(([v, l]) => (
                <div key={l} className="hwi"><strong>{v}</strong><span>{l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
