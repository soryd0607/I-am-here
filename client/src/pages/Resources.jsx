import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Resources.css';

const STARTER_RESOURCES = [
  { icon: '💰', category: 'Financial Literacy',  categoryEs: 'Educación Financiera',  title: 'Budget Template',       titleEs: 'Plantilla de presupuesto',    desc: 'A simple monthly budget template to track your income and expenses.' },
  { icon: '💰', category: 'Financial Literacy',  categoryEs: 'Educación Financiera',  title: 'Savings Tracker',       titleEs: 'Rastreador de ahorros',       desc: 'Track your savings goals week by week.' },
  { icon: '🎯', category: 'Career Readiness',     categoryEs: 'Preparación Profesional', title: 'Resume Template',    titleEs: 'Plantilla de currículum',     desc: 'A clean, professional resume template ready to customize.' },
  { icon: '🎯', category: 'Career Readiness',     categoryEs: 'Preparación Profesional', title: 'Interview Prep Guide', titleEs: 'Guía de preparación para entrevistas', desc: 'Common interview questions and tips to prepare with confidence.' },
  { icon: '✊', category: 'Advocacy',             categoryEs: 'Defensa',               title: 'Know Your Rights',      titleEs: 'Conoce tus derechos',        desc: 'A guide to your civil rights as a young woman in New York.' },
  { icon: '🌍', category: 'Dream Act / ENL',      categoryEs: 'Dream Act / ENL',       title: 'Immigration Resources', titleEs: 'Recursos de inmigración',    desc: 'Key resources for undocumented and immigrant young women.' },
  { icon: '💙', category: 'Mental Health',        categoryEs: 'Salud Mental',          title: 'Coping Strategies',     titleEs: 'Estrategias de afrontamiento', desc: 'Practical coping tools for stress, anxiety, and hard moments.' },
  { icon: '💼', category: 'Entrepreneurship',     categoryEs: 'Emprendimiento',        title: 'Business Plan Template', titleEs: 'Plantilla de plan de negocio', desc: 'A structured template to turn your business idea into a plan.' },
];

export default function Resources({ lang = 'en' }) {
  return (
    <div className="resources-page">
      <section className="page-hero page-hero--rose" aria-labelledby="resources-heading">
        <div className="container page-hero__content">
          <Badge variant="rose">{lang === 'es' ? 'Gratis para ti' : 'Free for you'}</Badge>
          <h1 id="resources-heading">{lang === 'es' ? 'Recursos' : 'Resource Library'}</h1>
          <p>
            {lang === 'es'
              ? 'Herramientas, guías y plantillas para apoyarte en cada parte de tu camino.'
              : 'Tools, guides, and templates to support you on every part of your journey.'}
          </p>
        </div>
      </section>
      <section className="section" aria-labelledby="resources-list-heading">
        <div className="container">
          <h2 id="resources-list-heading" className="sr-only">
            {lang === 'es' ? 'Lista de recursos' : 'Resources list'}
          </h2>
          <div className="resources-grid">
            {STARTER_RESOURCES.map(({ icon, category, categoryEs, title, titleEs, desc }) => (
              <Card key={title} hover>
                <Card.Body>
                  <div className="resource-card__icon" aria-hidden="true">{icon}</div>
                  <Badge variant="dark">{lang === 'es' ? categoryEs : category}</Badge>
                  <h3 className="resource-card__title">{lang === 'es' ? titleEs : title}</h3>
                  <p className="resource-card__desc">{desc}</p>
                  <Button variant="secondary" size="sm" className="resource-card__btn">
                    {lang === 'es' ? 'Descargar' : 'Download'}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-12)' }}>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-dark-60)', marginBottom: 'var(--space-4)' }}>
              {lang === 'es'
                ? '¿Quieres acceso a más recursos? Regístrate o inicia sesión.'
                : 'Want access to more resources? Sign up or log in.'}
            </p>
            <Button as={Link} to="/get-involved" variant="primary" size="md">
              {lang === 'es' ? 'Crear cuenta' : 'Create Account'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
