import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import './About.css';

const VALUES = [
  { icon: '🤝', title: 'Community First',    titleEs: 'Comunidad Primero',    desc: 'Every decision we make centers the young women we serve and the community they come from.', descEs: 'Cada decisión que tomamos centra a las jóvenes que servimos y la comunidad de la que provienen.' },
  { icon: '✊', title: 'Radical Inclusion',  titleEs: 'Inclusión Radical',    desc: 'We welcome everyone — regardless of immigration status, background, age, or circumstance.', descEs: 'Damos la bienvenida a todas — sin importar estatus migratorio, origen, edad o circunstancias.' },
  { icon: '💡', title: 'Real Support',       titleEs: 'Apoyo Real',           desc: 'We deliver direct programs, not just referrals. Real workshops, real mentorship, real resources.', descEs: 'Ofrecemos programas directos, no solo referencias. Talleres reales, mentoría real, recursos reales.' },
  { icon: '🌱', title: 'Growth for All',     titleEs: 'Crecimiento para Todas', desc: 'We invest in the growth of every young woman — and in the growth of our team and our community.', descEs: 'Invertimos en el crecimiento de cada joven — y en el crecimiento de nuestro equipo y comunidad.' },
  { icon: '🔊', title: 'Amplify Voices',     titleEs: 'Amplificar Voces',     desc: 'We believe young women have the answers. Our job is to amplify their voices and create space for them to lead.', descEs: 'Creemos que las jóvenes tienen las respuestas. Nuestro trabajo es amplificar sus voces y crear espacio para que lideren.' },
  { icon: '💛', title: 'Love as Practice',   titleEs: 'El Amor como Práctica', desc: 'We show up with warmth, care, and genuine love for the young women in our community every single day.', descEs: 'Nos presentamos con calidez, cuidado y amor genuino por las jóvenes de nuestra comunidad cada día.' },
];

const TEAM = [
  { name: 'Founder & Executive Director', role: 'I Am H.E.R.R', placeholder: true },
  { name: 'Program Director', role: 'I Am H.E.R.R', placeholder: true },
  { name: 'Community Outreach Coordinator', role: 'I Am H.E.R.R', placeholder: true },
  { name: 'Mentor Coordinator', role: 'I Am H.E.R.R', placeholder: true },
];

