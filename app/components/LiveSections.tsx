"use client";
import { useState, useEffect } from "react";
import { PRICE_ITEMS } from "../data";

/* ── LIVE BAR ── */
export function LiveBar() {
  const [items, setItems] = useState([
    "Bar do Ceará — Happy Hour on now",
    "124 people viewing Meireles Beach",
    "Sunset Sessions — doors open 7pm",
    "Dunas Night — almost full tonight",
  ]);
  const [vibe, setVibe] = useState("Vibe: Busy");

  useEffect(() => {
    function update() {
      const h = new Date().getHours();
      const v = h >= 22 ? "Peak Night 🔥" : h >= 18 ? "Busy 🟡" : h >= 14 ? "Afternoon ☀️" : "Morning 🌤";
      setVibe(`Vibe: ${v}`);
      setItems(
        h >= 22
          ? ["🎶 Clubs at peak — go now!", "⚡ 3 venues almost full tonight", "🍹 Late night drinks — Bar do Ceará", "🔥 Dunas Night: queue building fast"]
          : h >= 18
          ? ["🍹 Bar do Ceará — Happy Hour active now", "🔥 124 people viewing Meireles Beach", "🎶 Sunset Sessions — doors open 7pm", "⚡ Dunas Night — almost full tonight"]
          : h >= 12
          ? ["🌊 Meireles: sunny, light crowds", "🪁 Cumbuco: 28 km/h — perfect kite", "🦞 Cabana Barraca: kitchen open", "🏖 Barracas: all open for lunch"]
          : ["🌅 Sunrise at Meireles — beautiful today", "🐟 Mucuripe market: opening soon", "🌊 Sea: calm and clear", "☕ Breakfast spots in Aldeota open"]
      );
    }
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="live-bar">
      <div className="live-inner">
        <div className="live-badge"><div className="live-rdot" /> LIVE FORTALEZA</div>
        <div className="live-chips">
          {items.map((item, i) => (
            <div key={i} className="live-chip"><span>{item}</span></div>
          ))}
        </div>
        <div className="live-vibe">
          <span>{vibe}</span>
          <div className="vibe-dots">
            {[0, 1, 2, 3].map((i) => <div key={i} className={`vd${i < 3 ? " on" : ""}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── HERO MONEY BLOCK ── */
export function MoneyBlock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }));
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="sec" style={{ padding: "18px 0" }}>
      <div className="si">
        <div className="money-block">
          <div className="mb-hdr">
            <div className="mb-hdr-title">🔥 Best Places Right Now</div>
            <div className="mb-hdr-time">Updated {time}</div>
          </div>
          <div className="mb-grid">
            {[
              { emoji: "🍺", name: "Bar do Ceará", price: "🍺 R$6 beers", sub: "Happy Hour until 8pm · Iracema" },
              { emoji: "🏖", name: "Barraca Sol & Mar", price: "🍹 R$12 caipirinhas", sub: "Open now · Meireles beach" },
              { emoji: "🎶", name: "Sunset Sessions", price: "🎟 R$45 entry", sub: "Doors 7pm · Iracema · ⚡ Filling up" },
            ].map((item) => (
              <div key={item.name} className="mb-item">
                <div className="mb-emoji">{item.emoji}</div>
                <div className="mb-name">{item.name}</div>
                <div className="mb-price">{item.price}</div>
                <div className="mb-sub">{item.sub}</div>
              </div>
            ))}
            <div className="mb-ad">
              <span className="mb-ad-lbl">Ad</span>
              <div>
                <div className="mb-ad-txt">Gran Marquise Hotel — Meireles Beachfront · 5-star · Free breakfast</div>
                <div className="mb-ad-sub">Special rate from R$520/night — limited rooms tonight</div>
              </div>
              <button className="mb-ad-btn">Book Now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── PERSONALITY MODES ── */
const MODES = [
  { cls: "chill", label: "🧘 Chill & Relax" },
  { cls: "party", label: "🎉 Party Hard" },
  { cls: "cheap", label: "💰 Cheap Mode" },
  { cls: "tourist", label: "🇪🇺 Tourist Mode" },
  { cls: "local", label: "🇧🇷 Local Mode" },
];

export function ModeStrip() {
  const [active, setActive] = useState("chill");
  return (
    <div className="mode-strip">
      <div className="mode-inner">
        <div className="mode-lbl">I am a:</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {MODES.map((m) => (
            <button
              key={m.cls}
              className={`mdbtn ${m.cls}${active === m.cls ? " active" : ""}`}
              onClick={() => setActive(m.cls)}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── QUICK DECISION STRIP ── */
const QD_BTNS = ["🍹 Cheap drinks", "🔥 Party tonight", "🏖 Chill beach", "🦞 Best food", "🌅 Sunset spot", "🪁 Adventure", "💑 Romantic night"];

export function QuickDecision() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="qd-strip">
      <div className="qd-inner">
        <div className="qd-lbl">💡 Not sure? Start here:</div>
        {QD_BTNS.map((b) => (
          <button
            key={b}
            className={`qd-btn${active === b ? " active" : ""}`}
            onClick={() => setActive(b)}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── PRICE SNAPSHOT ── */
export function PriceSnapshot() {
  return (
    <div className="price-snap">
      <div className="ps-inner">
        <div className="ps-title">💰 Fortaleza <span>Prices 2026</span></div>
        <div className="ps-items">
          {PRICE_ITEMS.map((p) => (
            <div key={p.name} className="ps-item">
              <div className="ps-icon">{p.icon}</div>
              <div className="ps-name">{p.name}</div>
              <div className="ps-price">{p.price}</div>
            </div>
          ))}
        </div>
        <button className="ps-cta">Full Budget Guide →</button>
      </div>
    </div>
  );
}
