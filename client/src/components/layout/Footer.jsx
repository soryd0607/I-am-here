import { Link } from 'react-router-dom';
import './Footer.css';

const PROGRAMS = [
  { to: '/programs/education-access',     label: 'Education Access' },
  { to: '/programs/leadership',           label: 'Leadership & Development' },
  { to: '/programs/career-readiness',     label: 'Career Readiness' },
  { to: '/programs/entrepreneurship',     label: 'Entrepreneurship' },
  { to: '/programs/mental-health',        label: 'Mental Health Support' },
  { to: '/programs/financial-literacy',   label: 'Financial Literacy' },
];

const LINKS = [
  { to: '/about',        label: 'About Us' },
  { to: '/events',       label: 'Events' },
  { to: '/resources',    label: 'Resources' },
  { to: '/donate',       label: 'Donate' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact',      label: 'Contact' },
];

export default function Footer({ lang = 'en' }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">I Am H.E.R.R</Link>
          <p className="footer__tagline">
            {lang === 'es'
              ? 'Empoderando a las mujeres jóvenes del Bronx con programas que transforman vidas.'
              : 'Empowering young women in the Bronx with life-changing programs and real support.'}
          </p>
          <address className="footer__contact">
            <p>The Bronx, New York</p>
            <a href="mailto:hello@iamherr.org">hello@iamherr.org</a>
          </address>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{lang === 'es' ? 'Programas' : 'Programs'}</h3>
          <ul className="footer__list">
            {PROGRAMS.map(({ to, label }) => (
              <li key={to}><Link to={to} className="footer__link">{label}</Link></li>
            ))}
            <li><Link to="/programs" className="footer__link footer__link--see-all">
              {lang === 'es' ? 'Ver todos →' : 'View all →'}
            </Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{lang === 'es' ? 'Organización' : 'Organization'}</h3>
          <ul className="footer__list">
            {LINKS.map(({ to, label }) => (
              <li key={to}><Link to={to} className="footer__link">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">{lang === 'es' ? 'Apóyanos' : 'Support Us'}</h3>
          <p className="footer__support-text">
            {lang === 'es'
              ? 'Tu donación cambia vidas directamente en nuestra comunidad.'
              : 'Your donation directly changes lives in our community.'}
          </p>
          <Link to="/donate" className="footer__donate-btn">
            {lang === 'es' ? 'Donar ahora' : 'Donate Now'}
          </Link>
          <div className="footer__social" aria-label="Social media links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} I Am H.E.R.R.{' '}
            {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <nav className="footer__legal" aria-label="Legal links">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
