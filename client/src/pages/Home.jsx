import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { PROGRAMS } from '../data/programs';
import './Home.css';

const STATS = [
  { value: '500+', label: 'Young Women Served', labelEs: 'Jóvenes Atendidas' },
  { value: '10',   label: 'Active Programs',    labelEs: 'Programas Activos' },
  { value: '50+',  label: 'Community Partners', labelEs: 'Socios Comunitarios' },
  { value: '95%',  label: 'Program Completion', labelEs: 'Tasa de Finalización' },
];

const IMPACT_AMOUNTS = [
  { amount: 25,  label: 'Workshop Materials',    labelEs: 'Materiales de taller' },
  { amount: 50,  label: 'A Prom Dress',          labelEs: 'Un vestido de graduación' },
  { amount: 100, label: 'One Month of Mentorship', labelEs: 'Un mes de mentoría' },
  { amount: 250, label: 'Scholarship Support',   labelEs: 'Apoyo de beca' },
];

const FEATURED_PROGRAMS = PROGRAMS.slice(0, 6);

export default function Home({ lang = 'en' }) {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__gradient" />
          <div className="hero__pattern" />
        </div>
        <div className="container hero__content">
          <Badge variant="rose" className="hero__badge">
            {lang === 'es' ? 'El Bronx, Nueva York' : 'The Bronx, New York'}
          </Badge>
          <h1 id="hero-heading" className="hero__title">
            {lang === 'es' ? 'Tú Perteneces' : 'You Belong'}{' '}
            <span className="hero__title-accent">
              {lang === 'es' ? 'Aquí.' : 'Here.'}
            </span>
          </h1>
          <p className="hero__subtitle">
            {lang === 'es'
              ? 'I Am Here es una organización del Bronx que ofrece programas que transforman vidas en educación, carreras, salud mental, emprendimiento y apoyo comunitario — para jóvenes mujeres, por personas que creen en ellas.'
              : 'I Am Here is a Bronx-based organization delivering life-changing programs in education, careers, mental health, entrepreneurship, and community support — for young women, by people who believe in them.'}
          </p>
          <div className="hero__ctas">
            <Button as={Link} to="/programs" variant="primary" size="lg">
              {lang === 'es' ? 'Explorar Programas' : 'Explore Our Programs'}
            </Button>
            <Button as={Link} to="/about" variant="white" size="lg">
              {lang === 'es' ? 'Nuestra Historia' : 'Our Story'}
            </Button>
          </div>
          <div className="hero__trust">
            <p className="hero__trust-text">
              {lang === 'es'
                ? 'Sirviendo a la comunidad del Bronx — sin importar estatus migratorio'
                : 'Serving the Bronx community — regardless of immigration status'}
            </p>
          </div>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="mission-strip section" aria-labelledby="mission-heading">
        <div className="container mission-strip__inner">
          <div className="mission-strip__icon" aria-hidden="true">✦</div>
          <div className="mission-strip__text">
            <h2 id="mission-heading" className="mission-strip__title">
              {lang === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </h2>
            <p className="mission-strip__desc">
              {lang === 'es'
                ? 'Empoderar a las jóvenes sin importar su origen, estatus migratorio o circunstancias, entregando programas directos que abren puertas, construyen confianza y crean cambios duraderos.'
                : 'Empower young women regardless of background, immigration status, or circumstance by delivering direct programs that open doors, build confidence, and create lasting change.'}
            </p>
          </div>
          <Button as={Link} to="/about" variant="secondary" size="md">
            {lang === 'es' ? 'Conócenos' : 'Meet Our Team'}
          </Button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats section" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="stats__title text-center">
            {lang === 'es' ? 'Impacto Real, Comunidad Real' : 'Real Impact, Real Community'}
          </h2>
          <div className="stats__grid" role="list">
            {STATS.map(({ value, label, labelEs }) => (
              <div key={value} className="stats__item" role="listitem">
                <span className="stats__value">{value}</span>
                <span className="stats__label">{lang === 'es' ? labelEs : label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="programs-preview section" aria-labelledby="programs-heading">
        <div className="container">
          <div className="programs-preview__header">
            <Badge variant="rose">
              {lang === 'es' ? '10 programas' : '10 Programs'}
            </Badge>
            <h2 id="programs-heading">
              {lang === 'es' ? 'Programas Diseñados para la Vida Real' : 'Programs Built for Real Life'}
            </h2>
            <p className="programs-preview__subtitle">
              {lang === 'es'
                ? '10 programas diseñados para acompañar a las jóvenes exactamente donde están.'
                : '10 programs designed to meet young women exactly where they are.'}
            </p>
          </div>
          <div className="programs-preview__grid">
            {FEATURED_PROGRAMS.map((program) => (
              <Card key={program.slug} hover className="program-card">
                <Card.Body>
                  <div className="program-card__icon" aria-hidden="true">{program.icon}</div>
                  <Badge variant="dark" className="program-card__category">
                    {program.category}
                  </Badge>
                  <h3 className="program-card__name">
                    {lang === 'es' ? program.nameEs : program.name}
                  </h3>
                  <p className="program-card__tagline">
                    {lang === 'es' ? program.taglineEs : program.tagline}
                  </p>
                  <Button
                    as={Link}
                    to={`/programs/${program.slug}`}
                    variant="secondary"
                    size="sm"
                    className="program-card__cta"
                  >
                    {lang === 'es' ? 'Saber más' : 'Learn More'}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="programs-preview__footer text-center">
            <Button as={Link} to="/programs" variant="primary" size="lg">
              {lang === 'es' ? 'Ver Todos los Programas' : 'View All Programs'}
            </Button>
          </div>
        </div>
      </section>

      {/* QUOTE / TESTIMONIAL */}
      <section className="testimonial section" aria-label="Community voice">
        <div className="container">
          <div className="testimonial__card">
            <div className="testimonial__quote" aria-hidden="true">"</div>
            <blockquote className="testimonial__text">
              {lang === 'es'
                ? 'I Am Here cambió mi vida. No solo me dio habilidades — me dio la confianza para creer que realmente puedo.'
                : 'I Am Here changed my life. It didn\'t just give me skills — it gave me the confidence to believe I actually can.'}
            </blockquote>
            <cite className="testimonial__author">
              — {lang === 'es' ? 'Participante del programa, 2024' : 'Program Participant, 2024'}
            </cite>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="donate-cta section" aria-labelledby="donate-heading">
        <div className="container donate-cta__inner">
          <div className="donate-cta__text">
            <Badge variant="gold">
              {lang === 'es' ? 'Haz la diferencia' : 'Make a difference'}
            </Badge>
            <h2 id="donate-heading">
              {lang === 'es' ? 'Cada Dólar Cambia una Vida' : 'Every Dollar Changes a Life'}
            </h2>
            <p>
              {lang === 'es'
                ? 'Tu apoyo financia talleres, becas, mentoría y servicios comunitarios directos en el Bronx.'
                : 'Your support funds workshops, scholarships, mentorship, and direct community services in the Bronx.'}
            </p>
          </div>
          <div className="donate-cta__impacts">
            {IMPACT_AMOUNTS.map(({ amount, label, labelEs }) => (
              <div key={amount} className="impact-item">
                <span className="impact-item__amount">${amount}</span>
                <span className="impact-item__label">{lang === 'es' ? labelEs : label}</span>
              </div>
            ))}
          </div>
          <div className="donate-cta__btn-wrap">
            <Button as={Link} to="/donate" variant="gold" size="lg">
              {lang === 'es' ? 'Apoyar I Am Here' : 'Support I Am Here'}
            </Button>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="get-involved section" aria-labelledby="involved-heading">
        <div className="container get-involved__inner">
          <div className="get-involved__text">
            <h2 id="involved-heading">
              {lang === 'es' ? '¿Lista para unirte?' : 'Ready to Get Involved?'}
            </h2>
            <p>
              {lang === 'es'
                ? 'Ya sea que quieras inscribirte en un programa, convertirte en mentora o asociarte con nosotros — hay un lugar para ti aquí.'
                : 'Whether you want to enroll in a program, become a mentor, or partner with us — there\'s a place for you here.'}
            </p>
          </div>
          <div className="get-involved__btns">
            <Button as={Link} to="/programs" variant="primary" size="lg">
              {lang === 'es' ? 'Unirse a un Programa' : 'Join a Program'}
            </Button>
            <Button as={Link} to="/get-involved" variant="secondary" size="lg">
              {lang === 'es' ? 'Ser Mentora' : 'Become a Mentor'}
            </Button>
            <Button as={Link} to="/contact" variant="ghost" size="lg">
              {lang === 'es' ? 'Asociarse con Nosotros' : 'Partner With Us'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
