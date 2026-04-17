import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './GetInvolved.css';

const WAYS = [
  { icon: '📚', title: 'Join a Program',      titleEs: 'Únete a un Programa',      desc: 'Enroll in one of our 10 programs and start your journey.',              descEs: 'Inscríbete en uno de nuestros 10 programas y comienza tu camino.',  link: '/programs', cta: 'Explore Programs', ctaEs: 'Explorar Programas' },
  { icon: '🤝', title: 'Become a Mentor',     titleEs: 'Conviértete en Mentora',   desc: 'Share your experience and guide a young woman in the Bronx.',           descEs: 'Comparte tu experiencia y guía a una joven del Bronx.',             link: '/contact', cta: 'Apply to Mentor', ctaEs: 'Solicitar como Mentora' },
  { icon: '💛', title: 'Donate',              titleEs: 'Donar',                    desc: 'Support our programs with a one-time or monthly donation.',             descEs: 'Apoya nuestros programas con una donación única o mensual.',        link: '/donate', cta: 'Donate Now', ctaEs: 'Donar Ahora' },
  { icon: '🤲', title: 'Volunteer',           titleEs: 'Voluntariado',             desc: 'Lend your time and skills to support workshops and community events.',  descEs: 'Presta tu tiempo y habilidades para apoyar talleres y eventos.',    link: '/contact', cta: 'Contact Us', ctaEs: 'Contáctanos' },
  { icon: '🏢', title: 'Partner With Us',     titleEs: 'Asóciate con Nosotros',    desc: 'Bring I Am Here programming to your school, organization, or business.', descEs: 'Lleva programas de I Am Here a tu escuela, organización o empresa.', link: '/contact', cta: 'Get in Touch', ctaEs: 'Contáctanos' },
  { icon: '📣', title: 'Spread the Word',     titleEs: 'Corre la Voz',            desc: 'Share our mission with your community. Every share reaches a young woman who needs us.', descEs: 'Comparte nuestra misión. Cada difusión llega a una joven que nos necesita.', link: '/contact', cta: 'Learn More', ctaEs: 'Saber Más' },
];

export default function GetInvolved({ lang = 'en' }) {
  return (
    <div className="get-involved-page">
      <section className="page-hero page-hero--rose" aria-labelledby="involved-page-heading">
        <div className="container page-hero__content">
          <Badge variant="rose">{lang === 'es' ? 'Hay un lugar para ti' : 'There is a place for you'}</Badge>
          <h1 id="involved-page-heading">
            {lang === 'es' ? 'Involúcrate' : 'Get Involved'}
          </h1>
          <p>
            {lang === 'es'
              ? 'Ya seas participante, mentora, donante o voluntaria — hay un lugar para ti en I Am Here.'
              : 'Whether you\'re a participant, mentor, donor, or volunteer — there\'s a place for you at I Am Here.'}
          </p>
        </div>
      </section>
      <section className="section" aria-labelledby="ways-heading">
        <div className="container">
          <h2 id="ways-heading" className="sr-only">
            {lang === 'es' ? 'Formas de involucrarse' : 'Ways to get involved'}
          </h2>
          <div className="involved-grid">
            {WAYS.map(({ icon, title, titleEs, desc, descEs, link, cta, ctaEs }) => (
              <Card key={title} hover>
                <Card.Body>
                  <div className="involved-card__icon" aria-hidden="true">{icon}</div>
                  <h3 className="involved-card__title">{lang === 'es' ? titleEs : title}</h3>
                  <p className="involved-card__desc">{lang === 'es' ? descEs : desc}</p>
                  <Button as={Link} to={link} variant="primary" size="sm" className="involved-card__btn">
                    {lang === 'es' ? ctaEs : cta}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
