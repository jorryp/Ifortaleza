export const NAV_ITEMS = [
  {
    label: { en: "Beaches", pt: "Praias", nl: "Stranden" },
    type: "wide" as const,
    feat: {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
      eyebrow: "⭐ Top Pick This Week",
      title: "Meireles Beachfront",
      sub: "Golden sand · sea breeze · tropical vibes",
    },
    cols: [
      {
        title: "🌊 By Location",
        links: [
          { href: "/beaches/meireles", icon: "🏖", label: "Meireles", desc: "Urban beachfront, hotels & restaurants" },
          { href: "/beaches/iracema", icon: "🌊", label: "Praia de Iracema", desc: "Historic centre & vibrant nightlife" },
          { href: "/beaches/cumbuco", icon: "🪁", label: "Cumbuco", desc: "World kitesurf capital, 30km away" },
          { href: "/beaches/canoa-quebrada", icon: "🏜", label: "Canoa Quebrada", desc: "Red cliffs, dunes & hippie village" },
          { href: "/beaches/jericoacoara", icon: "🌅", label: "Jericoacoara", desc: "Brazil's most beautiful beach village" },
        ],
      },
      {
        title: "🏄 By Activity",
        links: [
          { href: "/kitesurf", icon: "🪁", label: "Kitesurf & Windsurf", desc: "World's best spot — Cumbuco" },
          { href: "/barracas", icon: "🏖", label: "Barracas de Praia", desc: "Authentic beach shacks — cold beer & fish" },
          { href: "/beach-clubs", icon: "🍹", label: "Beach Clubs & Bars" },
          { href: "/beaches/family", icon: "👨‍👩‍👧", label: "Family Beaches" },
          { href: "/beaches", icon: "📖", label: "Full Beach Guide →" },
        ],
      },
    ],
    seo: "Fortaleza has 34km of coastline with 30+ beaches — from urban Meireles to paradise Jericoacoara. Discover the best beaches for kitesurf, barracas, swimming and parties in Ceará, Brazil. Updated weekly with conditions and insider tips.",
  },
  {
    label: { en: "🍹 Botecos", pt: "🍹 Botecos", nl: "🍹 Botecos" },
    type: "mid" as const,
    cols: [
      {
        title: "🍹 Find a Boteco",
        links: [
          { href: "/botecos/now", icon: "🟢", label: "Open Right Now", desc: "Live happy hour deals — verified today" },
          { href: "/botecos/sunset", icon: "🌅", label: "Sunset Botecos", desc: "Best spots for sundowners & cold beer" },
          { href: "/barracas", icon: "🏖", label: "Barracas de Praia", desc: "Feet in the sand, caipirinha in hand" },
          { href: "/botecos/live-music", icon: "🎶", label: "Live Music Botecos", desc: "Forró, MPB, Samba — live every night" },
          { href: "/caipirinha", icon: "🍹", label: "Best Caipirinhas", desc: "Top-rated caipirinha spots in Fortaleza" },
        ],
      },
      {
        title: "📍 By Neighbourhood",
        links: [
          { href: "/botecos/iracema", icon: "🌊", label: "Praia de Iracema", desc: "Most vibrant bar strip in the city" },
          { href: "/botecos/meireles", icon: "🏖", label: "Meireles", desc: "Tourist-friendly, great choice" },
          { href: "/botecos/beira-mar", icon: "🌴", label: "Beira Mar", desc: "Open-air ocean-front bars" },
          { href: "/botecos/aldeota", icon: "🏙", label: "Aldeota" },
          { href: "/botecos/benfica", icon: "🎵", label: "Benfica — Student Hub" },
        ],
      },
    ],
    seo: "Fortaleza's boteco culture is legendary in Brazil. Over 200 botecos serving cold Brahma, artisan caipirinhas and petiscos — from beach barracas on Beira Mar to live forró spots in Iracema. Our boteco guide is updated daily with opening hours, happy hour deals and current specials.",
  },
  {
    label: { en: "Parties", pt: "Festas", nl: "Feesten" },
    type: "mid" as const,
    cols: [
      {
        title: "🎉 Nightlife Guide",
        links: [
          { href: "/events", icon: "📅", label: "Events Calendar" },
          { href: "/clubs", icon: "🎵", label: "Club Guide" },
          { href: "/bars", icon: "🍸", label: "Cocktail Bars" },
          { href: "/beach-party", icon: "🌴", label: "Beach Parties" },
          { href: "/sunset-bars", icon: "🌅", label: "Sunset Bars" },
        ],
      },
      {
        title: "🎶 Music Styles",
        links: [
          { href: "/forro", icon: "🪗", label: "Forró & Baião" },
          { href: "/electronic", icon: "🎛", label: "Electronic / Techno" },
          { href: "/festivals", icon: "🎪", label: "Festivals" },
          { href: "/live-music", icon: "🎸", label: "Live Music" },
        ],
      },
    ],
    seo: "From authentic forró at Dragão do Mar to open-air techno raves on the dunes — Fortaleza's nightlife never sleeps. Complete event guide updated daily with tickets, prices and insider tips.",
  },
  {
    label: { en: "Food", pt: "Gastronomia", nl: "Eten" },
    type: "mid" as const,
    cols: [
      {
        title: "🍽 Cuisine & Places",
        links: [
          { href: "/seafood", icon: "🦞", label: "Seafood & Lobster" },
          { href: "/barracas", icon: "🏖", label: "Barracas de Praia", desc: "Best beach shacks for food & drinks" },
          { href: "/cearense", icon: "🍲", label: "Cearense Cuisine" },
          { href: "/fine-dining", icon: "🍽", label: "Fine Dining" },
          { href: "/tapioca", icon: "🫓", label: "Tapioca & Street Food" },
        ],
      },
      {
        title: "✨ By Vibe",
        links: [
          { href: "/restaurants/sea-view", icon: "🌅", label: "Sea View Dining" },
          { href: "/restaurants/romantic", icon: "❤️", label: "Romantic" },
          { href: "/restaurants/family", icon: "👨‍👩‍👧", label: "Family-Friendly" },
          { href: "/restaurants/budget", icon: "💵", label: "Budget Eats" },
        ],
      },
    ],
    seo: "Fortaleza is a seafood paradise. Fresh lobster, shrimp moqueca and crab straight from the Atlantic. Authentic barracas, traditional Cearense cuisine and world-class dining — 500+ verified restaurants.",
  },
  {
    label: { en: "Activities", pt: "Atividades", nl: "Activiteiten" },
    type: "slim" as const,
    links: [
      { href: "/kitesurf", icon: "🪁", label: "Kitesurf & Lessons" },
      { href: "/buggy", icon: "🚗", label: "Dune Buggy Tours" },
      { href: "/diving", icon: "🤿", label: "Diving & Snorkelling" },
      { href: "/boat", icon: "⛵", label: "Boat Trips" },
      { href: "/culture", icon: "🎨", label: "Culture & Art" },
      { href: "/shopping", icon: "🛍", label: "Shopping & Craft" },
      { href: "/day-trips", icon: "🗺", label: "Day Trips" },
    ],
  },
  {
    label: { en: "Magazine", pt: "Revista", nl: "Magazine" },
    type: "none" as const,
  },
];

