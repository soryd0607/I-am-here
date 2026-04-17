import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import './Events.css';

export default function Events({ lang = 'en' }) {
  return (
    <div className="events-page">
      <section className="page-hero page-hero--rose" aria-labelledby="events-heading">
        <div className="container page-hero__content">
          <Badge variant="rose">{lang === 'es' ? 'Próximos' : 'Upcoming'}</Badge>
          <h1 id="events-heading">{lang === 'es' ? 'Eventos' : 'Events'}</h1>
          <p>
            {lang === 'es'
              ? 'Talleres, reuniones comunitarias, ceremonias de entrega de vestidos y mucho más.'
              : 'Workshops, community gatherings, dress giveaways, and more.'}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container events-coming-soon">
          <div className="events-coming-soon__icon" aria-hidden="true">📅</div>
          <h2>{lang === 'es' ? 'Próximamente' : 'Coming Soon'}</h2>
          <p>
            {lang === 'es'
              ? 'Estamos preparando nuestro calendario de eventos. Vuelve pronto o contáctanos para más información.'
              : "We're preparing our events calendar. Check back soon or contact us for information."}
          </p>
          <Button as={Link} to="/contact" variant="primary" size="md">
            {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
