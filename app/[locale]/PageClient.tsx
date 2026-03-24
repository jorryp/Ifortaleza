'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdZone from '@/components/ads/AdZone';
import CookieConsent from '@/components/ui/CookieConsent';
import { StickyCTA, ScrollProgress, BackToTop, RevealObserver } from '@/components/ui/ClientUtils';

export default function PageClient({ locale }: { locale: string }) {
  const th = useTranslations('hero');
  const ts = useTranslations('sections');
  const tf = useTranslations('faq');
  const L = (href: string) => `/${locale}${href}`;
  const [searchVal, setSearchVal] = useState('');

  return (
    <>
      <ScrollProgress />
      <Header locale={locale} />

      <style suppressHydrationWarning>{`
        @keyframes hzoom  { to{transform:scale(1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes tickm  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes mpng   { 0%,100%{box-shadow:0 0 0 0 rgba(0,153,204,.5)} 70%{box-shadow:0 0 0 10px rgba(0,153,204,0)} }
        @keyframes livep  { 0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,.6)} 60%{box-shadow:0 0 0 8px rgba(52,211,153,0)} }
        @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:.5} }

        /* Reveal */
        .rv{opacity:0;transform:translateY(28px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);}
        .rv.in{opacity:1;transform:none;}
        .rv-l{opacity:0;transform:translateX(-28px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);}
        .rv-l.in{opacity:1;transform:none;}
        .rv-r{opacity:0;transform:translateX(28px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);}
        .rv-r.in{opacity:1;transform:none;}

        /* Cards */
        .card-h:hover{transform:translateY(-8px)!important;box-shadow:0 24px 56px rgba(0,0,0,.13)!important;}
        .card-h{transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s cubic-bezier(.16,1,.3,1);}
        .card-h:hover .ci{transform:scale(1.06)!important;}
        .ci{transition:transform .6s cubic-bezier(.16,1,.3,1);}

        /* Beach */
        .bc-h:hover{transform:translateY(-10px) scale(1.01)!important;}
        .bc-h{transition:transform .35s cubic-bezier(.16,1,.3,1);}
        .bc-h:hover .bi{transform:scale(1.07)!important;}
        .bi{transition:transform .7s cubic-bezier(.16,1,.3,1);}

        /* Partner */
        .partner-card:hover{transform:translateY(-4px)!important;box-shadow:0 20px 48px rgba(0,0,0,.1)!important;border-color:rgba(0,153,204,.3)!important;}
        .partner-card{transition:all .3s cubic-bezier(.16,1,.3,1);}

        /* Chip */
        .chip-h:hover{background:rgba(255,255,255,1)!important;transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.15)!important;}
        .chip-h{transition:all .2s;}

        /* CatNav */
        .cn:hover{background:#0099cc!important;color:#fff!important;}
        .cn{transition:all .2s;}

        /* Event */
        .ev:hover{background:#fff!important;border-color:rgba(0,153,204,.15)!important;transform:translateX(4px);}
        .ev{transition:all .22s;}

        /* FAQ */
        .fq{border:1.5px solid #edf2f7;border-radius:16px;margin-bottom:10px;background:#fff;overflow:hidden;transition:.2s;}
        .fq:hover{border-color:rgba(0,153,204,.2);box-shadow:0 4px 20px rgba(0,80,140,.06);}
        .fq[open]{border-color:rgba(0,153,204,.3);}
        .fq summary{padding:18px 22px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:14px;list-style:none;font-size:15.5px;font-weight:700;color:#0a0e1a;}
        .fq summary::-webkit-details-marker{display:none;}
        .fqi{width:28px;height:28px;border-radius:50%;background:#f0f9ff;color:#0099cc;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;transition:.3s;}
        details[open] .fqi{transform:rotate(45deg);background:#0099cc;color:#fff;}

        /* Night */
        .nc:hover{transform:scale(1.02);}
        .nc{transition:.3s;}

        /* Scroll */
        .ns{scrollbar-width:none;}
        .ns::-webkit-scrollbar{display:none;}

        /* Section titles */
        .sh2{font-family:'Fraunces',serif;font-size:clamp(30px,4.2vw,54px);font-weight:700;letter-spacing:-2px;line-height:1.07;color:#0a0e1a;}
        .sh2 em{font-style:italic;color:#ff6b47;}
        .sey{font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#0099cc;}

        /* Search */
        .sb-f input::placeholder{color:rgba(255,255,255,.45);}
        .sb-f input{color:#fff;caret-color:#fff;}

        /* Mobile */
        @media(max-width:768px){
          .hide-m{display:none!important;}
          .hero-stats{display:none!important;}
          .mob-col{flex-direction:column!important;}
          .mob-fw{width:100%!important;min-width:0!important;}
        }
        @media(min-width:769px){
          .show-m{display:none!important;}
        }

        /* Mag card */
        .mag-s:hover{border-color:rgba(0,153,204,.25)!important;transform:translateX(4px);}
        .mag-s{transition:all .22s;}
      `}</style>

      <main>

        {/* ══════════════════════════════════════════
            HERO — TROPICAL FORTALEZA
        ══════════════════════════════════════════ */}
        <section style={{position:'relative',height:'100svh',minHeight:'640px',overflow:'hidden',display:'flex',alignItems:'flex-end'}}>

          {/* BG */}
          <div style={{position:'absolute',inset:0,zIndex:0}}>
            <Image
              src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp"
              alt="Fortaleza Brazil — turquoise Atlantic waters, palm trees and golden beaches of Ceará"
              fill priority fetchPriority="high"
              sizes="100vw"
              style={{objectFit:'cover',transform:'scale(1.06)',animation:'hzoom 16s ease-out forwards'}}
            />
            {/* Multi-layer overlay for perfect readability */}
            <div style={{position:'absolute',inset:0,background:'linear-gradient(160deg,rgba(0,20,50,.08) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 50%,rgba(2,8,20,.8) 85%,rgba(2,8,20,.96) 100%)'}}/>
            <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,rgba(0,0,0,.3) 0%,transparent 55%)'}}/>
          </div>

          {/* Live badge */}
          <div style={{position:'absolute',top:'clamp(88px,11vw,116px)',left:'clamp(20px,4vw,56px)',zIndex:2,animation:'fadeIn .7s .2s both'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(0,0,0,.35)',backdropFilter:'blur(16px)',border:'1px solid rgba(255,255,255,.18)',borderRadius:'100px',padding:'8px 18px',fontSize:'11.5px',fontWeight:700,color:'rgba(255,255,255,.9)',letterSpacing:'.8px',textTransform:'uppercase'}}>
              <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'#34d399',animation:'livep 2s infinite',flexShrink:0}}/>
              Fortaleza, Brazil — Live Right Now
            </div>
          </div>

          {/* Content */}
          <div style={{position:'relative',zIndex:2,width:'100%',padding:'0 clamp(20px,5vw,56px) clamp(44px,6vw,72px)'}}>
            <div style={{maxWidth:'1380px',margin:'0 auto'}}>
              <div style={{maxWidth:'820px'}}>

                {/* TITLE */}
                <h1 style={{margin:'0 0 22px'}}>
                  <span style={{display:'block',fontFamily:"'Fraunces',serif",fontSize:'clamp(56px,11vw,160px)',fontWeight:700,lineHeight:.88,letterSpacing:'-4px',color:'#fff',animation:'fadeUp .8s .35s both',textShadow:'0 2px 32px rgba(0,0,0,.2)'}}>
                    {th('line2')}
                  </span>
                  <span style={{display:'block',fontFamily:"'Fraunces',serif",fontSize:'clamp(26px,4.5vw,62px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-1.5px',color:'rgba(255,255,255,.75)',fontStyle:'italic',animation:'fadeUp .85s .5s both',marginTop:'6px'}}>
                    {th('line3')}
                  </span>
                </h1>

                {/* Desc */}
                <p style={{fontSize:'clamp(15px,1.7vw,19px)',color:'rgba(255,255,255,.65)',fontWeight:300,lineHeight:1.75,maxWidth:'500px',margin:'0 0 28px',animation:'fadeUp .85s .65s both'}}>
                  Fortaleza's #1 city explorer — beaches, botecos, barracas, parties & culture. Updated daily, loved by locals and travellers.
                </p>

                {/* SEARCH BAR */}
                <div style={{animation:'fadeUp .85s .8s both'}}>
                  <div style={{background:'rgba(255,255,255,.1)',backdropFilter:'blur(24px)',border:'1.5px solid rgba(255,255,255,.22)',borderRadius:'18px',padding:'7px',display:'flex',alignItems:'center',gap:'6px',flexWrap:'wrap',maxWidth:'680px'}} className="sb-f">
                    <div style={{flex:'1 1 200px',minWidth:'160px',padding:'10px 16px',borderRight:'1px solid rgba(255,255,255,.12)'}}>
                      <p style={{fontSize:'9px',fontWeight:800,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,.45)',marginBottom:'3px'}}>Looking for</p>
                      <input type="text" value={searchVal} onChange={e=>setSearchVal(e.target.value)} placeholder="Beaches, barracas, forró, food..." aria-label="Search" style={{width:'100%',background:'none',border:'none',outline:'none',fontFamily:'inherit',fontSize:'14px',fontWeight:500}} />
                    </div>
                    <div style={{flex:'1 1 140px',minWidth:'120px',padding:'10px 16px',borderRight:'1px solid rgba(255,255,255,.12)'}}>
                      <p style={{fontSize:'9px',fontWeight:800,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,.45)',marginBottom:'3px'}}>Neighbourhood</p>
                      <input type="text" placeholder="Meireles, Iracema..." aria-label="Neighbourhood" style={{width:'100%',background:'none',border:'none',outline:'none',fontFamily:'inherit',fontSize:'14px',fontWeight:500,color:'#fff'}}/>
                    </div>
                    <Link href={L('/beaches')} style={{background:'#ff6b47',color:'#fff',padding:'14px 26px',borderRadius:'12px',fontFamily:'inherit',fontSize:'14px',fontWeight:800,display:'flex',alignItems:'center',gap:'7px',whiteSpace:'nowrap',boxShadow:'0 5px 24px rgba(255,107,71,.45)',letterSpacing:'.3px',flexShrink:0}}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="7" cy="7" r="5"/><path d="m11 11 3 3"/></svg>
                      Explore Now
                    </Link>
                  </div>

                  {/* Trending chips */}
                  <div style={{display:'flex',flexWrap:'wrap',gap:'7px',marginTop:'14px'}}>
                    <span style={{fontSize:'11px',fontWeight:600,color:'rgba(255,255,255,.4)',alignSelf:'center',letterSpacing:'.5px'}}>🔥 Trending:</span>
                    {[['Beaches','/beaches'],['Botecos','/nightlife?type=bar'],['Barracas','/restaurants?cat=barraca'],['Forró Tonight','/nightlife?type=forro'],['Kitesurfing','/activities?type=kitesurfing'],['Seafood','/restaurants?cat=seafood']].map(([label,href]) => (
                      <Link key={String(href)} href={L(String(href))} className="chip-h" style={{padding:'7px 14px',background:'rgba(255,255,255,.1)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,.18)',borderRadius:'100px',fontSize:'12px',fontWeight:600,color:'rgba(255,255,255,.85)',textDecoration:'none'}}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats inline (mobile-friendly) */}
              <div style={{display:'flex',gap:'28px',marginTop:'36px',flexWrap:'wrap',animation:'fadeUp .85s .95s both'}} className="hero-inline-stats">
                {[[th('stat1n'),th('stat1l'),'🌊'],[th('stat2n'),th('stat2l'),'🍹'],[th('stat3n'),th('stat3l'),'🌍'],[th('stat4n'),th('stat4l'),'👥']].map(([num,label,icon]) => (
                  <div key={String(label)} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <span style={{fontSize:'18px'}}>{icon}</span>
                    <div>
                      <p style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#fff',lineHeight:1}}>{num}</p>
                      <p style={{fontSize:'10px',color:'rgba(255,255,255,.45)',fontWeight:500,marginTop:'1px',letterSpacing:'.3px'}}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div style={{position:'absolute',bottom:'20px',left:'50%',transform:'translateX(-50%)',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',gap:'5px',animation:'fadeIn 1s 1.3s both'}}>
            <div style={{width:'1px',height:'36px',background:'linear-gradient(rgba(255,255,255,.35),transparent)',animation:'float 2s ease-in-out infinite'}}/>
          </div>
        </section>

        {/* TICKER */}
        <div style={{background:'#0a0e1a',padding:'11px 0',overflow:'hidden',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:'60px',background:'linear-gradient(to right,#0a0e1a,transparent)',zIndex:1,pointerEvents:'none'}}/>
          <div style={{position:'absolute',right:0,top:0,bottom:0,width:'60px',background:'linear-gradient(to left,#0a0e1a,transparent)',zIndex:1,pointerEvents:'none'}}/>
          <div style={{display:'flex',gap:'52px',animation:'tickm 32s linear infinite',whiteSpace:'nowrap'}}>
            {[...Array(2)].flatMap((_,oi)=>
              ['🌊 Cumbuco kitesurf season open','🎵 Grand Forró Festival Mar 25','🏆 Best Seafood Awards 2026','✈️ New Amsterdam–Fortaleza direct','🤩 New rooftop bar just opened Meireles','🌅 Best sunset spots ranked 2026','🦀 Caranguejo season starts April','🎭 Carnival afterparty season in full swing'].map((item,i)=>(
                <span key={`${oi}-${i}`} style={{display:'inline-flex',alignItems:'center',gap:'10px',fontSize:'11.5px',fontWeight:600,color:'rgba(255,255,255,.5)',letterSpacing:'.5px',marginRight:'52px'}}>
                  <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#0099cc',flexShrink:0}}/>
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* CAT NAV */}
        <div style={{background:'#fff',borderBottom:'1px solid #edf2f7',position:'sticky',top:'68px',zIndex:100}}>
          <div style={{maxWidth:'1380px',margin:'0 auto',padding:'0 clamp(16px,3vw,40px)'}}>
            <nav className="ns" style={{display:'flex',gap:0,overflowX:'auto'}} aria-label="Browse Fortaleza">
              {[['🌊','Beaches','/beaches'],['🍹','Botecos','/nightlife?type=bar'],['🍽️','Food','/restaurants'],['🏨','Stay','/hotels'],['🎉','Parties','/nightlife'],['🪂','Adventures','/activities'],['📅','Events','/events'],['🚗','Getting Around','/airport'],['📸','Photo Spots','/magazine?tag=photo']].map(([icon,label,href])=>(
                <Link key={String(href)} href={L(String(href))} className="cn" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'4px',padding:'11px 16px',flexShrink:0,fontSize:'10.5px',fontWeight:600,color:'#64748b',textDecoration:'none',borderBottom:'2px solid transparent',letterSpacing:'.3px',whiteSpace:'nowrap'}}>
                  <span style={{fontSize:'17px'}}>{icon}</span>{label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* AD */}
        <div style={{background:'#f8fafc',padding:'14px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}><AdZone size="leaderboard" slot="top" /></div>
        </div>

        {/* ══════════════════════════════════════════
            HOT RIGHT NOW — "OUR PICK"
            (replaces "Featured Stories")
        ══════════════════════════════════════════ */}
        <section style={{background:'#fff',padding:'64px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>⚡ Our Pick</p>
                <h2 className="sh2">What Fortaleza is <em>Talking About</em></h2>
                <p style={{fontSize:'14px',color:'#64748b',marginTop:'6px',maxWidth:'440px'}}>Hand-picked by our local team. Updated every morning.</p>
              </div>
              <Link href={L('/magazine')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #e0f7ff',borderRadius:'100px',background:'#f0fbff',textDecoration:'none',display:'flex',alignItems:'center',gap:'5px'}}>
                See all →
              </Link>
            </div>

            {/* Editorial 3-col */}
            <div className="rv" style={{display:'grid',gap:'18px',gridTemplateColumns:'1fr'}}>
              <style suppressHydrationWarning>{`@media(min-width:768px){.pick-grid{grid-template-columns:1.5fr 1fr 1fr!important;}}`}</style>
              <div className="pick-grid" style={{display:'grid',gap:'18px',gridTemplateColumns:'1fr'}}>
                {/* Big hero pick */}
                <article className="card-h" style={{borderRadius:'20px',overflow:'hidden',position:'relative',cursor:'pointer',minHeight:'460px',background:'#050f20',gridRow:'span 2',boxShadow:'0 4px 24px rgba(0,0,0,.08)'}}>
                  <div className="ci" style={{position:'absolute',inset:0}}>
                    <Image src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp" alt="Fortaleza tropical beach sunset" fill sizes="(max-width:768px) 100vw, 50vw" style={{objectFit:'cover',opacity:.7}}/>
                  </div>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(2,8,20,.96) 0%,rgba(2,8,20,.15) 55%,transparent 100%)'}}/>
                  {/* "Our Pick" stamp */}
                  <div style={{position:'absolute',top:'18px',left:'18px',display:'flex',gap:'8px',alignItems:'center'}}>
                    <span style={{background:'#ff6b47',color:'#fff',fontSize:'10px',fontWeight:800,padding:'5px 12px',borderRadius:'100px',letterSpacing:'1px',textTransform:'uppercase'}}>⚡ Our Pick</span>
                    <span style={{background:'rgba(0,0,0,.4)',backdropFilter:'blur(8px)',color:'rgba(255,255,255,.8)',fontSize:'10px',fontWeight:600,padding:'5px 10px',borderRadius:'100px'}}>🎵 Nightlife</span>
                  </div>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'26px 28px'}}>
                    <p style={{fontSize:'11px',fontWeight:600,color:'rgba(255,255,255,.4)',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Editor's pick · March 2026</p>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(20px,2.8vw,32px)',fontWeight:700,color:'#fff',lineHeight:1.2,marginBottom:'12px'}}>
                      Fortaleza After Dark: The Definitive Forró & Nightlife Map 2026
                    </h3>
                    <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'rgba(255,255,255,.35)',alignItems:'center',flexWrap:'wrap'}}>
                      <span>📅 March 22, 2026</span><span>⏱ 7 min</span><span>👁 14.2k views</span>
                    </div>
                  </div>
                </article>

                {/* Cards 2 & 3 */}
                {[
                  {cat:'🌊 Beach Life',title:'7 Secret Beaches Near Fortaleza Only Locals Know About',meta:'Mar 21 · 4 min · 9.1k',bg:'linear-gradient(135deg,#e0f2fe,#bae6fd)',icon:'🏄',accent:'#0284c7'},
                  {cat:'🦀 Food & Drink',title:'The Best Caranguejo Spots Ranked — By Someone Who Ate at All of Them',meta:'Mar 18 · 5 min · 11.3k',bg:'linear-gradient(135deg,#fef3c7,#fde68a)',icon:'🦀',accent:'#d97706'},
                ].map((s,i)=>(
                  <article key={i} className="card-h" style={{borderRadius:'20px',overflow:'hidden',cursor:'pointer',background:s.bg,display:'flex',flexDirection:'column',justifyContent:'flex-end',padding:'24px',position:'relative',minHeight:'200px',boxShadow:'0 2px 16px rgba(0,0,0,.06)'}}>
                    <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <span style={{fontSize:'80px',opacity:.12}}>{s.icon}</span>
                    </div>
                    <div style={{position:'relative',zIndex:1}}>
                      <span style={{display:'inline-block',background:s.accent,color:'#fff',fontSize:'10px',fontWeight:800,padding:'4px 10px',borderRadius:'100px',marginBottom:'10px',letterSpacing:'.5px'}}>{s.cat}</span>
                      <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(16px,1.8vw,20px)',fontWeight:700,color:'#0a0e1a',lineHeight:1.25,marginBottom:'8px'}}>{s.title}</h3>
                      <p style={{fontSize:'11px',color:'#64748b',fontWeight:500}}>{s.meta}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FEATURED PARTNERS
            Premium marketing spots — YES partners pay!
        ══════════════════════════════════════════ */}
        <section style={{background:'linear-gradient(180deg,#fff 0%,#f0f9ff 100%)',padding:'64px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>✨ Featured in Fortaleza</p>
                <h2 className="sh2">Places Worth <em>Visiting</em></h2>
                <p style={{fontSize:'14px',color:'#64748b',marginTop:'6px',maxWidth:'460px'}}>Personally verified by our local team. These spots are the real deal.</p>
              </div>
              <Link href={L('/advertise')} style={{fontSize:'12px',fontWeight:700,color:'#64748b',padding:'8px 16px',border:'1.5px solid #e2e8f0',borderRadius:'100px',background:'#fff',textDecoration:'none'}}>
                Get featured →
              </Link>
            </div>

            <div className="rv" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'18px'}}>
              {[
                {type:'🏨 Hotel',name:'Gran Marquise Hotel',tag:'Beachfront Luxury',desc:'Fortaleza\'s finest. Infinity pool overlooking the Atlantic, award-winning restaurant and straight onto Meireles Beach.',rating:'4.9',reviews:'2.1k',price:'From R$480/night',accent:'#7c3aed',badge:'Sold out weekends',cta:'Check availability',slug:'/hotels/gran-marquise'},
                {type:'🦀 Restaurant',name:'La Mer Seafood',tag:'Ocean View Dining',desc:'The lobster is legendary. Atlantic views, fresh daily catch and a wine list that punches above its weight.',rating:'4.9',reviews:'1.2k',price:'R$80–180 per person',accent:'#0099cc',badge:'Book 3 days ahead',cta:'Reserve a table',slug:'/restaurants/la-mer'},
                {type:'🪂 Experience',name:'Cumbuco Kite School',tag:'IKO Certified',desc:'Learn to kite on one of the world\'s best spots. All skill levels welcome. Trade winds blow 280 days a year.',rating:'4.9',reviews:'567',price:'From R$280 per session',accent:'#059669',badge:'#1 in Ceará',cta:'Book a session',slug:'/activities/kitesurfing'},
              ].map(p=>(
                <div key={p.name} className="partner-card" style={{borderRadius:'20px',background:'#fff',border:'1.5px solid #edf2f7',overflow:'hidden',display:'flex',flexDirection:'column',boxShadow:'0 2px 16px rgba(0,0,0,.06)'}}>
                  {/* Color header */}
                  <div style={{height:'140px',background:`linear-gradient(135deg,${p.accent}18,${p.accent}08)`,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0}}>
                    <div style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:p.accent}}/>
                    <span style={{fontSize:'56px',opacity:.25}}>{p.type.split(' ')[0]}</span>
                    {p.badge && (
                      <div style={{position:'absolute',top:'14px',right:'14px',background:p.accent,color:'#fff',fontSize:'10px',fontWeight:700,padding:'4px 10px',borderRadius:'100px',letterSpacing:'.5px'}}>
                        {p.badge}
                      </div>
                    )}
                    <div style={{position:'absolute',bottom:'14px',left:'14px',background:'rgba(255,255,255,.9)',backdropFilter:'blur(8px)',borderRadius:'100px',padding:'4px 10px',fontSize:'10px',fontWeight:700,color:p.accent,display:'flex',alignItems:'center',gap:'4px'}}>
                      <span style={{color:'#f59e0b'}}>★</span> {p.rating} <span style={{color:'#94a3b8',fontWeight:400}}>({p.reviews} reviews)</span>
                    </div>
                  </div>
                  {/* Body */}
                  <div style={{padding:'18px 20px 20px',flex:1,display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'4px'}}>
                      <span style={{fontSize:'10px',fontWeight:700,color:p.accent,letterSpacing:'1px',textTransform:'uppercase'}}>{p.type}</span>
                      <span style={{width:'3px',height:'3px',borderRadius:'50%',background:'#e2e8f0'}}/>
                      <span style={{fontSize:'10px',fontWeight:600,color:'#94a3b8'}}>{p.tag}</span>
                    </div>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#0a0e1a',marginBottom:'8px',lineHeight:1.2}}>{p.name}</h3>
                    <p style={{fontSize:'13px',color:'#475569',lineHeight:1.65,marginBottom:'14px',flex:1}}>{p.desc}</p>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'14px',borderTop:'1px solid #f1f5f9',gap:'10px',flexWrap:'wrap'}}>
                      <span style={{fontSize:'13px',fontWeight:700,color:'#0a0e1a'}}>{p.price}</span>
                      <Link href={L(p.slug)} style={{background:p.accent,color:'#fff',padding:'9px 18px',borderRadius:'100px',fontSize:'12px',fontWeight:700,textDecoration:'none',whiteSpace:'nowrap',transition:'.2s'}}>
                        {p.cta} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner CTA */}
            <div className="rv" style={{marginTop:'24px',background:'#0a0e1a',borderRadius:'16px',padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p style={{fontSize:'14px',fontWeight:700,color:'#fff',marginBottom:'3px'}}>Own a hotel, restaurant or experience in Fortaleza?</p>
                <p style={{fontSize:'12px',color:'rgba(255,255,255,.4)'}}>Reach 500,000+ engaged travellers every year. Spots are limited.</p>
              </div>
              <Link href={L('/advertise')} style={{background:'#ff6b47',color:'#fff',padding:'11px 22px',borderRadius:'100px',fontSize:'13px',fontWeight:700,textDecoration:'none',whiteSpace:'nowrap',boxShadow:'0 4px 16px rgba(255,107,71,.3)'}}>
                Get your spot →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BEACHES REEL
        ══════════════════════════════════════════ */}
        <section style={{background:'linear-gradient(180deg,#f0f9ff 0%,#e8f4ff 100%)',padding:'64px 0 0'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto',padding:'0 clamp(16px,3vw,40px) 36px'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'28px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>☀️ Sun & Sand</p>
                <h2 className="sh2">Best <em>Beaches</em></h2>
                <p style={{fontSize:'14px',color:'#64748b',marginTop:'6px'}}>340km of coastline. Pick your perfect spot.</p>
              </div>
              <Link href={L('/beaches')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #bae6fd',borderRadius:'100px',background:'#fff',textDecoration:'none'}}>All beaches →</Link>
            </div>
          </div>
          {/* Full-bleed reel */}
          <div className="ns" style={{display:'flex',gap:'14px',overflowX:'auto',scrollSnapType:'x mandatory',paddingLeft:'clamp(16px,3vw,40px)',paddingBottom:'32px'}}>
            {[
              {rank:1,name:'Iracema Beach',hasImg:true,alt:'Iracema Beach Fortaleza — turquoise water and city skyline at golden hour',rating:4.9,dist:'2km · Urban beach',tags:['Sunset','Nightlife','Restaurants'],slug:'iracema-beach',g:'linear-gradient(135deg,#0099cc,#33bbdd)'},
              {rank:2,name:'Meireles',hasImg:false,icon:'🌊',alt:'Meireles Beach hotel strip Beira Mar Fortaleza',rating:4.9,dist:'5km · Hotel strip',tags:['Hotels','Promenade','Swimming'],slug:'meireles',g:'linear-gradient(135deg,#0077aa,#00bbcc)'},
              {rank:3,name:'Cumbuco',hasImg:false,icon:'🪂',alt:'Cumbuco kitesurfing world class beach Ceará',rating:4.8,dist:'30km · Kite world capital',tags:['Kitesurfing','Dunes','Lagoons'],slug:'cumbuco',g:'linear-gradient(135deg,#0369a1,#0ea5e9)'},
              {rank:4,name:'Canoa Quebrada',hasImg:false,icon:'🌅',alt:'Canoa Quebrada red cliffs beach Ceará',rating:4.9,dist:'160km · Red cliffs',tags:['Cliffs','Buggy','Village vibe'],slug:'canoa-quebrada',g:'linear-gradient(135deg,#b45309,#d97706)'},
              {rank:5,name:'Praia do Futuro',hasImg:false,icon:'🍤',alt:'Praia do Futuro barracas fresh seafood Fortaleza',rating:4.7,dist:'8km · Barracas heaven',tags:['Seafood','Swimming','Local'],slug:'praia-do-futuro',g:'linear-gradient(135deg,#059669,#10b981)'},
              {rank:6,name:'Jericoacoara',hasImg:false,icon:'🌊',alt:'Jericoacoara dunes lagoons UNESCO Ceará',rating:5.0,dist:'300km · Unmissable',tags:['UNESCO','Lagoons','Kite'],slug:'jericoacoara',g:'linear-gradient(135deg,#7c3aed,#a78bfa)'},
              {rank:7,name:'Porto das Dunas',hasImg:false,icon:'🎡',alt:'Porto das Dunas family beach water park',rating:4.6,dist:'25km · Family fun',tags:['Family','Water park','Dunes'],slug:'porto-das-dunas',g:'linear-gradient(135deg,#dc2626,#f87171)'},
            ].map(b=>(
              <Link key={b.slug} href={L(`/beaches/${b.slug}`)} className="bc-h" style={{flexShrink:0,width:'clamp(220px,22vw,268px)',borderRadius:'20px',overflow:'hidden',scrollSnapAlign:'start',textDecoration:'none',display:'block',boxShadow:'0 6px 28px rgba(0,0,0,.1)'}}>
                <div style={{position:'relative',height:'360px',background:b.g,overflow:'hidden'}}>
                  {b.hasImg
                    ? <Image src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp" alt={b.alt} fill sizes="268px" style={{objectFit:'cover'}} className="bi"/>
                    : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:'80px',opacity:.22}}>{b.icon}</span></div>
                  }
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,.9) 0%,transparent 55%)'}}/>
                  <div style={{position:'absolute',top:'14px',left:'14px',width:'30px',height:'30px',background:'rgba(0,0,0,.3)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'11px',fontWeight:800,color:'#fff'}}>
                    {b.rank}
                  </div>
                  <div style={{position:'absolute',top:'14px',right:'14px',background:'rgba(0,0,0,.3)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.15)',borderRadius:'100px',padding:'4px 10px',fontSize:'11px',fontWeight:700,color:'#fff'}}>
                    ⭐ {b.rating}
                  </div>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'18px 20px 20px'}}>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#fff',marginBottom:'3px',lineHeight:1.2}}>{b.name}</h3>
                    <p style={{fontSize:'11px',color:'rgba(255,255,255,.5)',marginBottom:'10px'}}>📍 {b.dist}</p>
                    <div style={{display:'flex',gap:'5px',flexWrap:'wrap'}}>
                      {b.tags.map(tag=><span key={tag} style={{fontSize:'9.5px',fontWeight:600,padding:'3px 8px',borderRadius:'100px',background:'rgba(255,255,255,.12)',color:'rgba(255,255,255,.75)',border:'1px solid rgba(255,255,255,.1)'}}>{tag}</span>)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div style={{flexShrink:0,width:'clamp(16px,3vw,40px)'}}/>
          </div>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{display:'block',width:'100%',lineHeight:0}}>
            <path d="M0,32 C480,60 960,4 1440,32 L1440,48 L0,48 Z" fill="white"/>
          </svg>
        </section>

        {/* ══════════════════════════════════════════
            EVENTS — SAMBA, SHOWS, PARTIES, CONCERTS
        ══════════════════════════════════════════ */}
        <section style={{background:'#fff',padding:'64px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr',gap:'48px'}}>
              <style suppressHydrationWarning>{`@media(min-width:1024px){.ev-wrap{grid-template-columns:1fr 320px!important;}}`}</style>
              <div className="ev-wrap" style={{display:'grid',gridTemplateColumns:'1fr',gap:'48px'}}>
                <div>
                  <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'28px',flexWrap:'wrap',gap:'16px'}}>
                    <div>
                      <p className="sey" style={{marginBottom:'8px'}}>🎭 What's On</p>
                      <h2 className="sh2">Fortaleza This <em>Week</em></h2>
                      <p style={{fontSize:'14px',color:'#64748b',marginTop:'6px'}}>Samba, forró, concerts, shows and parties — never a dull night.</p>
                    </div>
                    <Link href={L('/events')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #e0f7ff',borderRadius:'100px',background:'#f0fbff',textDecoration:'none'}}>Full calendar →</Link>
                  </div>
                  <div className="rv" style={{display:'flex',flexDirection:'column',gap:'4px'}}>
                    {[
                      {day:'24',mon:'MAR',emoji:'💃',title:'Samba Night at Mercado dos Pinhões',venue:'Mercado dos Pinhões · Centro',time:'21:00',price:'R$20',tag:'Samba',accent:'#dc2626',bg:'#fef2f2',hot:true,slug:'samba-night'},
                      {day:'25',mon:'MAR',emoji:'🎵',title:'Grand Forró Festival — Dragão do Mar',venue:'Dragão do Mar · Iracema',time:'20:00',price:'Free entry',tag:'Forró',accent:'#0099cc',bg:'#e0f7ff',hot:true,slug:'grand-forro'},
                      {day:'27',mon:'MAR',emoji:'🎸',title:'Indie Rock Night — Café Estação das Artes',venue:'Aldeota',time:'22:00',price:'R$35',tag:'Concert',accent:'#7c3aed',bg:'#f5f3ff',slug:'indie-rock-night'},
                      {day:'28',mon:'MAR',emoji:'🦀',title:'Cearense Food & Wine Festival',venue:'Mercado Central · Centro',time:'11:00',price:'R$25–80',tag:'Food & Drink',accent:'#d97706',bg:'#fffbeb',slug:'food-festival'},
                      {day:'29',mon:'MAR',emoji:'🌅',title:'Sunset DJ at Mucuripe',venue:'Porto do Mucuripe · Iracema',time:'17:00',price:'Free',tag:'Open Air',accent:'#ff6b47',bg:'#fff7f5',slug:'sunset-dj'},
                      {day:'30',mon:'MAR',emoji:'🪁',title:'Kitesurf Championship Cumbuco',venue:'Cumbuco Beach',time:'08:00',price:'Free to watch',tag:'Sport',accent:'#059669',bg:'#ecfdf5',slug:'kite-championship'},
                    ].map(ev=>(
                      <div key={ev.slug} className="ev" style={{display:'grid',gridTemplateColumns:'70px 1fr auto',gap:'14px',alignItems:'center',padding:'14px 16px',borderRadius:'14px',cursor:'pointer',border:'1.5px solid transparent',background:'transparent'}}>
                        <div style={{textAlign:'center',background:'#f8fafc',border:'1px solid #edf2f7',borderRadius:'12px',padding:'10px 6px'}}>
                          <p style={{fontFamily:"'Fraunces',serif",fontSize:'24px',fontWeight:700,color:'#0a0e1a',lineHeight:1}}>{ev.day}</p>
                          <p style={{fontSize:'9px',fontWeight:800,letterSpacing:'2px',textTransform:'uppercase',color:'#94a3b8',marginTop:'2px'}}>{ev.mon}</p>
                        </div>
                        <div>
                          <div style={{display:'flex',alignItems:'center',gap:'7px',marginBottom:'3px'}}>
                            <span style={{fontSize:'15px'}}>{ev.emoji}</span>
                            <h3 style={{fontSize:'14.5px',fontWeight:700,color:'#0a0e1a',lineHeight:1.3}}>{ev.title}</h3>
                            {ev.hot && <span style={{background:'#ff6b47',color:'#fff',fontSize:'8px',fontWeight:800,padding:'2px 7px',borderRadius:'100px',letterSpacing:'.5px',flexShrink:0}}>HOT</span>}
                          </div>
                          <p style={{fontSize:'11.5px',color:'#64748b',display:'flex',gap:'10px',flexWrap:'wrap'}}>
                            <span>📍 {ev.venue}</span><span>⏰ {ev.time}</span>
                          </p>
                          <div style={{marginTop:'5px',display:'flex',gap:'6px',alignItems:'center'}}>
                            <span style={{display:'inline-block',fontSize:'9.5px',fontWeight:700,letterSpacing:'.5px',textTransform:'uppercase',padding:'3px 9px',borderRadius:'100px',background:ev.bg,color:ev.accent}}>{ev.tag}</span>
                            <span style={{fontSize:'11px',fontWeight:700,color:ev.accent}}>{ev.price}</span>
                          </div>
                        </div>
                        <Link href={L(`/events/${ev.slug}`)} style={{fontSize:'12px',fontWeight:700,padding:'9px 16px',borderRadius:'100px',background:'#0a0e1a',color:'#fff',whiteSpace:'nowrap',textDecoration:'none',flexShrink:0}}>
                          Info →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <aside style={{display:'flex',flexDirection:'column',gap:'18px'}}>
                  {/* Weather */}
                  <div style={{background:'#fff',border:'1px solid #edf2f7',borderRadius:'20px',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,.06)'}}>
                    <div style={{background:'linear-gradient(135deg,#0099cc,#38bdf8)',padding:'16px 20px'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'2px'}}>
                        <span style={{fontSize:'22px'}}>☀️</span>
                        <div>
                          <p style={{fontSize:'12px',fontWeight:700,color:'rgba(255,255,255,.9)'}}>Fortaleza Today</p>
                          <p style={{fontSize:'10px',color:'rgba(255,255,255,.6)'}}>Perfect beach day ✓</p>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'18px'}}>
                      <div style={{display:'flex',alignItems:'baseline',gap:'8px',marginBottom:'12px'}}>
                        <p style={{fontFamily:"'Fraunces',serif",fontSize:'52px',fontWeight:700,color:'#0a0e1a',lineHeight:1}}>29°</p>
                        <div>
                          <p style={{fontSize:'14px',fontWeight:700,color:'#0a0e1a'}}>Partly Cloudy</p>
                          <p style={{fontSize:'11px',color:'#64748b',marginTop:'2px'}}>Humidity 78% · Wind 18km/h</p>
                          <p style={{fontSize:'11px',color:'#64748b'}}>Sea temp: 27°C · UV: 8</p>
                        </div>
                      </div>
                      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'5px'}}>
                        {[['MON','☀️','31°'],['TUE','⛅','29°'],['WED','🌧','27°'],['THU','☀️','30°'],['FRI','☀️','32°']].map(([d,i,t])=>(
                          <div key={d} style={{background:'#f0f9ff',borderRadius:'10px',padding:'9px 3px',textAlign:'center',border:'1px solid #e0f7ff'}}>
                            <p style={{fontSize:'8.5px',fontWeight:700,letterSpacing:'1px',textTransform:'uppercase',color:'#94a3b8',marginBottom:'4px'}}>{d}</p>
                            <p style={{fontSize:'17px',marginBottom:'3px'}}>{i}</p>
                            <p style={{fontSize:'13px',fontWeight:700,color:'#0a0e1a'}}>{t}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <AdZone size="rectangle" slot="sidebar" />
                  {/* Quick links */}
                  <div style={{background:'#0a0e1a',borderRadius:'18px',padding:'20px',overflow:'hidden',position:'relative'}}>
                    <div style={{position:'absolute',top:'-20px',right:'-20px',width:'90px',height:'90px',borderRadius:'50%',background:'rgba(0,153,204,.08)'}}/>
                    <p style={{fontSize:'11px',fontWeight:800,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,.35)',marginBottom:'10px'}}>Plan your night</p>
                    <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                      {[['🎵','Best forró spots →','/nightlife?type=forro'],['🍹','Top botecos →','/nightlife?type=bar'],['🌆','Rooftop bars →','/nightlife?type=rooftop'],['🎭','Live music →','/nightlife?type=live']].map(([icon,label,href])=>(
                        <Link key={String(href)} href={L(String(href))} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',background:'rgba(255,255,255,.05)',borderRadius:'10px',border:'1px solid rgba(255,255,255,.06)',fontSize:'13px',fontWeight:600,color:'rgba(255,255,255,.7)',textDecoration:'none',transition:'.2s'}}>
                          <span style={{fontSize:'16px'}}>{icon}</span>{label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOTELS
        ══════════════════════════════════════════ */}
        <section style={{background:'#f8fafc',padding:'64px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'28px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>🏨 Where to Stay</p>
                <h2 className="sh2">Top <em>Hotels</em></h2>
              </div>
              <Link href={L('/hotels')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #e0f7ff',borderRadius:'100px',background:'#fff',textDecoration:'none'}}>All hotels →</Link>
            </div>
            <div className="rv ns" style={{display:'flex',gap:'16px',overflowX:'auto',paddingBottom:'8px'}}>
              {[
                {name:'Gran Marquise Hotel',cat:'5-Star Beachfront',price:'R$480',per:'/night',rating:4.9,reviews:'2,103',tags:['Beachfront','Infinity pool','Spa'],g:'linear-gradient(135deg,#6366f1,#8b5cf6)',icon:'🏨',slug:'gran-marquise-hotel'},
                {name:'Othon Palace',cat:'Classic Ocean Views',price:'R$320',per:'/night',rating:4.7,reviews:'1,567',tags:['Sea view','Beach access'],g:'linear-gradient(135deg,#ec4899,#f43f5e)',icon:'🌊',slug:'othon-palace'},
                {name:'Casa Iracema',cat:'Design Boutique',price:'R$220',per:'/night',rating:4.8,reviews:'412',tags:['Rooftop bar','New','Design'],g:'linear-gradient(135deg,#0ea5e9,#38bdf8)',icon:'✨',slug:'casa-iracema-boutique'},
                {name:'Hostel Iracema',cat:'Best Budget Pick',price:'R$85',per:'/night',rating:4.5,reviews:'289',tags:['50m beach','Bar','Tours'],g:'linear-gradient(135deg,#10b981,#34d399)',icon:'🎒',slug:'hostel-iracema-beach'},
                {name:'Pousada Cumbuco',cat:'Kite Surfer\'s Base',price:'R$160',per:'/night',rating:4.6,reviews:'203',tags:['Beachfront','Kite storage','Cumbuco'],g:'linear-gradient(135deg,#f59e0b,#fbbf24)',icon:'🏄',slug:'pousada-cumbuco'},
              ].map(h=>(
                <Link key={h.slug} href={L(`/hotels/${h.slug}`)} className="card-h" style={{flexShrink:0,width:'clamp(240px,24vw,290px)',borderRadius:'20px',overflow:'hidden',background:'#fff',border:'1px solid #edf2f7',textDecoration:'none',display:'flex',flexDirection:'column',boxShadow:'0 2px 16px rgba(0,0,0,.06)'}}>
                  <div style={{height:'160px',background:h.g,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0,overflow:'hidden'}}>
                    <div className="ci" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
                      <span style={{fontSize:'64px',opacity:.2}}>{h.icon}</span>
                    </div>
                    <div style={{position:'absolute',bottom:'12px',left:'12px',background:'rgba(255,255,255,.15)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,.2)',borderRadius:'100px',padding:'4px 10px',fontSize:'11px',fontWeight:700,color:'#fff',display:'flex',alignItems:'center',gap:'4px'}}>
                      <span style={{color:'#fbbf24'}}>★</span> {h.rating} <span style={{color:'rgba(255,255,255,.5)',fontSize:'10px'}}>({h.reviews})</span>
                    </div>
                  </div>
                  <div style={{padding:'16px 18px 18px',flex:1,display:'flex',flexDirection:'column'}}>
                    <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:'#94a3b8',marginBottom:'3px'}}>{h.cat}</p>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'17px',fontWeight:700,color:'#0a0e1a',marginBottom:'8px',lineHeight:1.2}}>{h.name}</h3>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginBottom:'12px',flex:1}}>
                      {h.tags.map(tag=><span key={tag} style={{fontSize:'10px',fontWeight:600,padding:'3px 8px',borderRadius:'100px',background:'#f1f5f9',color:'#475569'}}>{tag}</span>)}
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingTop:'12px',borderTop:'1px solid #f1f5f9'}}>
                      <span style={{fontFamily:"'Fraunces',serif",fontSize:'18px',fontWeight:700,color:'#0099cc'}}>{h.price}<span style={{fontSize:'11px',fontWeight:400,color:'#94a3b8'}}>{h.per}</span></span>
                      <span style={{fontSize:'12px',fontWeight:700,color:'#0099cc'}}>View →</span>
                    </div>
                  </div>
                </Link>
              ))}
              <div style={{flexShrink:0,width:'clamp(16px,3vw,40px)'}}/>
            </div>
          </div>
        </section>

        {/* AD BILLBOARD */}
        <div style={{background:'#fff',padding:'0 clamp(16px,3vw,40px) 48px'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}><AdZone size="billboard" slot="billboard" /></div>
        </div>

        {/* ══════════════════════════════════════════
            NIGHTLIFE — DARK
        ══════════════════════════════════════════ */}
        <section style={{background:'#050a14',padding:'72px clamp(16px,3vw,40px)',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'-80px',left:'15%',width:'400px',height:'400px',borderRadius:'50%',background:'rgba(0,153,204,.05)',filter:'blur(80px)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:'-60px',right:'10%',width:'320px',height:'320px',borderRadius:'50%',background:'rgba(255,107,71,.04)',filter:'blur(80px)',pointerEvents:'none'}}/>
          <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:1}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'40px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p style={{fontSize:'11px',fontWeight:800,letterSpacing:'3px',textTransform:'uppercase',color:'#ffb930',marginBottom:'10px'}}>🌙 After Dark</p>
                <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(30px,4.2vw,54px)',fontWeight:700,letterSpacing:'-2px',color:'#fff'}}>
                  Fortaleza <em style={{fontStyle:'italic',color:'#ffb930'}}>After Midnight</em>
                </h2>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.3)',marginTop:'8px',maxWidth:'380px'}}>The city that never sleeps. From forró to rooftop cocktails to all-night parties.</p>
              </div>
              <Link href={L('/nightlife')} style={{fontSize:'13px',fontWeight:700,color:'#ffb930',padding:'10px 20px',border:'1.5px solid rgba(255,183,48,.2)',borderRadius:'100px',background:'rgba(255,183,48,.06)',textDecoration:'none',whiteSpace:'nowrap'}}>Full nightlife map →</Link>
            </div>
            <div className="rv" style={{display:'grid',gap:'14px',gridTemplateColumns:'1fr'}}>
              <style suppressHydrationWarning>{`@media(min-width:768px){.ng{grid-template-columns:1.4fr 1fr 1fr!important;grid-template-rows:auto auto!important;height:520px!important;}.nb{grid-row:1/3!important;}}`}</style>
              <div className="ng" style={{display:'grid',gap:'14px',gridTemplateColumns:'1fr'}}>
                {[
                  {genre:'Forró · Live Bands · Every Night',name:'Forró & Alma',desc:"Fortaleza's most authentic forró hall. Live 8-piece band nightly. From grandmothers to backpackers — everyone dances.",tags:['Wed–Sun','From R$15','Live band'],info:'Iracema · Opens 20:00',icon:'🎵',big:true,accent:'#ffb930'},
                  {genre:'Rooftop · Sunset Cocktails',name:'Alto Meireles',desc:'',tags:['Daily from 17:00','Atlantic views'],info:'Meireles',icon:'🌆',big:false,accent:'#0099cc'},
                  {genre:'Electronic · House · Techno',name:'Órbita Club',desc:'',tags:['Thu–Sat','18+','From 23:00'],info:'Centro',icon:'🎉',big:false,accent:'#ec4899'},
                ].map((v,i)=>(
                  <div key={i} className={`nc ${v.big?'nb':''}`} style={{borderRadius:'18px',overflow:'hidden',position:'relative',cursor:'pointer',minHeight:v.big?'260px':'180px',background:v.big?'rgba(255,183,48,.04)':'rgba(255,255,255,.02)',border:`1px solid ${v.big?'rgba(255,183,48,.1)':'rgba(255,255,255,.04)'}`,display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                    <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <span style={{fontSize:'90px',opacity:.05}}>{v.icon}</span>
                    </div>
                    <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:`linear-gradient(to right,${v.accent},transparent)`}}/>
                    <div style={{position:'relative',zIndex:1,padding:'22px 24px 24px'}}>
                      <p style={{fontSize:'9.5px',fontWeight:800,letterSpacing:'2.5px',textTransform:'uppercase',color:v.accent,marginBottom:'8px'}}>{v.genre}</p>
                      <h3 style={{fontFamily:"'Fraunces',serif",fontSize:v.big?'clamp(20px,2.5vw,28px)':'18px',fontWeight:700,color:'#fff',lineHeight:1.15,marginBottom:'8px'}}>{v.name}</h3>
                      {v.desc && <p style={{fontSize:'13px',color:'rgba(255,255,255,.35)',lineHeight:1.65,marginBottom:'14px',maxWidth:'340px'}}>{v.desc}</p>}
                      <div style={{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'8px'}}>
                        {v.tags.map(tag=><span key={tag} style={{fontSize:'10px',fontWeight:600,padding:'4px 10px',borderRadius:'100px',background:'rgba(255,255,255,.05)',color:'rgba(255,255,255,.45)',border:'1px solid rgba(255,255,255,.05)'}}>{tag}</span>)}
                      </div>
                      <p style={{fontSize:'11px',color:'rgba(255,255,255,.2)',fontWeight:500}}>📍 {v.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOD — CLEAN CARDS
        ══════════════════════════════════════════ */}
        <section style={{background:'#fff',padding:'72px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'28px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>🍽️ Eat & Drink</p>
                <h2 className="sh2">Where to <em>Eat</em></h2>
                <p style={{fontSize:'14px',color:'#64748b',marginTop:'6px',maxWidth:'440px'}}>Fresh caranguejo, lagosta, tapioca and the coldest drinks in Ceará.</p>
              </div>
              <Link href={L('/restaurants')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #e0f7ff',borderRadius:'100px',background:'#f0fbff',textDecoration:'none'}}>All restaurants →</Link>
            </div>
            <div className="rv" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'18px'}}>
              {[
                {name:'La Mer',cat:'Award-Winning Seafood',desc:'Best lobster in Fortaleza. Atlantic views from every table. Book 3 days ahead.',tags:['Ocean view','Award 2026','Lobster'],rating:4.9,reviews:'1,247',price:'R$80–180',icon:'🦞',accent:'#0099cc',slug:'la-mer'},
                {name:'Coco Bambu Meireles',cat:'Iconic Cearense',desc:'The giant seafood platters that started a revolution. A Fortaleza legend since 1993.',tags:['Giant platters','Family','Legend'],rating:4.8,reviews:'3,891',price:'R$38–75',icon:'🍲',accent:'#f59e0b',slug:'coco-bambu'},
                {name:'Barraca do Zé',cat:'Beach Barraca · Futuro',desc:'Cold beer, fresh caranguejo, sand between your toes. This is what Fortaleza tastes like.',tags:['Local favourite','Beach','Caranguejo'],rating:4.7,reviews:'2,104',price:'R$15–55',icon:'🏖️',accent:'#10b981',slug:'barraca-do-ze'},
                {name:'Tapioca da Esquina',cat:'Street Food · Centro',desc:'The best tapioca in the city. Three generations of the same family, same recipe.',tags:['Legendary','R$8 tapioca','Local'],rating:4.8,reviews:'891',price:'R$8–22',icon:'🥞',accent:'#f43f5e',slug:'tapioca-da-esquina'},
              ].map(r=>(
                <Link key={r.slug} href={L(`/restaurants/${r.slug}`)} className="card-h" style={{borderRadius:'18px',overflow:'hidden',background:'#fff',border:'1px solid #edf2f7',textDecoration:'none',display:'flex',flexDirection:'column',boxShadow:'0 2px 14px rgba(0,0,0,.06)'}}>
                  <div style={{height:'150px',background:`linear-gradient(135deg,${r.accent}18,${r.accent}08)`,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',flexShrink:0}}>
                    <div className="ci" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
                      <span style={{fontSize:'64px',opacity:.3}}>{r.icon}</span>
                    </div>
                    <div style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:r.accent}}/>
                  </div>
                  <div style={{padding:'16px 18px 18px',flex:1,display:'flex',flexDirection:'column'}}>
                    <p style={{fontSize:'10px',fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase',color:r.accent,marginBottom:'3px'}}>{r.cat}</p>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'17px',fontWeight:700,color:'#0a0e1a',marginBottom:'6px',lineHeight:1.2}}>{r.name}</h3>
                    <p style={{fontSize:'12.5px',color:'#64748b',lineHeight:1.6,marginBottom:'10px',flex:1}}>{r.desc}</p>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginBottom:'12px'}}>
                      {r.tags.map(tag=><span key={tag} style={{fontSize:'10px',fontWeight:600,padding:'3px 8px',borderRadius:'100px',background:'#f1f5f9',color:'#475569'}}>{tag}</span>)}
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'12px',borderTop:'1px solid #f1f5f9'}}>
                      <div style={{display:'flex',alignItems:'center',gap:'4px'}}>
                        <span style={{color:'#f59e0b',fontSize:'12px'}}>★★★★★</span>
                        <span style={{fontSize:'12px',fontWeight:700,color:'#0a0e1a'}}>{r.rating}</span>
                        <span style={{fontSize:'11px',color:'#94a3b8'}}>({r.reviews})</span>
                      </div>
                      <span style={{fontFamily:"'Fraunces',serif",fontSize:'15px',fontWeight:700,color:r.accent}}>{r.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MAP PROMO — DARK
        ══════════════════════════════════════════ */}
        <section style={{background:'#050a14',padding:'72px clamp(16px,3vw,40px)',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',top:'40%',left:'40%',transform:'translate(-50%,-50%)',width:'500px',height:'500px',borderRadius:'50%',background:'rgba(0,153,204,.04)',filter:'blur(80px)',pointerEvents:'none'}}/>
          <div style={{maxWidth:'1380px',margin:'0 auto',position:'relative',zIndex:1}}>
            <div style={{display:'grid',gap:'56px',gridTemplateColumns:'1fr',alignItems:'center'}}>
              <style suppressHydrationWarning>{`@media(min-width:768px){.ml{grid-template-columns:1fr 1.1fr!important;}}`}</style>
              <div className="ml" style={{display:'grid',gap:'56px',gridTemplateColumns:'1fr',alignItems:'center'}}>
                <div className="rv-l">
                  <p style={{fontSize:'11px',fontWeight:800,letterSpacing:'3px',textTransform:'uppercase',color:'#0099cc',marginBottom:'12px'}}>🗺️ Explorer Map</p>
                  <h2 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(30px,4.2vw,54px)',fontWeight:700,letterSpacing:'-2px',lineHeight:1.07,color:'#fff',marginBottom:'14px'}}>
                    Find Everything<br/><span style={{color:'#ffb930'}}>On The Map</span>
                  </h2>
                  <p style={{fontSize:'15px',color:'rgba(255,255,255,.4)',lineHeight:1.8,marginBottom:'32px',maxWidth:'400px'}}>
                    2,400+ spots in Fortaleza — beaches, botecos, barracas, hotels and hidden gems. All on one interactive map.
                  </p>
                  <div style={{display:'flex',gap:'12px',flexWrap:'wrap',marginBottom:'40px'}}>
                    <button style={{background:'#0099cc',color:'#fff',border:'none',padding:'14px 28px',borderRadius:'12px',fontFamily:'inherit',fontSize:'14px',fontWeight:700,cursor:'pointer',boxShadow:'0 4px 20px rgba(0,153,204,.3)'}}>Open Map 🗺️</button>
                    <button style={{background:'transparent',color:'rgba(255,255,255,.5)',border:'1px solid rgba(255,255,255,.1)',padding:'14px 24px',borderRadius:'12px',fontFamily:'inherit',fontSize:'14px',fontWeight:600,cursor:'pointer'}}>📱 Download App</button>
                  </div>
                  <div style={{display:'flex',gap:'28px',paddingTop:'32px',borderTop:'1px solid rgba(255,255,255,.05)',flexWrap:'wrap'}}>
                    {[['2,400+','Spots mapped'],['340km','Coastline'],['7','Languages'],['500k','Readers/yr']].map(([n,l])=>(
                      <div key={l}>
                        <p style={{fontFamily:"'Fraunces',serif",fontSize:'22px',fontWeight:700,color:'#fff',lineHeight:1}}>{n}</p>
                        <p style={{fontSize:'10px',color:'rgba(255,255,255,.3)',fontWeight:500,marginTop:'3px',letterSpacing:'.5px'}}>{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rv-r" style={{position:'relative',borderRadius:'22px',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.5)'}}>
                  <Image src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp" alt="Map of Fortaleza showing beaches, hotels and restaurants — Iracema, Meireles, Cumbuco" width={600} height={360} style={{width:'100%',height:'360px',objectFit:'cover',display:'block'}}/>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(0,153,204,.15),rgba(0,0,0,.1))'}}/>
                  <div style={{position:'absolute',top:'18px',left:'18px',background:'rgba(255,255,255,.95)',backdropFilter:'blur(12px)',borderRadius:'12px',padding:'11px 16px'}}>
                    <p style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#0099cc'}}>2,400+</p>
                    <p style={{fontSize:'10px',color:'#64748b',fontWeight:500,marginTop:'1px'}}>Verified spots</p>
                  </div>
                  {[{t:'28%',l:'36%',label:'Iracema'},{t:'50%',l:'58%',label:'Meireles'},{t:'68%',l:'28%',label:'Aldeota'}].map(pin=>(
                    <div key={pin.label} style={{position:'absolute',top:pin.t,left:pin.l}}>
                      <div style={{width:'11px',height:'11px',borderRadius:'50%',background:'#0099cc',border:'2px solid #fff',boxShadow:'0 2px 8px rgba(0,0,0,.3)',animation:'mpng 2.5s infinite'}}/>
                      <div style={{position:'absolute',bottom:'calc(100% + 5px)',left:'50%',transform:'translateX(-50%)',background:'rgba(5,10,20,.88)',backdropFilter:'blur(8px)',color:'#fff',fontSize:'9.5px',fontWeight:700,padding:'4px 9px',borderRadius:'6px',whiteSpace:'nowrap',border:'1px solid rgba(255,255,255,.07)'}}>{pin.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY FORTALEZA — SEO CONTENT SECTION
        ══════════════════════════════════════════ */}
        <section style={{background:'#fff',padding:'72px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{textAlign:'center',marginBottom:'56px'}}>
              <p className="sey" style={{marginBottom:'10px'}}>🌟 Why Fortaleza</p>
              <h2 className="sh2" style={{marginBottom:'12px'}}>The City That <em>Has Everything</em></h2>
              <p style={{fontSize:'16px',color:'#64748b',maxWidth:'540px',margin:'0 auto',lineHeight:1.75}}>From world-class kitesurfing to the best seafood in Brazil — Fortaleza is the destination you haven't been to yet but absolutely should.</p>
            </div>
            <div className="rv" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',marginBottom:'48px'}}>
              {[
                {icon:'🌊',title:'340km of Beaches',desc:'From the iconic Meireles hotel strip to the wild dunes of Cumbuco — every type of beach for every type of traveller.',color:'#0099cc'},
                {icon:'🎵',title:'Forró Capital of the World',desc:'Fortaleza is the birthplace of forró. Live bands every night, from tiny hidden halls to massive festivals that take over the city.',color:'#ff6b47'},
                {icon:'🪂',title:'#1 Kitesurf Destination',desc:'Cumbuco, just 30km away, is ranked among the world\'s top 3 kitesurf spots. Consistent trade winds 280 days a year.',color:'#7c3aed'},
                {icon:'🦀',title:'Best Seafood in Brazil',desc:'Fresh caranguejo, lagosta, peixe na telha — the Cearense coastal cuisine is unique, unmissable and dangerously addictive.',color:'#059669'},
                {icon:'☀️',title:'340 Sunny Days a Year',desc:'Fortaleza has one of the most consistent climates in Brazil. Warm, sunny and breezy — basically perfect beach weather every day.',color:'#d97706'},
                {icon:'💰',title:'Incredible Value',desc:'World-class experiences at a fraction of the price of Rio or São Paulo. Your money goes much further here than anywhere else in Brazil.',color:'#dc2626'},
              ].map(w=>(
                <div key={w.title} className="card-h" style={{borderRadius:'16px',padding:'24px',background:'#f8fafc',border:'1px solid #edf2f7',boxShadow:'0 2px 12px rgba(0,0,0,.04)'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'13px',background:`${w.color}14`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',marginBottom:'14px',border:`1px solid ${w.color}22`}}>
                    {w.icon}
                  </div>
                  <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'17px',fontWeight:700,color:'#0a0e1a',marginBottom:'7px'}}>{w.title}</h3>
                  <p style={{fontSize:'13px',color:'#64748b',lineHeight:1.7}}>{w.desc}</p>
                </div>
              ))}
            </div>

            {/* SEO text block */}
            <div className="rv" style={{background:'#f0f9ff',borderRadius:'20px',padding:'36px 40px',border:'1px solid #bae6fd'}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'32px'}}>
                <div>
                  <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#0a0e1a',marginBottom:'12px'}}>When is the best time to visit Fortaleza?</h3>
                  <p style={{fontSize:'13.5px',color:'#475569',lineHeight:1.8}}>
                    Fortaleza has a tropical climate with two main seasons. <strong>July to December</strong> is the dry season — perfect for kitesurfing, beach days and outdoor activities. Trade winds blow consistently, skies are blue and temperatures sit at a comfortable 28–32°C. <strong>February to June</strong> is the green season — occasional rain but lush landscapes, fewer tourists and lower prices.
                  </p>
                </div>
                <div>
                  <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'20px',fontWeight:700,color:'#0a0e1a',marginBottom:'12px'}}>How to get around Fortaleza</h3>
                  <p style={{fontSize:'13.5px',color:'#475569',lineHeight:1.8}}>
                    Uber is reliable and cheap throughout Fortaleza — the best way to get around safely. The <strong>Metrofor metro</strong> connects the centre with Pacajus. For day trips to Cumbuco or Canoa Quebrada, shared vans and rental buggies are the way to go. The city centre and Iracema Beach are both walkable areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <div style={{background:'linear-gradient(135deg,#ff6b47,#ffb930,#2ecc8a)',padding:'44px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'24px'}}>
              <style suppressHydrationWarning>{`@media(min-width:640px){.tg{grid-template-columns:repeat(4,1fr)!important;}}`}</style>
              <div className="tg rv" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'24px',gridColumn:'1/-1'}}>
                {[['500,000+','Readers per year','👥'],['2,400+','Verified spots','📍'],['7','Languages','🌍'],['340','Sunny days/year','☀️']].map(([n,l,icon])=>(
                  <div key={l} style={{textAlign:'center'}}>
                    <p style={{fontSize:'22px',marginBottom:'4px'}}>{icon}</p>
                    <p style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(22px,4vw,38px)',fontWeight:700,color:'#fff',lineHeight:1,marginBottom:'3px'}}>{n}</p>
                    <p style={{fontSize:'11.5px',fontWeight:600,color:'rgba(255,255,255,.75)',letterSpacing:'.3px'}}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AD INLINE */}
        <div style={{padding:'40px clamp(16px,3vw,40px)',background:'#fff'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}><AdZone size="inline" slot="inline-mid"/></div>
        </div>

        {/* ══════════════════════════════════════════
            FAQ — SEO GOLD
        ══════════════════════════════════════════ */}
        <section style={{background:'#f8fafc',padding:'72px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'760px',margin:'0 auto'}}>
            <div className="rv" style={{textAlign:'center',marginBottom:'44px'}}>
              <p className="sey" style={{marginBottom:'10px'}}>❓ FAQ</p>
              <h2 className="sh2">{ts('faqTitle')} <em>{ts('faqEm')}</em></h2>
            </div>
            {[1,2,3,4,5].map(n=>(
              <details key={n} className="fq rv">
                <summary>
                  <span style={{flex:1}}>{tf(`q${n}`)}</span>
                  <span className="fqi" aria-hidden="true">+</span>
                </summary>
                <p style={{fontSize:'14px',color:'#475569',lineHeight:1.85,padding:'0 22px 20px'}}>{tf(`a${n}`)}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            LATEST STORIES — MAGAZINE
        ══════════════════════════════════════════ */}
        <section style={{background:'#fff',padding:'72px clamp(16px,3vw,40px)'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}>
            <div className="rv" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'36px',flexWrap:'wrap',gap:'16px'}}>
              <div>
                <p className="sey" style={{marginBottom:'8px'}}>📖 City Stories</p>
                <h2 className="sh2">Fresh from <em>Fortaleza</em></h2>
              </div>
              <Link href={L('/magazine')} style={{fontSize:'13px',fontWeight:700,color:'#0099cc',padding:'10px 20px',border:'1.5px solid #e0f7ff',borderRadius:'100px',background:'#f0fbff',textDecoration:'none'}}>All stories →</Link>
            </div>
            <div className="rv" style={{display:'grid',gap:'18px',gridTemplateColumns:'1fr'}}>
              <style suppressHydrationWarning>{`@media(min-width:768px){.mgl{grid-template-columns:1.6fr 1fr!important;}}`}</style>
              <div className="mgl" style={{display:'grid',gap:'18px',gridTemplateColumns:'1fr'}}>
                <article className="card-h" style={{borderRadius:'20px',overflow:'hidden',position:'relative',cursor:'pointer',background:'#050f20',minHeight:'360px',boxShadow:'0 4px 24px rgba(0,0,0,.1)'}}>
                  <div className="ci" style={{position:'absolute',inset:0}}>
                    <Image src="https://vsbyzbqvu1tc1es5.public.blob.vercel-storage.com/fortaleza%20img.webp" alt="Fortaleza travel 2026 — complete city guide beaches botecos barracas" width={800} height={400} style={{width:'100%',height:'100%',objectFit:'cover',opacity:.6}}/>
                  </div>
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(2,8,20,.96) 0%,rgba(2,8,20,.1) 60%,transparent 100%)'}}/>
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'26px 28px'}}>
                    <span style={{display:'inline-block',background:'#ff6b47',color:'#fff',fontSize:'10px',fontWeight:800,padding:'5px 12px',borderRadius:'100px',marginBottom:'12px',letterSpacing:'1px',textTransform:'uppercase'}}>📖 City Life</span>
                    <h3 style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(18px,2.5vw,28px)',fontWeight:700,color:'#fff',lineHeight:1.2,marginBottom:'10px'}}>Fortaleza in 2026: Everything You Need to Know Before You Go</h3>
                    <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'rgba(255,255,255,.35)',flexWrap:'wrap'}}><span>March 22, 2026</span><span>·</span><span>8 min read</span><span>·</span><span>15.2k views</span></div>
                  </div>
                </article>
                <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                  {[
                    {icon:'🪂',accent:'#0099cc',cat:'Kitesurfing',title:'The Perfect Wind Window: When to Kite in Ceará',date:'March 20, 2026 · 5 min',slug:'kite-ceara'},
                    {icon:'🦀',accent:'#d97706',cat:'Food & Drink',title:'The Great Caranguejo Hunt: 12 Spots Ranked Honestly',date:'March 17, 2026 · 4 min',slug:'caranguejo-hunt'},
                    {icon:'🌅',accent:'#7c3aed',cat:'Day Trip',title:'Jericoacoara in 48 Hours: No Fluff, Just What to Do',date:'March 14, 2026 · 6 min',slug:'jeri-48h'},
                  ].map(art=>(
                    <Link key={art.slug} href={L(`/magazine/${art.slug}`)} className="mag-s" style={{background:'#fff',border:'1.5px solid #edf2f7',borderRadius:'14px',overflow:'hidden',cursor:'pointer',display:'grid',gridTemplateColumns:'100px 1fr',textDecoration:'none',boxShadow:'0 2px 12px rgba(0,0,0,.04)'}}>
                      <div style={{background:`${art.accent}14`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'28px',flexShrink:0}}>{art.icon}</div>
                      <div style={{padding:'14px 16px'}}>
                        <p style={{fontSize:'9px',fontWeight:800,letterSpacing:'2px',textTransform:'uppercase',color:art.accent,marginBottom:'5px'}}>{art.cat}</p>
                        <h3 style={{fontSize:'13px',fontWeight:700,color:'#0a0e1a',lineHeight:1.35,marginBottom:'5px'}}>{art.title}</h3>
                        <time style={{fontSize:'11px',color:'#94a3b8',fontWeight:500}}>{art.date}</time>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AD FOOTER */}
        <div style={{padding:'0 clamp(16px,3vw,40px) 48px',background:'#fff'}}>
          <div style={{maxWidth:'1380px',margin:'0 auto'}}><AdZone size="leaderboard" slot="footer-leaderboard"/></div>
        </div>

      </main>

      <Footer locale={locale}/>
      <StickyCTA locale={locale}/>
      <CookieConsent locale={locale}/>
      <BackToTop/>
      <RevealObserver/>
    </>
  );
}
ENDTSX
echo "✅ WOW PageClient v4 done — $(wc -l < "/home/claude/ifortaleza-nextjs/app/[locale]/PageClient.tsx") lines"