export const HOT_CARDS = [
  { rank: 1, img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&q=80", badge: "🔥 Viral", cat: "🪁 Kitesurf", catColor: "var(--teal)", name: "Cumbuco at Sunrise", chips: ["30km away", "★ 4.9"], fomo: { text: "👀 89 people going today", green: true } },
  { rank: 2, img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=500&q=80", badge: "Tonight", cat: "🎶 Party", catColor: "var(--coral)", name: "Sunset Sessions", chips: ["From R$45", "Iracema"], fomo: { text: "⚡ Almost full — 14 spots left", green: false } },
  { rank: 3, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", badge: "⭐ Editor's Pick", cat: "🦞 Restaurant", catColor: "var(--sun)", name: "Restaurante Cabana", chips: ["Lobster", "Sea View"], fomo: { text: "🍹 2-for-1 caipirinhas until 8pm", green: true } },
  { rank: 4, img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80", badge: "🟢 HH Active", cat: "🍹 Boteco", catColor: "var(--pink2)", name: "Bar do Ceará", chips: ["Until 8pm", "Live Forró"], fomo: { text: "🍹 2-for-1 ends in 1h 10min", green: true } },
  { rank: 5, img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80", badge: "🌅 Must See", cat: "🏖 Beach", catColor: "var(--lime2)", name: "Jericoacoara Sunset", chips: ["Day Trip", "Paradise"] },
  { rank: 6, img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80", badge: "🪗 Weekend", cat: "🎶 Festival", catColor: "var(--coral)", name: "Forró na Praia 2025", chips: ["April 12–14", "R$30"], fomo: { text: "🔥 124 views in last hour", green: false } },
  { rank: 7, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80", badge: "💎 Luxury", cat: "🏨 Hotel", catColor: "var(--ocean-l)", name: "Gran Marquise Hotel", chips: ["Meireles", "★ 4.9"] },
];

export const BOTECOS = [
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80",
    alt: "Bar do Ceará boteco Iracema Fortaleza happy hour caipirinha live forró",
    open: true, hhTime: "🍹 HH until 8pm",
    name: "Bar do Ceará", loc: "📍 Praia de Iracema",
    tags: [{ cls: "music", label: "🪗 Live Forró" }, { cls: "food", label: "🦞 Petiscos" }, { cls: "drinks", label: "🍹 Caipirinha" }],
    specials: ["Caipirinha R$12 (reg. R$22)", "Brahma Draft 2-for-1"],
    rating: "★★★★★ 4.8",
  },
  {
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80",
    alt: "Cabana Beira Mar boteco beach bar Fortaleza sundowner MPB",
    open: true, hhTime: "🍺 HH until 7pm",
    name: "Cabana Beira Mar", loc: "📍 Meireles — Beira Mar",
    tags: [{ cls: "music", label: "🎵 MPB" }, { cls: "food", label: "🍢 Petiscos" }, { cls: "drinks", label: "🍺 Craft Beer" }],
    specials: ["Craft IPA 50% off", "Peixe frito R$19"],
    rating: "★★★★½ 4.7",
  },
  {
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&q=80",
    alt: "Botequim Benfica student bar live music Fortaleza happy hour",
    open: false, hhTime: "🎵 6–9pm HH",
    name: "Botequim do Benfica", loc: "📍 Benfica — Student Zone",
    tags: [{ cls: "music", label: "🎸 Live Band" }, { cls: "food", label: "🌮 Carne de Sol" }, { cls: "drinks", label: "🍹 Cachaça" }],
    specials: ["Caipirinha pitchers R$35", "Student ID = 20% off all night"],
    rating: "★★★★☆ 4.5",
  },
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80",
    alt: "Vila Gastronômica Varjota upscale bar restaurant Fortaleza cocktails DJ",
    open: true, hhTime: "🥂 HH 5–8pm",
    name: "Vila Gastronômica Varjota", loc: "📍 Varjota — Foodie Hub",
    tags: [{ cls: "music", label: "🎛 DJ Set" }, { cls: "food", label: "🦞 Seafood" }, { cls: "drinks", label: "🥂 Wine" }],
    specials: ["Wine by glass R$18", "Shrimp bruschetta R$22"],
    rating: "★★★★★ 4.9",
  },
];

export const BARRACAS = [
  { cls: "brc1", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Barraca Sol e Mar Meireles beach shack Fortaleza cold beer fresh fish sunset", badge: "⭐ #1 Rated Barraca", name: "Sol e Mar — Meireles", desc: "The iconic Meireles beach shack. Fresh fish, cold Brahma and the most photogenic sunset on the strip.", chips: ["🍺 Beer R$6", "🐟 Fresh Fish", "🌅 Sunset View"] },
  { cls: "brc2", img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700&q=80", alt: "Barraca do Kite Cumbuco beach bar kitesurf Fortaleza caipirinha", badge: "🪁 Kite Spot", name: "Barraca do Kite — Cumbuco", desc: "Right on the kite beach. Watch the kitesurfers fly while drinking a cold caipirinha in the breeze.", chips: ["🍹 Caipirinha", "🪁 Kite View"] },
  { cls: "brc3", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", alt: "Canoa Quebrada barraca red cliffs beach shack Ceará Brazil", badge: "🏜 Cliff View", name: "Canoa Quebrada", chips: ["🍺 Beer", "📸 Iconic"] },
  { cls: "brc4", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80", alt: "Barraca Iracema beach shack live music lobster Fortaleza historic", badge: "🌊 Iracema", name: "Barraca da Iracema", chips: ["🦞 Lobster", "🎶 Live Music"] },
  { cls: "brc5", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", alt: "Jericoacoara beach bar hammocks smoothies paradise Brazil sunset", badge: "🌅 Jeri Paradise", name: "Jeri Beach Bar", chips: ["🍹 Smoothies", "🌴 Hammocks"] },
];

export const EVENTS = [
  { feat: true, badge: "🔥 Event of the Month", title: "Forró Festival Universitário 2025", desc: "The biggest forró event in Ceará — 3 nights of non-stop forró, xaxado and baião with 20+ artists at Dragão do Mar.", meta: ["📅 April 1–3", "📍 Dragão do Mar", "🎵 Forró", "🎟 R$30"], img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80", price: "R$30" },
  { day: "28", month: "Mar", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&q=80", genre: "🎛 Electronic", name: "Sunset Sessions", venue: "📍 Praia de Iracema", price: "R$ 45" },
  { day: "05", month: "Apr", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80", hot: true, genre: "🪁 Sports", name: "Kite Fest Cumbuco 2025", venue: "📍 Cumbuco Beach", price: "Free" },
  { day: "12", month: "Apr", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80", genre: "🌴 Beach Party", name: "Dunas Night — Open Air", venue: "📍 Dunas do Cumbuco", price: "R$ 120" },
  { day: "18", month: "Apr", img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&q=80", genre: "🦞 Food Festival", name: "Gastro Fest Ceará", venue: "📍 Aldeota", price: "R$ 25" },
];

export const TOP10_BARS = [
  { n: "01", ncls: "g", ico: "🍹", name: "Bar do Ceará — Iracema", meta: "Live Forró · Caipirinha from R$12 · HH 5–8pm", rating: "★ 4.9" },
  { n: "02", ncls: "g", ico: "🌅", name: "Sunset Sessions — Beira Mar", meta: "Ocean view · DJ Set · Cocktails from R$22", rating: "★ 4.8" },
  { n: "03", ncls: "s", ico: "🏖", name: "Cabana Beira Mar — Meireles", meta: "MPB Live · Craft Beer · Petiscos from R$19", rating: "★ 4.8", ad: { name: "Vila Gastronômica Varjota — Upscale dining & cocktails", sub: "DJ set nightly · Happy hour 5–8pm · Reservations recommended", cta: "Reserve Table →" } },
  { n: "04", ncls: "s", ico: "🍺", name: "Botequim do Benfica", meta: "Student hub · Live band · Budget-friendly", rating: "★ 4.7" },
  { n: "05", ncls: "s", ico: "🥂", name: "Vila Gastronômica Varjota", meta: "Foodie hub · Wine bar · DJ Set nightly", rating: "★ 4.9" },
  { n: "06", ncls: "b", ico: "🎸", name: "Espeto Cearense — Aldeota", meta: "BBQ · Live music · Great local value", rating: "★ 4.6", ad: { name: "Iate Plaza Hotel — Rooftop bar with panoramic ocean view", sub: "Open to guests & walk-ins · Cocktail menu · Meireles beachfront", cta: "Visit Rooftop →" } },
  { n: "07", ncls: "b", ico: "🌴", name: "Barraca do Seu Duda — Meireles", meta: "Beach bar · Cold beer · Amazing sunsets", rating: "★ 4.7" },
  { n: "08", ncls: "b", ico: "🪗", name: "Forró Pé de Serra — Iracema", meta: "Authentic forró · Dance floor · Great energy", rating: "★ 4.6" },
  { n: "09", ncls: "", ico: "🍸", name: "Nômade Bar — Meireles", meta: "Craft cocktails · Trendy crowd · Instagrammable", rating: "★ 4.5" },
  { n: "10", ncls: "", ico: "🎵", name: "Órbita Rock Bar — Benfica", meta: "Live rock · Dive bar feel · Cheapest drinks in town", rating: "★ 4.5" },
];

export const AWARDS = [
  { icon: "🍺", label: "Boteco of the Month", name: "Bar do Ceará", sub: "Best live forró, coldest beer, friendliest vibe on Iracema" },
  { icon: "🌅", label: "Sunset Spot of the Season", name: "Beira Mar Lookout", sub: "Voted #1 sunset spot by 2,400 visitors this month" },
  { icon: "🍹", label: "Cocktail of the Month", name: "Caipirinha de Maracujá", sub: "At Vila Varjota — passion fruit perfection at R$18" },
  { icon: "🪁", label: "Kite School Rising Star", name: "Cumbuco Kite Pro", sub: "Best beginner lessons, safest instructors, best value 2026" },
];

export const WEBCAMS = [
  { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", name: "Meireles Beachfront", meta: "Live 24/7 · Currently: Sunny · Busy" },
  { img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&q=80", name: "Cumbuco Kite Beach", meta: "Live · Wind: 28 km/h · Perfect kite conditions" },
  { img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", name: "Jericoacoara Sunset Point", meta: "Live · Golden hour at 18:24 tonight" },
];

export const SPONSORS = [
  { img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", alt: "Iate Plaza Hotel Fortaleza 4-star beachfront Meireles", cat: "🏨 Hotel", name: "Iate Plaza Hotel", desc: "Direct beach access, rooftop pool and gourmet seafood restaurant. Meireles' best 4-star address.", rating: "★★★★½ 4.7", cta: "Book Now →", href: "/hotels/iate-plaza" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurante Cabana fresh lobster seafood Fortaleza sea view", cat: "🦞 Restaurant", name: "Restaurante Cabana", desc: "Freshest lobster in Fortaleza. Straight from the Atlantic, with cold beer and sea views on the terrace.", rating: "★★★★★ 4.9", cta: "See Menu →", href: "/restaurants/cabana" },
  { img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80", alt: "Sunset Sessions beach bar DJ live music Iracema Fortaleza", cat: "🍸 Bar & Club", name: "Sunset Sessions Iracema", desc: "Fortaleza's best sunset bar. Live DJs, tropical cocktails and the most photogenic terrace in the city.", rating: "★★★★½ 4.8", cta: "Get Tickets →", href: "/events/sunset-sessions" },
];

export const HOTELS = [
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", alt: "Gran Marquise Hotel Fortaleza 5-star beachfront Meireles", badge: "⭐ Top Rated", type: "Resort", loc: "Meireles", name: "Gran Marquise", rating: "★★★★★", price: "R$680", href: "/hotels/gran-marquise" },
  { img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", alt: "Iate Plaza Hotel Fortaleza ocean view beachfront Beira Mar", badge: "🌊 Beach", type: "Hotel", loc: "Beira Mar", name: "Iate Plaza", rating: "★★★★½", price: "R$480", href: "/hotels/iate-plaza" },
  { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80", alt: "Pousada Iracema Inn budget guesthouse beach Fortaleza", badge: "💰 Value", type: "Pousada", loc: "Iracema", name: "Pousada Iracema", rating: "★★★★☆", price: "R$180", href: "/hotels/pousada-iracema" },
  { img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80", alt: "Beach Park Suites Resort Cumbuco kitesurf Fortaleza", badge: "🪁 Kite", type: "Resort", loc: "Cumbuco", name: "Beach Park Resort", rating: "★★★★★", price: "R$890", href: "/hotels/beach-park" },
];

export const EDITORIAL = [
  { cls: "fc1", img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80", alt: "Forró festival night Fortaleza Brazil beach party", tag: { cls: "tc", label: "Festival" }, title: "Forró na Praia 2025 — The Greatest Party in Northeast Brazil", meta: ["📅 April 12–14", "⏱ 8 min"] },
  { cls: "fc2", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80", alt: "Kitesurf Cumbuco beach Fortaleza world capital", tag: { cls: "to", label: "Kitesurf" }, title: "Cumbuco: World Kitesurf Capital Guide" },
  { cls: "fc3", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80", alt: "Fresh lobster seafood restaurant Fortaleza Ceará", tag: { cls: "ts", label: "Food" }, title: "10 Best Seafood Restaurants" },
  { cls: "fc4", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80", alt: "Meireles beach Fortaleza aerial view golden sand", tag: { cls: "tp", label: "Beaches" }, title: "Meireles Beach Complete Guide" },
  { cls: "fc5", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80", alt: "Jericoacoara sunset beach paradise Brazil dunes", tag: { cls: "tp", label: "Guide" }, title: "Jericoacoara Day Trip" },
  { cls: "fc6", img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700&q=80", alt: "Canoa Quebrada red cliffs hippie village Ceará Brazil", tag: { cls: "tc", label: "Beaches" }, title: "Canoa Quebrada Red Cliffs" },
];

export const PRICE_ITEMS = [
  { icon: "🍺", name: "Beer", price: "R$5–10" },
  { icon: "🍹", name: "Caipirinha", price: "R$15–25" },
  { icon: "🍽", name: "Dinner", price: "R$30–80" },
  { icon: "🏨", name: "Hotel/night", price: "R$150–800" },
  { icon: "🚗", name: "Uber/km", price: "R$2–4" },
  { icon: "🎟", name: "Club entry", price: "R$30–120" },
];

export type PlanMode = "party" | "chill" | "romantic" | "budget";
export type PlanStep = { icon: string; time: string; name: string; meta: string; taxi: string; fomo?: string } | "ad";

export const NIGHT_PLANS: Record<PlanMode, PlanStep[]> = {
  party: [
    { icon: "🍹", time: "6:00 PM — Pre-Drinks", name: "Bar do Ceará — Iracema", meta: "Happy Hour 2-for-1 · R$12 caipirinhas", taxi: "🚶 5 min from Meireles hotels", fomo: "🟢 HH Active Now" },
    { icon: "🦞", time: "8:00 PM — Dinner", name: "Restaurante Cabana — Beira Mar", meta: "Fresh lobster from R$89 · Sea view terrace", taxi: "🚕 ~R$12 · 8 min" },
    "ad",
    { icon: "🎛", time: "10:30 PM — Party", name: "Sunset Sessions — Iracema", meta: "Electronic · R$45 · Peak at 00:30", taxi: "🚕 ~R$8 · 5 min", fomo: "⚡ 14 spots left" },
    { icon: "🌅", time: "End of Night", name: "Sunrise at Meireles Beach", meta: "The perfect Fortaleza ending", taxi: "🚶 Walk Beira Mar" },
  ],
  chill: [
    { icon: "🌊", time: "10:00 AM — Beach", name: "Meireles Beachfront", meta: "Relax · Swim · Chair R$15", taxi: "🚶 Walk" },
    { icon: "🏖", time: "1:00 PM — Lunch", name: "Barraca Sol e Mar", meta: "Fresh fish R$28 · Beer R$6", taxi: "🏖 On the beach" },
    "ad",
    { icon: "🌅", time: "5:30 PM — Sunset", name: "Beira Mar Lookout Point", meta: "Best free sunset in the city", taxi: "🚕 ~R$10", fomo: "🌅 Golden hour at 18:24" },
    { icon: "🎵", time: "8:00 PM — Dinner", name: "Cabana Beira Mar — MPB Night", meta: "Live MPB · Petiscos · Craft beer", taxi: "🚕 5 min · R$8" },
  ],
  romantic: [
    { icon: "🌅", time: "5:30 PM — Sunset Cocktails", name: "Beira Mar Sunset Terrace", meta: "Cocktails from R$22 · Ocean view", taxi: "🚕 ~R$12" },
    { icon: "🦞", time: "7:30 PM — Dinner", name: "Vila Gastronômica Varjota", meta: "Fine dining · Wine · DJ set", taxi: "🚕 ~R$14 · 10 min" },
    "ad",
    { icon: "🌙", time: "10:00 PM — Late Night", name: "Iracema Waterfront Walk", meta: "Moonlit stroll · Bars open", taxi: "🚕 ~R$10" },
    { icon: "⭐", time: "End of Night", name: "Rooftop — Iate Plaza Hotel", meta: "Panoramic ocean view at night", taxi: "🚕 ~R$12" },
  ],
  budget: [
    { icon: "🏖", time: "9:00 AM — Free Beach", name: "Praia de Iracema", meta: "Free entry · Historic beach", taxi: "🚶 Walk or bus R$4" },
    { icon: "🫓", time: "12:00 PM — Lunch", name: "Mercado Central Food Court", meta: "Tapioca R$6 · Food R$15", taxi: "🚕 ~R$8" },
    "ad",
    { icon: "🍺", time: "5:30 PM — Cheap Happy Hour", name: "Botequim do Benfica", meta: "Beer R$5 · Carne de sol R$18", taxi: "🚕 ~R$10 · 7 min", fomo: "💰 Cheapest HH in the city" },
    { icon: "🪗", time: "8:30 PM — Free Forró", name: "Forró Pé de Serra — Street Stage", meta: "Free · Live forró · Local vibe", taxi: "🚶 5 min from Benfica" },
  ],
};

export const MAGAZINE_ARTICLES = [
  { big: true, img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80", alt: "Fortaleza first time visitor guide beaches botecos barracas Ceará Brazil 2026", cat: "Essential Guide", title: "First Time in Fortaleza? The Ultimate 2026 Guide", excerpt: "From best beaches to top botecos and what to eat — the definitive guide to Ceará's vibrant capital.", author: { init: "AM", name: "Ana Melo" }, time: "15 min" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Best seafood restaurants lobster Fortaleza Ceará guide 2026", cat: "Gastronomy", title: "Best Seafood Spots You Can't Miss", excerpt: "8 verified spots for fresh lobster and fish from the Atlantic.", author: { init: "CL", name: "Carlos Lima" }, time: "8 min" },
  { img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&q=80", alt: "Kitesurf guide Cumbuco Fortaleza beginner advanced schools lessons 2026", cat: "Sports", title: "Kitesurf in Cumbuco: Complete Guide 2026", excerpt: "Best schools, conditions and safety tips for the world's best kite spot.", author: { init: "RB", name: "Rafael B." }, time: "10 min" },
];
