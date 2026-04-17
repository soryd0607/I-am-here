import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/',          label: 'Home',        labelEs: 'Inicio' },
  { to: '/about',     label: 'About',       labelEs: 'Nosotros' },
  { to: '/programs',  label: 'Programs',    labelEs: 'Programas' },
  { to: '/events',    label: 'Events',      labelEs: 'Eventos' },
  { to: '/resources', label: 'Resources',   labelEs: 'Recursos' },
  { to: '/contact',   label: 'Contact',     labelEs: 'Contacto' },
];

export default function Navbar({ lang = 'en', onLangToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="I Am Here — Home">
          <span className="navbar__logo-text">I Am Here</span>
        </Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ to, label, labelEs }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  end={to === '/'}
                >
                  {lang === 'es' ? labelEs : label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button
              className="navbar__lang-btn"
              onClick={onLangToggle}
              aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <Button as={Link} to="/donate" variant="primary" size="sm">
              {lang === 'es' ? 'Donar' : 'Donate'}
            </Button>
            <Button as={Link} to="/get-involved" variant="secondary" size="sm">
              {lang === 'es' ? 'Involúcrate' : 'Get Involved'}
            </Button>
          </div>
        </nav>

        <div className="navbar__mobile-actions">
          <button
            className="navbar__lang-btn"
            onClick={onLangToggle}
            aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`hamburger-line ${menuOpen ? 'hamburger-line--1-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'hamburger-line--2-open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'hamburger-line--3-open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
