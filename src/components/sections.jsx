import { Fragment, useState } from 'react'
import { Section, Pill, Btn, Check, Cross, CountUp, AnimatedHeadline, Faq, useInView } from './ui'
import * as D from '../data'

export const Hero = () => (
  <section className="hero">
    <div className="container">
      <span className="pill hero-anim" style={{ '--d': '0ms' }}>Creator marketing, commission only</span>
      <AnimatedHeadline parts={[{ text: 'Get your brand in front of the right audience.' }, { text: 'Pay only when the deal closes.', gray: true }]} />
      <p className="lead lead--hero hero-anim" style={{ '--d': '700ms' }}>NexVance connects brands with creators on YouTube, TikTok, Instagram and Facebook, including UGC for paid ads. Every deal starts with a signed contract, and we earn 20% only when it closes.</p>
      <div className="btn-row hero-anim" style={{ '--d': '820ms' }}>
        <Btn big to="/for-brands#brief">Get a creator shortlist</Btn>
        <Btn big v="navy" to="/for-creators">I’m a creator</Btn>
      </div>
      <p className="note hero-anim" style={{ '--d': '940ms' }}>One-time brief. Two minutes. No call needed.</p>
    </div>
  </section>
)

export const Stats = () => (
  <section className="stats">
    <div className="container">
      {D.STATS.map(([n, l]) => (
        <div className="stat" key={l}><span className="stat-num"><CountUp value={n} /></span><span className="stat-label">{l}</span></div>
      ))}
    </div>
  </section>
)

export const Ticker = () => (
  <div className="ticker">
    <div className="ticker-track" aria-hidden="true">
      {[0, 1].map((k) => (
        <div className="ticker-set" key={k}>
          {D.TICKER.map((t) => (<Fragment key={t}><span className="ticker-dot" /><span className="ticker-item">{t}</span></Fragment>))}
        </div>
      ))}
    </div>
  </div>
)

export const WhoFor = () => (
  <Section tone="black">
    <Pill>Who this is for</Pill>
    <h2 className="h2">Two sides. One contract.</h2>
    <p className="lead">Whether you are hiring creators or getting paid by brands, the terms are on the table before work starts.</p>
    <div className="two-col">
      <div className="side-card side-card--brand">
        <span className="eyebrow">Brands</span>
        <h3 className="card-title">Creator campaigns without the retainer</h3>
        <p className="text-lg">Tell us what you sell and who you want to reach. We shortlist creators and you only pay when a deal closes.</p>
        <ul className="check-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>{D.BRAND_CHECKS.map((t) => <li className="check-item" key={t}><Check />{t}</li>)}</ul>
        <Btn to="/for-brands#brief" v="black">Get a shortlist</Btn>
      </div>
      <div className="side-card side-card--creator">
        <span className="eyebrow">Creators</span>
        <h3 className="card-title">Brand deals without the chasing</h3>
        <p className="text-lg">We pitch you to brands that fit your audience, handle the contract and chase the payment. You keep 80%.</p>
        <ul className="check-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>{D.CREATOR_CHECKS.map((t) => <li className="check-item" key={t}><Check />{t}</li>)}</ul>
        <Btn to="/for-creators#apply">Apply to join the roster</Btn>
      </div>
    </div>
  </Section>
)

export const LetsGetReal = ({ cols }) => (
  <Section tone="navy">
    <Pill black>Let’s get real</Pill>
    <h2 className="h2">Does this sound like you right now?</h2>
    <div className={cols.length > 1 ? 'two-col two-col--real' : 'real-single'}>
      {cols.map((c) => (
        <div className="real-col" key={c.title}>
          <h3 className="h-col">{c.title}</h3>
          {c.items.map((t) => <div className="real-card" key={t}>{t}</div>)}
        </div>
      ))}
    </div>
    <p className="closing">Most creator deals go wrong from missing structure, not missing effort. NexVance adds the structure.</p>
  </Section>
)

export const WhatYouGet = () => (
  <Section tone="black">
    <Pill>What you get</Pill>
    <h2 className="h2">Everything a creator deal needs</h2>
    <div className="feature-grid">
      {D.FEATURES.map(([title, text, tags, kind], i) => (
        <div className="feature" key={title}>
          <div className="feature-top">
            <span className="feature-num">{String(i + 1).padStart(2, '0')}</span>
            <span className={`tag${kind ? ` tag--${kind}` : ''}`}>{tags.join(' + ')}</span>
          </div>
          <h3 className="feature-title">{title}</h3>
          <p className="text">{text}</p>
        </div>
      ))}
    </div>
  </Section>
)

export const HowItWorks = () => (
  <Section tone="white">
    <div className="pill-row"><Pill>How it works</Pill><Pill>For brands</Pill></div>
    <h2 className="h2">Brief. Shortlist. Contract. Paid.</h2>
    <p className="lead">You see who we would match you with, and the terms, before you commit to anything.</p>
    <div className="steps">
      {D.STEPS.map(([t, b], i) => (
        <div className="step" key={t}><span className="step-num">{i + 1}</span><h3 className="step-title">{t}</h3><p className="step-text">{b}</p></div>
      ))}
    </div>
  </Section>
)

