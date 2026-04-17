import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Card from '../../components/ui/Card';
import { PROGRAMS } from '../../data/programs';
import './ProgramDetail.css';

export default function ProgramDetail({ lang = 'en' }) {
  const { slug } = useParams();
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    return (
      <div className="not-found-page section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>{lang === 'es' ? 'Programa no encontrado' : 'Program Not Found'}</h1>
          <Button as={Link} to="/programs" variant="primary" size="md" style={{ marginTop: '2rem', display: 'inline-flex' }}>
            {lang === 'es' ? 'Ver todos los programas' : 'View All Programs'}
          </Button>
        </div>
      </div>
    );
  }

  const name        = lang === 'es' ? program.nameEs        : program.name;
  const description = lang === 'es' ? program.descriptionEs : program.description;
  const tagline     = lang === 'es' ? program.taglineEs     : program.tagline;

  return (
    <div className="program-detail">
      {/* HERO */}
      <section
        className="program-detail__hero"
        style={{ background: `linear-gradient(135deg, ${program.bgColor} 0%, var(--color-cream) 100%)` }}
        aria-labelledby="pd-heading"
      >
        <div className="container program-detail__hero-content">
          <nav className="program-detail__breadcrumb" aria-label="Breadcrumb">
            <Link to="/programs" className="breadcrumb-link">
              {lang === 'es' ? 'Programas' : 'Programs'}
            </Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{name}</span>
          </nav>
          <div className="program-detail__hero-icon" aria-hidden="true">{program.icon}</div>
          <Badge variant="dark">{program.category}</Badge>
          <h1 id="pd-heading">{name}</h1>
          <p className="program-detail__tagline">{tagline}</p>
          <div className="program-detail__hero-btns">
            <Button as={Link} to="#register" variant="primary" size="lg">
              {lang === 'es' ? 'Registrarse Ahora' : 'Register Now'}
            </Button>
            <Button as={Link} to="/contact" variant="secondary" size="lg">
              {lang === 'es' ? 'Preguntar' : 'Ask a Question'}
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="program-detail__body section">
        <div className="container program-detail__grid">
          {/* LEFT: Description */}
          <div className="program-detail__main">
            <div className="program-detail__section">
              <h2>{lang === 'es' ? 'Sobre Este Programa' : 'About This Program'}</h2>
              <p>{description}</p>
            </div>

            <div className="program-detail__section">
              <h2>{lang === 'es' ? '¿Para Quién Es?' : "Who It's For"}</h2>
              <p>{program.whoItsFor}</p>
            </div>

            <div className="program-detail__section">
              <h2>{lang === 'es' ? 'Qué Esperar' : 'What to Expect'}</h2>
              <ul className="program-detail__checklist" role="list">
                {program.whatToExpect.map((item) => (
                  <li key={item} className="program-detail__check-item">
                    <span className="check-icon" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="program-detail__sidebar" aria-labelledby="sidebar-heading">
            {/* Register Card */}
            <Card id="register" className="register-card">
              <Card.Body>
                <h2 id="sidebar-heading" className="register-card__title">
                  {lang === 'es' ? '¿Lista para Unirte?' : 'Ready to Join?'}
                </h2>
                <p className="register-card__desc">
                  {lang === 'es'
                    ? 'Regístrate para este programa y comienza tu viaje con I Am Here.'
                    : 'Register for this program and start your journey with I Am Here.'}
                </p>
                <Button
                  as={Link}
                  to={`/programs/${program.slug}/register`}
                  variant="primary"
                  size="md"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {lang === 'es' ? 'Registrarse Ahora' : 'Register Now'}
                </Button>
                <p className="register-card__note">
                  {lang === 'es'
                    ? '✓ Sin costo — Solo necesitas registrarte'
                    : '✓ Free to join — Just register'}
                </p>
              </Card.Body>
            </Card>

            {/* Questions Card */}
            <Card variant="flat" className="questions-card">
              <Card.Body>
                <h3 className="questions-card__title">
                  {lang === 'es' ? '¿Preguntas?' : 'Questions?'}
                </h3>
                <p className="questions-card__desc">
                  {lang === 'es'
                    ? 'Estamos aquí para ayudarte. Contáctanos en cualquier momento.'
                    : 'We\'re here to help. Reach out anytime.'}
                </p>
                <Button
                  as={Link}
                  to="/contact"
                  variant="secondary"
                  size="sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
                </Button>
              </Card.Body>
            </Card>
          </aside>
        </div>
      </section>

      {/* OTHER PROGRAMS */}
      <section className="program-detail__more section" aria-labelledby="more-programs-heading">
        <div className="container">
          <h2 id="more-programs-heading" className="text-center">
            {lang === 'es' ? 'Explorar Otros Programas' : 'Explore Other Programs'}
          </h2>
          <div className="program-detail__more-grid">
            {PROGRAMS.filter((p) => p.slug !== slug).slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/programs/${p.slug}`} className="more-program-card">
                <span className="more-program-card__icon" aria-hidden="true">{p.icon}</span>
                <span className="more-program-card__name">
                  {lang === 'es' ? p.nameEs : p.name}
                </span>
                <span className="more-program-card__arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
            <Button as={Link} to="/programs" variant="secondary" size="md">
              {lang === 'es' ? 'Ver Todos los Programas' : 'View All Programs'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
