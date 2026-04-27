import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import './Contact.css';

const SUBJECTS = [
  { en: 'General Inquiry', es: 'Consulta General' },
  { en: 'Program Information', es: 'Información de Programas' },
  { en: 'Partnership Opportunity', es: 'Oportunidad de Asociación' },
  { en: 'Volunteer / Mentor', es: 'Voluntario / Mentor' },
  { en: 'Donation', es: 'Donación' },
  { en: 'Media Inquiry', es: 'Consulta de Medios' },
  { en: 'Other', es: 'Otro' },
];

export default function Contact({ lang = 'en' }) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = lang === 'es' ? 'Tu nombre es requerido' : 'Your name is required';
    if (!form.email.trim())   e.email   = lang === 'es' ? 'Tu correo es requerido' : 'Your email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = lang === 'es' ? 'Correo inválido' : 'Invalid email';
    if (!form.subject)        e.subject = lang === 'es' ? 'Selecciona un asunto' : 'Please select a subject';
    if (!form.message.trim()) e.message = lang === 'es' ? 'Tu mensaje es requerido' : 'Your message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="page-hero page-hero--rose" aria-labelledby="contact-heading">
        <div className="container page-hero__content">
          <Badge variant="rose">{lang === 'es' ? 'Estamos aquí' : "We're here"}</Badge>
          <h1 id="contact-heading">
            {lang === 'es' ? 'Contáctanos' : 'Get in Touch'}
          </h1>
          <p>
            {lang === 'es'
              ? '¿Tienes una pregunta, quieres asociarte con nosotros, o solo necesitas hablar? Estamos aquí.'
              : 'Have a question, want to partner with us, or just need to talk? We\'re here.'}
          </p>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="contact-body section">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-wrap__title">
              {lang === 'es' ? 'Envíanos un mensaje' : 'Send Us a Message'}
            </h2>

            {status === 'success' ? (
              <div className="contact-success" role="alert">
                <span className="contact-success__icon" aria-hidden="true">✓</span>
                <p>
                  {lang === 'es'
                    ? '¡Tu mensaje fue enviado! Te responderemos pronto.'
                    : "Your message has been sent! We'll get back to you soon."}
                </p>
                <Button variant="secondary" size="sm" onClick={() => setStatus('idle')}>
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
                aria-label={lang === 'es' ? 'Formulario de contacto' : 'Contact form'}
              >
                <div className="contact-form__row">
                  <Input
                    label={lang === 'es' ? 'Tu Nombre' : 'Your Name'}
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    required
                    autoComplete="name"
                    placeholder={lang === 'es' ? 'María González' : 'Jane Smith'}
                  />
                  <Input
                    label={lang === 'es' ? 'Correo Electrónico' : 'Email Address'}
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    autoComplete="email"
                    placeholder={lang === 'es' ? 'maria@ejemplo.com' : 'jane@example.com'}
                  />
                </div>
                <Input.Select
                  label={lang === 'es' ? 'Asunto' : 'Subject'}
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                >
                  <option value="">{lang === 'es' ? 'Selecciona un asunto' : 'Select a subject'}</option>
                  {SUBJECTS.map(({ en, es }) => (
                    <option key={en} value={en}>{lang === 'es' ? es : en}</option>
                  ))}
                </Input.Select>
                <Input
                  label={lang === 'es' ? 'Mensaje' : 'Message'}
                  id="contact-message"
                  name="message"
                  type="textarea"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  placeholder={lang === 'es' ? '¿Cómo podemos ayudarte?' : 'How can we help?'}
                />
                {status === 'error' && (
                  <p className="contact-form__error" role="alert">
                    {lang === 'es'
                      ? 'Algo salió mal. Por favor intenta de nuevo.'
                      : 'Something went wrong. Please try again.'}
                  </p>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'loading'
                    ? (lang === 'es' ? 'Enviando…' : 'Sending…')
                    : (lang === 'es' ? 'Enviar Mensaje' : 'Send Message')}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <aside className="contact-info" aria-label="Contact information">
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">📍</div>
              <div>
                <h3>{lang === 'es' ? 'Ubicación' : 'Location'}</h3>
                <p>East Bronx Academy for the Future</p>
                <p>1716 Southern Blvd</p>
                <p>Bronx, NY 10460</p>
              </div>
            </div>
            <div className="contact-info__map">
              <iframe
                title={lang === 'es' ? 'Mapa de ubicación de I Am H.E.R.R' : 'I Am H.E.R.R location map'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1!2d-73.8888!3d40.8271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3b3b3b3b3b3%3A0x0!2s1716+Southern+Blvd%2C+Bronx%2C+NY+10460!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">✉️</div>
              <div>
                <h3>{lang === 'es' ? 'Correo' : 'Email'}</h3>
                <a href="mailto:hello@iamherr.org">hello@iamherr.org</a>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">🕐</div>
              <div>
                <h3>{lang === 'es' ? 'Horario' : 'Hours'}</h3>
                <p>{lang === 'es' ? 'Lun–Vie: 9am–5pm ET' : 'Mon–Fri: 9am–5pm ET'}</p>
              </div>
            </div>
            <div className="contact-info__note">
              <p>
                {lang === 'es'
                  ? '💛 Hablamos español. Todas son bienvenidas, sin importar su estatus migratorio.'
                  : '💛 We speak Spanish. Everyone is welcome regardless of immigration status.'}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
