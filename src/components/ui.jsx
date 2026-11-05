import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    if (!('IntersectionObserver' in window)) { setSeen(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [seen, threshold])
  return [ref, seen]
}

export function Section({ tone = 'black', id, children }) {
  const [ref, seen] = useInView(0.08)
  return (
    <section id={id} className={`section section--${tone}`}>
      <div ref={ref} className={`container reveal${seen ? ' is-visible' : ''}`}>{children}</div>
    </section>
  )
}

export const Pill = ({ black, children }) => <span className={`pill${black ? ' pill--black' : ''}`}>{children}</span>

export const Btn = ({ to, v = 'white', big, children }) => (
  <Link className={`btn btn--${v}${big ? ' btn--big' : ''}`} to={to}>{children}</Link>
)

export const Check = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 9.2l2.4 2.4 4.6-4.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
export const Cross = () => (
  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ color: 'var(--gray)' }}>
    <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.2 6.2l5.6 5.6M11.8 6.2l-5.6 5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export function CountUp({ value, duration = 1400 }) {
  const [ref, seen] = useInView(0.4)
  const [p, setP] = useState(0)
  useEffect(() => {
    if (!seen) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return }
    let raf, t0
    const tick = (t) => {
      if (t0 === undefined) t0 = t
      const k = Math.min((t - t0) / duration, 1)
      setP(1 - Math.pow(1 - k, 3))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, duration])
  return <span ref={ref}>{value.split(/(\d+)/).map((s) => (/^\d+$/.test(s) ? Math.round(Number(s) * p) : s)).join('')}</span>
}

export function AnimatedHeadline({ parts }) {
  let n = 0
  return (
    <h1 className="display" aria-label={parts.map((p) => p.text).join(' ')}>
      {parts.map((part, pi) => {
        const words = part.text.split(' ').map((w, wi) => (
          <span key={wi}>
            <span className="w" aria-hidden="true"><span className="w-in" style={{ '--i': n++ }}>{w}</span></span>{' '}
          </span>
        ))
        return part.gray ? <span key={pi} className="is-gray">{words}</span> : <span key={pi}>{words}</span>
      })}
    </h1>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <div key={q} className={`faq-item${open === i ? ' is-open' : ''}`}>
          <button type="button" className="faq-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="faq-q">{q}</span>
            <svg className="faq-plus" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <div className="faq-answer"><div><p className="faq-a">{a}</p></div></div>
        </div>
      ))}
    </div>
  )
}

export function BriefForm({ items, button, note }) {
  const [sel, setSel] = useState([])
  const toggle = (c) => setSel((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]))
  return (
    <form className="form-card" onSubmit={(e) => e.preventDefault()}>
      {items.map((f) => f.choices ? (
        <div className="field" key={f.label}>
          <span className="label">{f.label}</span>
          <div className="chips">
            {f.choices.map((c) => (
              <button type="button" key={c} className={`choice${sel.includes(c) ? ' is-active' : ''}`} onClick={() => toggle(c)}>{c}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="field" key={f.label}>
          <label className="label">{f.label}</label>
          {f.area
            ? <textarea className="input" placeholder={f.placeholder} />
            : <input className="input" type={f.type || 'text'} placeholder={f.placeholder} />}
        </div>
      ))}
      <button className="btn btn--white btn--big" type="submit">{button}</button>
      <p className="note">{note}</p>
    </form>
  )
}
