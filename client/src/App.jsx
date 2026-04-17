import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const Home        = lazy(() => import('./pages/Home'));
const About       = lazy(() => import('./pages/About'));
const Programs    = lazy(() => import('./pages/Programs'));
const ProgramDetail = lazy(() => import('./pages/programs/ProgramDetail'));
const Events      = lazy(() => import('./pages/Events'));
const Resources   = lazy(() => import('./pages/Resources'));
const Contact     = lazy(() => import('./pages/Contact'));
const Donate      = lazy(() => import('./pages/Donate'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const NotFound    = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', color: 'var(--color-dark-40)' }}>
        <div className="loading-spinner" aria-hidden="true" />
        <p style={{ marginTop: '1rem', fontFamily: 'var(--font-body)' }}>Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  const handleLangToggle = () => {
    const next = lang === 'en' ? 'es' : 'en';
    setLang(next);
    i18n.changeLanguage(next);
    localStorage.setItem('iah_lang', next);
  };

  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar lang={lang} onLangToggle={handleLangToggle} />
      <main id="main-content" style={{ paddingTop: 'var(--nav-height)', flex: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/"              element={<Home lang={lang} />} />
            <Route path="/about"         element={<About lang={lang} />} />
            <Route path="/programs"      element={<Programs lang={lang} />} />
            <Route path="/programs/:slug" element={<ProgramDetail lang={lang} />} />
            <Route path="/events"        element={<Events lang={lang} />} />
            <Route path="/resources"     element={<Resources lang={lang} />} />
            <Route path="/contact"       element={<Contact lang={lang} />} />
            <Route path="/donate"        element={<Donate lang={lang} />} />
            <Route path="/get-involved"  element={<GetInvolved lang={lang} />} />
            <Route path="*"              element={<NotFound lang={lang} />} />
          </Routes>
        </Suspense>
      </main>
      <Footer lang={lang} />
    </BrowserRouter>
  );
}