export function OnePrice() {
  const [ref, seen] = useInView(0.1)
  return (
    <section className="price">
      <div className="container">
        <div ref={ref} className={`price-card reveal${seen ? ' is-visible' : ''}`}>
          <div>
            <Pill black>One price</Pill>
            <h2 className="price-title">20% on closed deals. Nothing else.</h2>
            <p className="text-lg">For brands, the 20% comes out of the agreed fee, not on top. Creators receive 80%. No retainer, no signup fee, no monthly cost.</p>
          </div>
          <div className="timeline">
            {D.TIMELINE.map(([t, b]) => (
              <div className="timeline-item" key={t}><span className="timeline-dot" /><div><h3 className="timeline-title">{t}</h3><p className="timeline-text">{b}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Roster() {
  const [f, setF] = useState('All')
  const list = f === 'All' ? D.CREATORS : D.CREATORS.filter((c) => c.platforms.includes(f))
  return (
    <Section tone="black">
      <div className="roster-head">
        <div className="roster-intro">
          <Pill>Roster</Pill>
          <h2 className="h2 h2--left">Creators on our roster</h2>
          <p className="text">Creators appear here with their permission. Audience figures come from the creators themselves, and we share full audience data with brands on request.</p>
        </div>
        <div className="filter-row">
          {D.FILTERS.map((x) => <button type="button" key={x} className={`filter${f === x ? ' is-active' : ''}`} onClick={() => setF(x)}>{x}</button>)}
        </div>
      </div>
      <div className="roster-grid" key={f}>
        {list.length ? list.map((c, i) => (
          <article className="creator" key={c.handle} style={{ '--k': i }}>
            <div className="creator-top">
              <img className="avatar" src={`/images/creators/${c.photo}.jpeg`} alt={c.name} loading="lazy" />
              <div><h3 className="creator-name">{c.name}</h3><p className="creator-handle">{c.handle}</p></div>
            </div>
            <dl className="creator-info">
              {[['Niche', c.niche], ['Audience', c.audience], ['Region', c.region]].map(([k, v]) => (
                <div className="creator-row" key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="chips">{c.platforms.map((p) => <span className="chip" key={p}>{p}</span>)}</div>
          </article>
        )) : <p className="note creator-grid-empty">No creators on this platform yet.</p>}
      </div>
    </Section>
  )
}

export const Niches = () => (
  <Section tone="black">
    <h2 className="h2">Niches we work in</h2>
    <div className="niche-row">{D.NICHES.map((n) => <span className="niche" key={n}>{n}</span>)}</div>
    <p className="note">If your niche is not listed, send a brief and we will tell you honestly whether we have a fit.</p>
  </Section>
)

export const Split = ({ h1, pill, title, text, button, to, items }) => {
  const H = h1 ? 'h1' : 'h2'
  return (
    <Section tone="black">
      <div className="split">
        <div className="split-text">
          <Pill>{pill}</Pill>
          <H className="h-split">{title}</H>
          <p>{text}</p>
          <Btn big to={to}>{button}</Btn>
        </div>
        <div className="split-list">{items.map((t) => <div className="split-item" key={t}><Check />{t}</div>)}</div>
      </div>
    </Section>
  )
}

export const ForYou = () => (
  <Section tone="white">
    <h2 className="h2">This is for you. This is not for you.</h2>
    <div className="two-col">
      <div className="fit-card fit-card--yes">
        <h3 className="h-fit">This is for you if…</h3>
        <div className="fit-list">{D.FOR_YES.map((t) => <div className="fit-item" key={t}><Check />{t}</div>)}</div>
      </div>
      <div className="fit-card fit-card--no">
        <h3 className="h-fit">This is not for you if…</h3>
        <div className="fit-list">{D.FOR_NO.map((t) => <div className="fit-item" key={t}><Cross />{t}</div>)}</div>
      </div>
    </div>
  </Section>
)

export const Founder = () => (
  <Section tone="black">
    <div className="founder">
      <div className="founder-photo founder-photo--placeholder"><span>FOUNDER PHOTO</span><span>Replace with Muhammad’s picture</span></div>
      <div className="founder-text">
        <Pill>Founder</Pill>
        <h2 className="h2 h2--left h2--founder">A small agency that works in the open</h2>
        {D.FOUNDER.map((t) => <p key={t}>{t}</p>)}
      </div>
    </div>
  </Section>
)

export const FaqSection = () => (
  <Section tone="black" id="faq">
    <h2 className="h2">Still thinking it through?</h2>
    <Faq items={D.FAQ} />
  </Section>
)

export function FinalCta({ children, to, label }) {
  const [ref, seen] = useInView(0.2)
  return (
    <section className="cta">
      <div ref={ref} className={`container reveal${seen ? ' is-visible' : ''}`}>
        <h2 className="h-cta">{children}</h2>
        <Btn big to={to}>{label}</Btn>
      </div>
    </section>
  )
}
