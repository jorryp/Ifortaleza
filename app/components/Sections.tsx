import { HOT_CARDS, BOTECOS, BARRACAS, EVENTS, TOP10_BARS, AWARDS, WEBCAMS, SPONSORS, HOTELS, EDITORIAL, MAGAZINE_ARTICLES } from "../data";

/* ── QUICK CATS ── */
const CATS = [
  { href: "/beaches", icon: "🌊", label: "Beaches" },
  { href: "/botecos", icon: "🍹", label: "Botecos" },
  { href: "/barracas", icon: "🏖", label: "Barracas" },
  { href: "/parties", icon: "🎶", label: "Parties" },
  { href: "/hotels", icon: "🏨", label: "Hotels" },
  { href: "/restaurants", icon: "🦞", label: "Food" },
  { href: "/kitesurf", icon: "🪁", label: "Kitesurf" },
  { href: "/buggy", icon: "🚗", label: "Buggy" },
  { href: "/webcams", icon: "📹", label: "Live Cams" },
];

export function QuickCats() {
  return (
    <div className="qc">
      <div className="qci" role="navigation" aria-label="Quick categories">
        {CATS.map((c) => (
          <a key={c.href} href={c.href} className="qcat">
            <span className="qi">{c.icon}</span>
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── AD RIBBON ── */
export function AdRibbon() {
  return (
    <section className="sec" style={{ padding: "16px 0" }}>
      <div className="si">
        <div className="ad-ribbon">
          <div className="adrib-tag">Sponsored</div>
          <div className="adrib-inner">
            <div className="adrib-ey">⭐ Featured Partner of the Week</div>
            <div className="adrib-ttl">Gran Marquise Hotel — Meireles · Best Ocean View in Fortaleza</div>
            <div className="adrib-sub">5-star · Infinity pool · Award-winning seafood restaurant · 50m from the beach</div>
          </div>
          <button className="adrib-cta">View Exclusive Offer →</button>
        </div>
      </div>
    </section>
  );
}

/* ── WHAT'S HOT ── */
export function WhatsHot() {
  return (
    <section className="sec" style={{ paddingBottom: 0 }}>
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew coral">🔥 What&apos;s Hot Right Now</div>
            <h2 className="stl">Fortaleza&apos;s Most Talked About Today</h2>
          </div>
          <a href="/hot" className="sall">See all →</a>
        </div>
        <div className="hot-scroll">
          {HOT_CARDS.map((card, i) => (
            <div key={i} className="hcard">
              <div className="hcard-img" style={{ backgroundImage: `url(${card.img})` }}>
                <div className="hcard-grd" />
                <div className="hcard-rank">{card.rank}</div>
                <div className="hcard-badge">{card.badge}</div>
                {card.fomo && (
                  <div className={`fomo-chip${card.fomo.green ? " green" : ""}`}>{card.fomo.text}</div>
                )}
              </div>
              <div className="hcard-body">
                <div className="hcard-cat" style={{ color: card.catColor }}>{card.cat}</div>
                <div className="hcard-name">{card.name}</div>
                <div className="hcard-meta">
                  {card.chips.map((c) => <span key={c} className="hcard-chip">{c}</span>)}
                </div>
              </div>
            </div>
          ))}
          {/* Native ad card */}
          <div className="hcard" style={{ background: "linear-gradient(160deg,var(--night),var(--night2))" }}>
            <div className="hcard-img" style={{ background: "linear-gradient(135deg,var(--night2),var(--night3))", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 40 }}>🏨</span>
              <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: ".09em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>Sponsored</span>
            </div>
            <div className="hcard-body" style={{ position: "relative", background: "transparent", padding: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: "var(--sun)", textTransform: "uppercase", letterSpacing: ".09em", marginBottom: 4 }}>Hotel Pick</div>
              <div style={{ fontFamily: "var(--ff-d)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>Iate Plaza Hotel<br />Meireles Beachfront</div>
              <button style={{ background: "var(--sun)", color: "var(--night)", border: "none", padding: "7px 14px", borderRadius: 11, fontSize: 12, fontWeight: 900, cursor: "pointer", width: "100%" }}>From R$380/night →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EDITORIAL GRID ── */
export function EditorialGrid() {
  return (
    <section className="sec">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew teal">Editor&apos;s Picks</div>
            <h2 className="stl">Stories from Fortaleza</h2>
          </div>
          <a href="/magazine" className="sall">All stories →</a>
        </div>
        <div className="fg">
          {EDITORIAL.map((a, i) => (
            <article key={i} className={`fc ${a.cls}`}>
              <div className="fci" style={{ backgroundImage: `url(${a.img})` }} role="img" aria-label={a.alt} />
              <div className="fco" />
              <div className="fcb">
                <span className={`ftag ${a.tag.cls}`}>{a.tag.label}</span>
                <h3 className="fct">{a.title}</h3>
                {a.meta && <div className="fcm">{a.meta.map((m) => <span key={m}>{m}</span>)}</div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SPONSORS ── */
export function Sponsors() {
  return (
    <section className="sec sbg" style={{ paddingTop: 0 }}>
      <div className="si">
        <div className="sp-lbl">⭐ Featured &amp; Sponsored Partners</div>
        <div className="spg">
          {SPONSORS.map((s, i) => (
            <article key={i} className="spc">
              <div className="spbdg">Featured</div>
              <div className="spimg" style={{ backgroundImage: `url(${s.img})` }} role="img" aria-label={s.alt} />
              <div className="spbody">
                <div className="spcat">{s.cat}</div>
                <div className="spname">{s.name}</div>
                <div className="spdesc">{s.desc}</div>
                <div className="spft">
                  <span className="sprat">{s.rating}</span>
                  <a href={s.href} className="spcta">{s.cta}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── BOTECOS ── */
export function BotecosSection() {
  return (
    <section className="sec hh-sec" id="botecos">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew sun">🍹 Botecos &amp; Happy Hour Guide — Fortaleza</div>
            <h2 className="stl">Ice-Cold Caipirinhas &amp; Botecos Right Now</h2>
          </div>
          <a href="/botecos" className="sall">Full guide →</a>
        </div>
        <div className="hh-top-bar">
          <div className="hh-clock">🕐 Happy Hour Active!</div>
          <span className="hh-sub">40+ botecos &amp; bars with live happy hour deals right now</span>
        </div>
        <div className="hh-filters" role="group">
          <div className="hff-srch"><span>🔍</span><input type="search" placeholder="Search boteco…" aria-label="Search boteco" /></div>
          <button className="hff active">🟢 Open Now</button>
          <button className="hff">🌅 Sunset (5–8pm)</button>
          <button className="hff">🌙 Late Night</button>
          <select className="hff-sel" aria-label="Neighbourhood">
            <option>All Neighbourhoods</option>
            <option>Praia de Iracema</option>
            <option>Meireles</option>
            <option>Beira Mar</option>
            <option>Aldeota</option>
            <option>Benfica</option>
          </select>
          <select className="hff-sel" aria-label="Music">
            <option>All Music</option>
            <option>🪗 Forró Live</option>
            <option>🎸 Live Band</option>
            <option>🎛 DJ Set</option>
            <option>🎵 MPB / Samba</option>
          </select>
          <select className="hff-sel" aria-label="Food">
            <option>All Food</option>
            <option>🦞 Seafood</option>
            <option>🍢 Petiscos</option>
            <option>🌮 Carne de Sol</option>
            <option>🫓 Tapioca</option>
          </select>
        </div>
        <div className="hh-grid">
          {BOTECOS.map((b, i) => (
            <article key={i} className={`bcard${b.open ? " hh-on" : ""}`}>
              <div className="bcard-img" style={{ backgroundImage: `url(${b.img})` }} role="img" aria-label={b.alt}>
                <div className={`bopen${!b.open ? " bclose" : ""}`}>{b.open ? "🟢 Open Now" : "Opens 6pm"}</div>
                <div className="bhh-time">{b.hhTime}</div>
              </div>
              <div className="bcard-body">
                <div className="bcard-name">{b.name}</div>
                <div className="bcard-loc">{b.loc}</div>
                <div className="btags">
                  {b.tags.map((t) => <span key={t.label} className={`btag ${t.cls}`}>{t.label}</span>)}
                </div>
                <div className="bcard-specials">
                  <div className="bspec-title">🌟 Happy Hour Specials</div>
                  {b.specials.map((s) => <div key={s} className="bspec-item">{s}</div>)}
                </div>
                <div className="bcard-footer">
                  <span className="bcard-rat">{b.rating}</span>
                  <button className="bcard-cta">View Deals →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── BARRACAS ── */
export function BarracasSection() {
  return (
    <section className="sec barraca-sec" id="barracas">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew green">🏖 Barracas de Praia — Authentic Beach Shacks</div>
            <h2 className="stl">Cold Beer, Fresh Fish &amp; Sandy Feet</h2>
          </div>
          <a href="/barracas" className="sall">All barracas →</a>
        </div>
        <div className="barraca-grid">
          {BARRACAS.map((b, i) => (
            <div key={i} className={`brc ${b.cls}`}>
              <div className="bri" style={{ backgroundImage: `url(${b.img})` }} role="img" aria-label={b.alt} />
              <div className="bro" />
              <div className="brb">
                <div className="br-badge">{b.badge}</div>
                <div className="br-name">{b.name}</div>
                {b.desc && <div className="br-desc">{b.desc}</div>}
                <div className="br-chips">{b.chips.map((c) => <span key={c} className="br-chip">{c}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── EVENTS ── */
const EVENT_FILTERS = ["All Events", "🪗 Forró", "🎛 Electronic", "🌴 Beach Party", "🎸 Live Music", "🎪 Festival"];

export function EventsSection() {
  return (
    <section className="sec sbg" id="events">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew pink">Events &amp; Nightlife</div>
            <h2 className="stl">What&apos;s On in Fortaleza</h2>
          </div>
          <a href="/events" className="sall">Calendar →</a>
        </div>
        <div className="evf">
          {EVENT_FILTERS.map((f, i) => (
            <button key={f} className={`efb${i === 0 ? " active" : ""}`}>{f}</button>
          ))}
        </div>
        <div className="evg">
          {EVENTS.map((ev, i) => ev.feat ? (
            <article key={i} className="ecard ev-feat">
              <div className="efc">
                <div className="efbdg">🔥 Event of the Month</div>
                <h2 className="eft">{ev.title}</h2>
                <p className="efd">{ev.desc}</p>
                <div className="efmeta">{ev.meta!.map((m) => <span key={m} className="efmi">{m}</span>)}</div>
                <div className="efacts">
                  <button className="bpri">Buy Tickets →</button>
                  <button className="bolw">More Info</button>
                </div>
              </div>
              <div className="efib">
                <div className="efibg" style={{ backgroundImage: `url(${ev.img})` }} />
                <div className="efp">{ev.price}</div>
              </div>
            </article>
          ) : (
            <article key={i} className="ecard">
              <div className="evimg">
                <div className="evii" style={{ backgroundImage: `url(${ev.img})` }} />
                <div className="evdt"><strong>{ev.day}</strong>{ev.month}</div>
                {ev.hot && <div className="evhot">🔥 Hot</div>}
              </div>
              <div className="evbody">
                <div className="evgn">{ev.genre}</div>
                <h3 className="evname">{ev.name}</h3>
                <div className="evvenue">{ev.venue}</div>
                <div className="evfoot">
                  <span className={`evprice${ev.price === "Free" ? " evfree" : ""}`}>{ev.price}</span>
                  <button className="evbtn">{ev.price === "Free" ? "Info" : "Tickets"}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TOP 10 ── */
export function Top10Section() {
  return (
    <section className="sec sbg" id="top10">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew pink">🏆 Top 10</div>
            <h2 className="stl">Top 10 Bars &amp; Botecos in Fortaleza 2026</h2>
          </div>
          <a href="/top-bars" className="sall">Full ranking →</a>
        </div>
        <div className="top10-wrap">
          {TOP10_BARS.map((item, i) => (
            <>
              <div key={i} className="t10">
                <div className={`t10-n${item.ncls ? ` ${item.ncls}` : ""}`}>{item.n}</div>
                <div className="t10-ico">{item.ico}</div>
                <div className="t10-body">
                  <div className="t10-nm">{item.name}</div>
                  <div className="t10-mt">{item.meta}</div>
                </div>
                <div className="t10-rt">{item.rating}</div>
              </div>
              {item.ad && (
                <div key={`ad-${i}`} className="t10-ad">
                  <span className="t10-ad-lbl">Sponsored</span>
                  <div className="t10-ad-body">
                    <div className="t10-ad-nm">{item.ad.name}</div>
                    <div className="t10-ad-mt">{item.ad.sub}</div>
                  </div>
                  <button className="t10-ad-btn">{item.ad.cta}</button>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── AWARDS ── */
export function AwardsSection() {
  return (
    <section className="sec award-sec">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew sun">🏆 Monthly Awards</div>
            <h2 className="stl w">Fortaleza Spotlight Awards — March 2026</h2>
          </div>
          <a href="/awards" className="sall" style={{ color: "var(--sun)" }}>All awards →</a>
        </div>
        <div className="award-grid">
          {AWARDS.map((a) => (
            <div key={a.label} className="aw">
              <div className="aw-icon">{a.icon}</div>
              <div className="aw-lbl">{a.label}</div>
              <div className="aw-name">{a.name}</div>
              <div className="aw-sub">{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WEBCAMS ── */
export function WebcamsSection() {
  return (
    <section className="sec sbg" id="webcams">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew teal">📹 Live Beach Cameras</div>
            <h2 className="stl">See Fortaleza Right Now — Live</h2>
          </div>
          <a href="/webcams" className="sall">All cams →</a>
        </div>
        <div className="wcam-grid">
          {WEBCAMS.map((w) => (
            <div key={w.name} className="wcam">
              <div className="wcam-img" style={{ backgroundImage: `url(${w.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="wcam-live">🔴 LIVE</div>
              </div>
              <div className="wcam-body">
                <div className="wcam-nm">{w.name}</div>
                <div className="wcam-mt">{w.meta}</div>
                <a href="https://www.youtube.com/@fortalezaspotlight" target="_blank" rel="noopener noreferrer" className="wcam-btn">▶ Watch Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SAFETY STRIP ── */
const SAFETY = [
  { icon: "🚗", text: <><strong>Getting Around:</strong> Uber &amp; 99 are safe &amp; cheap (R$2–4/km).</> },
  { icon: "🔒", text: <><strong>Safe Zones:</strong> Meireles, Aldeota, Iracema &amp; Varjota are tourist-friendly.</> },
  { icon: "💊", text: <><strong>Emergency:</strong> SAMU 192 · Police 190</> },
  { icon: "💳", text: <><strong>Payment:</strong> PIX, Mastercard &amp; Visa widely accepted.</> },
];

export function SafetyStrip() {
  return (
    <div className="safety-strip">
      <div className="safety-inner">
        {SAFETY.map((s, i) => (
          <>
            <div key={i} className="saf-item"><span style={{ fontSize: 17 }}>{s.icon}</span><span>{s.text}</span></div>
            {i < SAFETY.length - 1 && <div key={`d${i}`} className="saf-div" />}
          </>
        ))}
      </div>
    </div>
  );
}

/* ── HOTELS COMPACT ── */
export function HotelsSection() {
  return (
    <section className="sec sbg" id="hotels" style={{ padding: "clamp(28px,4vh,44px) 0" }}>
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew teal">🏨 Accommodation</div>
            <h2 className="stl">Top Hotels in Fortaleza</h2>
          </div>
          <a href="/hotels" className="sall">All 150+ hotels →</a>
        </div>
        <div className="hotel-grid">
          {HOTELS.map((h) => (
            <a key={h.name} href={h.href} className="lcard" itemScope itemType="https://schema.org/Hotel">
              <div className="lci">
                <div className="lcii" style={{ backgroundImage: `url(${h.img})` }} role="img" aria-label={h.alt} />
                <div className="lcbdg">{h.badge}</div>
                <button className="lcfav">🤍</button>
              </div>
              <div className="lcbody">
                <div className="lcm">
                  <span className="lct" itemProp="name">{h.name}</span>
                  <span style={{ width: 3, height: 3, background: "var(--muted)", borderRadius: "50%", display: "block" }} />
                  <span style={{ fontSize: 11.5, color: "var(--muted)" }}>{h.loc}</span>
                </div>
                <div className="lcft">
                  <div className="lcrat">{h.rating}</div>
                  <div className="lcprice">{h.price}<span className="lcpu">/nt</span></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY FORTALEZA ── */
export function WhyFortaleza() {
  const facts = [
    { icon: "🪁", title: "Kitesurf Capital", text: "Constant 20–35 km/h trade winds — Cumbuco is among the world's top kite spots." },
    { icon: "🍹", title: "Boteco Culture", text: "Ice-cold caipirinhas, cold beer, friendly botecos — happy hour lasts all night." },
    { icon: "🦞", title: "Seafood Paradise", text: "Lobster, shrimp and fish straight from the Atlantic — unique in Brazil." },
    { icon: "🪗", title: "Living Culture", text: "Birthplace of forró. Festivals, live music and parties every week of the year." },
  ];
  return (
    <section className="sec nbg">
      <div className="si">
        <div className="wg">
          <div>
            <div className="wey">Why Fortaleza?</div>
            <h2 className="wttl">Sun 300 Days. Wind Always Blowing. Joy Always There.</h2>
            <p className="wbdy">Fortaleza is Brazil&apos;s most energetic travel destination. A city of beaches, botecos, barracas, forró music and ice-cold caipirinhas. Trade winds blow year-round making it the kitesurf capital of the world — and the sunsets from Iracema will stop your heart.</p>
            <div className="wctas">
              <button className="bpri">Plan My Holiday</button>
              <button className="bolw">Read Travel Guides</button>
            </div>
          </div>
          <div className="wcs">
            {facts.map((f) => (
              <div key={f.title} className="wcard">
                <div className="wci">{f.icon}</div>
                <div className="wctt">{f.title}</div>
                <div className="wct">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── MAGAZINE ── */
export function MagazineSection() {
  return (
    <section className="sec sbg">
      <div className="si">
        <div className="sh">
          <div>
            <div className="ew coral">Magazine</div>
            <h2 className="stl">Latest from Fortaleza Spotlight</h2>
          </div>
          <a href="/magazine" className="sall">Read all →</a>
        </div>
        <div className="mgg">
          {MAGAZINE_ARTICLES.map((a, i) => (
            <article key={i} className="mcard" itemScope itemType="https://schema.org/Article">
              <div
                className={`mimg ${a.big ? "milg" : "mism"}`}
                style={{ backgroundImage: `url(${a.img})` }}
                role="img" aria-label={a.alt}
              />
              <div className="mbody">
                <div className="mcat">{a.cat}</div>
                <h3 className="mttl" itemProp="name">{a.title}</h3>
                <p className="mexc">{a.excerpt}</p>
                <div className="mbyl">
                  <div className="mav">{a.author.init}</div>
                  <span itemProp="author">{a.author.name}</span> · {a.time}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SCROLL TRAP ── */
export function ScrollTrap() {
  const items = [
    { icon: "🌊", name: "All Beaches", cnt: "30+ guides" },
    { icon: "🍹", name: "Boteco Guide", cnt: "200+ botecos" },
    { icon: "🏖", name: "Barracas", cnt: "50+ shacks" },
    { icon: "🎶", name: "Events", cnt: "This week" },
  ];
  return (
    <section className="scroll-trap">
      <div className="st-inner">
        <h2 className="st-title">👇 Keep Exploring Fortaleza</h2>
        <p className="st-sub">Hundreds more guides, lists and insider tips waiting for you</p>
        <div className="st-grid">
          {items.map((item) => (
            <div key={item.name} className="st-item">
              <div className="st-icon">{item.icon}</div>
              <div className="st-nm">{item.name}</div>
              <div className="st-cnt">{item.cnt}</div>
            </div>
          ))}
        </div>
        <div className="adslot" style={{ borderRadius: 12, overflow: "hidden", maxWidth: 728, margin: "0 auto" }}>
          <div className="adslbl">Advertisement</div>
          <div className="adsbox">AdSense In-Content — Replace with your ad unit</div>
        </div>
      </div>
    </section>
  );
}

/* ── ADVERTISE ── */
export function AdvertiseSection() {
  return (
    <section className="advsec" id="advertise">
      <div className="advi">
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: ".13em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 8 }}>Grow Your Business in Fortaleza</div>
          <h2 className="advttl">Reach 50,000+ Monthly Visitors Planning Their Fortaleza Trip</h2>
          <p className="advsub">Fortaleza Spotlight is Ceará&apos;s #1 travel guide. Advertise your hotel, restaurant, bar, boteco or activity and get in front of high-intent travellers actively planning their Fortaleza holiday.</p>
          <div className="advfeats">
            {["Featured listings", "Homepage banners", "Category sponsorships", "Newsletter inclusion", "Native ad cards"].map((f) => (
              <span key={f} className="advft">{f}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:advertise@fortaleza-spotlight.com" className="bpri" style={{ display: "inline-flex" }}>💼 Start Advertising Today</a>
            <button className="bolw" style={{ background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,.28)", padding: "9px 17px", borderRadius: 22, cursor: "pointer", fontFamily: "var(--ff-b)", fontSize: 13, fontWeight: 700 }}>Download Media Kit</button>
          </div>
        </div>
        <div className="advbox">
          <div className="advbxt">📢 Contact Our Ad Team</div>
          <div className="advbxs">Fast response · Tailored packages · No minimum</div>
          <a href="mailto:advertise@fortaleza-spotlight.com" className="adveml">advertise@fortaleza-spotlight.com</a>
          <div className="advph">📱 WhatsApp: +55 85 9999-0000</div>
        </div>
      </div>
    </section>
  );
}

/* ── PRESS ── */
export function PressSection() {
  const items = [
    { icon: "📄", title: "Press Kit", desc: "Logos, brand guidelines and key statistics for media use." },
    { icon: "📊", title: "Media Kit", desc: "Audience data, traffic stats and advertising rates." },
    { icon: "🎙", title: "Interviews", desc: "Expert commentary on Fortaleza travel and Ceará tourism." },
    { icon: "📸", title: "Photo Library", desc: "Licensed photography of Fortaleza beaches and culture." },
  ];
  return (
    <section className="pressec" id="press">
      <div className="presi">
        <div>
          <div className="ew teal">Press &amp; Media</div>
          <h2 className="presttl">Press Information &amp; Resources</h2>
          <p className="presbdy">Fortaleza Spotlight is the leading English-language travel guide for Fortaleza and Ceará, Brazil. We welcome media collaborations, interview requests and editorial partnerships.</p>
          <a href="mailto:press@fortaleza-spotlight.com" className="bpri" style={{ display: "inline-flex" }}>📧 press@fortaleza-spotlight.com</a>
        </div>
        <div className="presitms">
          {items.map((item) => (
            <div key={item.title} className="pi">
              <div className="pii">{item.icon}</div>
              <div className="pit">{item.title}</div>
              <div className="pid">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ADSENSE ── */
export function AdSenseSlot() {
  return (
    <div className="adslot">
      <div className="adslbl">Advertisement</div>
      <div className="adsbox">
        {/* Replace with: <ins className="adsbygoogle" data-ad-client="ca-pub-XXXXX" data-ad-slot="XXXXX" data-ad-format="auto" /> */}
        Google AdSense 728×90 — Replace with your ad unit
      </div>
    </div>
  );
}
