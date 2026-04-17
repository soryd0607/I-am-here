import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { PROGRAMS } from '../data/programs';
import './Programs.css';

const CATEGORIES = ['All', 'Education', 'Leadership', 'Advocacy', 'Business', 'Immigration', 'Career', 'Wellness', 'Finance', 'Community'];

export default function Programs({ lang = 'en' }) {
  return (
    <div className="programs-page">
      {/* HERO */}
      <section className="page-hero page-hero--rose" aria-labelledby="programs-page-heading">
        <div className="container page-hero__content">
          <Badge variant="rose">
            {lang === 'es' ? '10 programas' : '10 Programs'}
          </Badge>
          <h1 id="programs-page-heading">
            {lang === 'es' ? 'Nuestros Programas' : 'Our Programs'}
          </h1>
          <p>
            {lang === 'es'
              ? 'Desde educación hasta emprendimiento, salud mental hasta educación financiera — ofrecemos programas que crean oportunidades reales para las jóvenes del Bronx.'
              : 'From education to entrepreneurship, mental health to financial literacy — we deliver programs that create real opportunity for young women in the Bronx.'}
          </p>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="programs-grid-section section" aria-labelledby="all-programs-heading">
        <div className="container">
          <h2 id="all-programs-heading" className="sr-only">
            {lang === 'es' ? 'Todos los programas' : 'All programs'}
          </h2>
          <div className="programs-grid">
            {PROGRAMS.map((program) => (
              <article key={program.slug} className="program-full-card">
                <div className="program-full-card__accent" style={{ background: program.bgColor }} aria-hidden="true">
                  <span className="program-full-card__emoji">{program.icon}</span>
                </div>
                <div className="program-full-card__body">
                  <div className="program-full-card__meta">
                    <Badge variant="dark">{program.category}</Badge>
                  </div>
                  <h3 className="program-full-card__name">
                    {lang === 'es' ? program.nameEs : program.name}
                  </h3>
                  <p className="program-full-card__tagline">
                    {lang === 'es' ? program.taglineEs : program.tagline}
                  </p>
                  <div className="program-full-card__actions">
                    <Button
                      as={Link}
                      to={`/programs/${program.slug}`}
                      variant="primary"
                      size="sm"
                    >
                      {lang === 'es' ? 'Saber más' : 'Learn More'}
                    </Button>
                    <Button
                      as={Link}
                      to={`/programs/${program.slug}#register`}
                      variant="secondary"
                      size="sm"
                    >
                      {lang === 'es' ? 'Registrarse' : 'Register'}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="programs-cta section" aria-labelledby="programs-cta-heading">
        <div className="container programs-cta__inner">
          <h2 id="programs-cta-heading">
            {lang === 'es' ? '¿No sabes por dónde empezar?' : 'Not sure where to start?'}
          </h2>
          <p>
            {lang === 'es'
              ? 'Contáctanos y te ayudaremos a encontrar el programa adecuado para ti.'
              : 'Contact us and we\'ll help you find the right program for you.'}
          </p>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            {lang === 'es' ? 'Habla con nosotros' : 'Talk to Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