export default function About({ lang = 'en' }) {
  return (
    <div className="about">
      {/* PAGE HERO */}
      <section className="page-hero page-hero--rose" aria-labelledby="about-heading">
        <div className="container page-hero__content">
          <Badge variant="white">
            {lang === 'es' ? 'Nuestra historia' : 'Our story'}
          </Badge>
          <h1 id="about-heading">
            {lang === 'es' ? 'Sobre I Am H.E.R.R' : 'About I Am H.E.R.R'}
          </h1>
          <p>
            {lang === 'es'
              ? 'Una organización del Bronx que cree en el poder ilimitado de las jóvenes.'
              : 'A Bronx organization that believes in the boundless power of young women.'}
          </p>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="about-mission section" aria-labelledby="mission-heading">
        <div className="container about-mission__grid">
          <div className="about-mission__item">
            <div className="about-mission__icon" aria-hidden="true">🎯</div>
            <h2 id="mission-heading">
              {lang === 'es' ? 'Nuestra Misión' : 'Our Mission'}
            </h2>
            <p>
              {lang === 'es'
                ? 'Empoderar a las jóvenes sin importar su origen, estatus migratorio o circunstancias, entregando programas directos que abren puertas, construyen confianza y crean cambios duraderos en el Bronx y más allá.'
                : 'Empower young women regardless of background, immigration status, or circumstance by delivering direct programs that open doors, build confidence, and create lasting change in the Bronx and beyond.'}
            </p>
          </div>
          <div className="about-mission__item">
            <div className="about-mission__icon" aria-hidden="true">🌟</div>
            <h2>{lang === 'es' ? 'Nuestra Visión' : 'Our Vision'}</h2>
            <p>
              {lang === 'es'
                ? 'Un Bronx donde cada joven tiene el apoyo, los recursos y la confianza para convertirse en la líder que ella sabe que puede ser — en su familia, su comunidad y el mundo.'
                : 'A Bronx where every young woman has the support, resources, and confidence to become the leader she knows she can be — in her family, her community, and the world.'}
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story section" aria-labelledby="story-heading">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <Badge variant="rose">{lang === 'es' ? 'Nuestra historia' : 'Our story'}</Badge>
            <h2 id="story-heading">
              {lang === 'es' ? 'Cómo Comenzó Todo' : 'How It All Started'}
            </h2>
            <p>
              {lang === 'es'
                ? 'I Am H.E.R.R nació de la simple pero poderosa creencia de que las jóvenes del Bronx merecen más que promesas — merecen programas reales, apoyo real y personas que aparezcan para ellas sin importar qué.'
                : 'I Am H.E.R.R was born from the simple but powerful belief that young women in the Bronx deserve more than promises — they deserve real programs, real support, and real people who show up for them no matter what.'}
            </p>
            <p>
              {lang === 'es'
                ? 'Comenzamos con talleres comunitarios y creció hasta convertirse en una plataforma completa de programas diseñados para acompañar a las jóvenes en cada etapa de su vida: educación, carrera, salud mental, emprendimiento, y más.'
                : 'We started with community workshops and grew into a full platform of programs designed to meet young women at every stage of their lives: education, career, mental health, entrepreneurship, and beyond.'}
            </p>
            <p>
              {lang === 'es'
                ? 'No importa tu estatus migratorio, tu trasfondo, o lo que hayas vivido — aquí hay un lugar para ti.'
                : 'No matter your immigration status, your background, or what you\'ve been through — there is a place for you here.'}
            </p>
            <Button as={Link} to="/programs" variant="primary" size="md">
              {lang === 'es' ? 'Explorar Programas' : 'Explore Our Programs'}
            </Button>
          </div>
          <div className="about-story__visual" aria-hidden="true">
            <div className="about-story__img-placeholder">
              <span>📍</span>
              <p>East Bronx Academy for the Future</p>
              <p style={{ fontSize: 'var(--text-sm)', opacity: 0.75 }}>1716 Southern Blvd, Bronx, NY 10460</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values section" aria-labelledby="values-heading">
        <div className="container">
          <div className="about-values__header text-center">
            <Badge variant="gold">{lang === 'es' ? 'Lo que nos guía' : 'What guides us'}</Badge>
            <h2 id="values-heading">
              {lang === 'es' ? 'Nuestros Valores' : 'Our Values'}
            </h2>
          </div>
          <div className="about-values__grid">
            {VALUES.map(({ icon, title, titleEs, desc, descEs }) => (
              <Card key={title} variant="flat" className="value-card">
                <Card.Body>
                  <div className="value-card__icon" aria-hidden="true">{icon}</div>
                  <h3 className="value-card__title">{lang === 'es' ? titleEs : title}</h3>
                  <p className="value-card__desc">{lang === 'es' ? descEs : desc}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team section" aria-labelledby="team-heading">
        <div className="container">
          <div className="about-team__header text-center">
            <Badge variant="rose">{lang === 'es' ? 'Las personas detrás' : 'The people behind it'}</Badge>
            <h2 id="team-heading">
              {lang === 'es' ? 'Nuestro Equipo' : 'Our Team'}
            </h2>
            <p>
              {lang === 'es'
                ? 'Un equipo dedicado y apasionado que cree en el poder de cada joven.'
                : 'A passionate, dedicated team who believes in the power of every young woman.'}
            </p>
          </div>
          <div className="about-team__grid">
            {TEAM.map(({ name, role }) => (
              <div key={name} className="team-card">
                <div className="team-card__avatar" aria-hidden="true">
                  <span>👤</span>
                </div>
                <h3 className="team-card__name">{name}</h3>
                <p className="team-card__role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="about-cta section" aria-labelledby="join-heading">
        <div className="container about-cta__inner">
          <h2 id="join-heading">
            {lang === 'es' ? '¿Lista para Ser Parte de Esto?' : 'Ready to Be Part of This?'}
          </h2>
          <p>
            {lang === 'es'
              ? 'Únete a un programa, conviértete en mentora, o apoya nuestro trabajo con una donación.'
              : 'Join a program, become a mentor, or support our work with a donation.'}
          </p>
          <div className="about-cta__btns">
            <Button as={Link} to="/programs" variant="primary" size="lg">
              {lang === 'es' ? 'Explorar Programas' : 'Explore Programs'}
            </Button>
            <Button as={Link} to="/donate" variant="gold" size="lg">
              {lang === 'es' ? 'Donar' : 'Donate'}
            </Button>
            <Button as={Link} to="/contact" variant="secondary" size="lg">
              {lang === 'es' ? 'Contáctanos' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
