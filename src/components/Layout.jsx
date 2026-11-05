import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Btn } from './ui'

const MSG = 'No retainer. No signup fee. We earn 20% only when your deal closes.'
const LINKS = [['/how-it-works', 'How it works'], ['/creators', 'Creators'], ['/for-brands', 'For brands'], ['/for-creators', 'For creators'], ['/about', 'About'], ['/#faq', 'FAQ']]

const Logo = () => (
  <Link className="logo" to="/"><span className="logo-mark">N</span><span className="logo-word">NexVance</span></Link>
)

const Announce = () => (
  <div className="announce">
    <div className="announce-track">
      {[0, 1].map((k) => (
        <div className="announce-set" key={k} aria-hidden={k === 1}>
          {[0, 1, 2, 3].map((i) => <span className="announce-item" key={i}>{MSG}<i className="announce-dot" /></span>)}
        </div>
      ))}
    </div>
  </div>
)

const navItem = ([to, label], style) =>
  to.includes('#')
    ? <Link key={to} className="nav-link" to={to} style={style}>{label}</Link>
    : <NavLink key={to} to={to} style={style} className={({ isActive }) => 'nav-link' + (isActive ? ' is-active' : '')}>{label}</NavLink>

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname, hash])
  return (
    <header className="nav">
      <div className="container">
        <Logo />
        <nav className="nav-links">{LINKS.map((l) => navItem(l))}</nav>
        <div className="nav-actions">
          <Link className="nav-link" to="/for-creators">Join as a creator</Link>
          <Btn to="/for-brands#brief">Get a shortlist</Btn>
        </div>
        <button type="button" className={`menu-button${open ? ' is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        <div className="nav-mobile-inner">
          {LINKS.map((l, i) => navItem(l, { '--k': i }))}
          <Link className="nav-link" to="/for-creators" style={{ '--k': 6 }}>Join as a creator</Link>
          <Btn to="/for-brands#brief"><span style={{ '--k': 7 }}>Get a shortlist</span></Btn>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo />
          <nav className="footer-links">
            {LINKS.filter(([to]) => to !== '/for-brands').map(([to, label]) => <Link key={to} className="footer-link" to={to}>{label}</Link>)}
          </nav>
        </div>
        <p className="footer-copy">© 2026 NexVance. Creator marketing, commission only.</p>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return (<><Announce /><Header /><main><Outlet /></main><Footer /></>)
}
