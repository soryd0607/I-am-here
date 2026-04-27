import { useState } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import './Donate.css';

const PRESET_AMOUNTS = [
  { amount: 25,  impact: 'Workshop materials for one participant',  impactEs: 'Materiales de taller para una participante' },
  { amount: 50,  impact: 'A prom dress for a young woman',          impactEs: 'Un vestido de graduación para una joven' },
  { amount: 100, impact: 'One month of mentorship',                 impactEs: 'Un mes de mentoría' },
  { amount: 250, impact: 'Scholarship support',                     impactEs: 'Apoyo de beca' },
];

export default function Donate({ lang = 'en' }) {
  const [selected, setSelected]   = useState(50);
  const [custom, setCustom]       = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [loading, setLoading]     = useState(false);

  const finalAmount = custom ? parseInt(custom, 10) : selected;

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 1) return;
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/donations/create-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalAmount, isRecurring: isMonthly }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="donate-page">
      <section className="page-hero page-hero--rose" aria-labelledby="donate-page-heading">
        <div className="container page-hero__content">
          <Badge variant="gold">{lang === 'es' ? 'Haz la diferencia' : 'Make a difference'}</Badge>
          <h1 id="donate-page-heading">
            {lang === 'es' ? 'Apoya I Am H.E.R.R' : 'Support I Am H.E.R.R'}
          </h1>
          <p>
            {lang === 'es'
              ? 'Tu donación financia directamente programas que cambian vidas en el Bronx.'
              : 'Your donation directly funds programs that change lives in the Bronx.'}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container donate-grid">
          {/* Donation widget */}
          <div className="donate-widget">
            <Card>
              <Card.Body>
                <h2 className="donate-widget__title">
                  {lang === 'es' ? 'Elige tu monto' : 'Choose Your Amount'}
                </h2>

                {/* Preset amounts */}
                <div className="donate-presets" role="radiogroup" aria-label={lang === 'es' ? 'Montos de donación' : 'Donation amounts'}>
                  {PRESET_AMOUNTS.map(({ amount, impact, impactEs }) => (
                    <button
                      key={amount}
                      role="radio"
                      aria-checked={selected === amount && !custom}
                      className={`preset-btn ${selected === amount && !custom ? 'preset-btn--active' : ''}`}
                      onClick={() => { setSelected(amount); setCustom(''); }}
                    >
                      <span className="preset-btn__amount">${amount}</span>
                      <span className="preset-btn__impact">{lang === 'es' ? impactEs : impact}</span>
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="donate-custom">
                  <Input
                    label={lang === 'es' ? 'Monto personalizado' : 'Custom amount'}
                    id="custom-amount"
                    type="number"
                    min="1"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                    placeholder="$"
                  />
                </div>

                {/* Monthly toggle */}
                <label className="donate-monthly">
                  <input
                    type="checkbox"
                    checked={isMonthly}
                    onChange={() => setIsMonthly(v => !v)}
                    className="donate-monthly__check"
                  />
                  <span className="donate-monthly__label">
                    {lang === 'es' ? 'Hacer donación mensual recurrente' : 'Make this a monthly recurring gift'}
                  </span>
                </label>

                {/* Total */}
                {(finalAmount > 0) && (
                  <div className="donate-total">
                    <span>{lang === 'es' ? 'Tu donación:' : 'Your donation:'}</span>
                    <strong>${finalAmount}{isMonthly ? (lang === 'es' ? '/mes' : '/mo') : ''}</strong>
                  </div>
                )}

                <Button
                  variant="gold"
                  size="lg"
                  onClick={handleDonate}
                  disabled={loading || !finalAmount || finalAmount < 1}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {loading
                    ? (lang === 'es' ? 'Redirigiendo…' : 'Redirecting…')
                    : (lang === 'es' ? `Donar $${finalAmount || ''}` : `Donate $${finalAmount || ''}`)}
                </Button>
                <p className="donate-secure">
                  🔒 {lang === 'es' ? 'Pago seguro a través de Stripe' : 'Secure payment via Stripe'}
                </p>
              </Card.Body>
            </Card>
          </div>

          {/* Impact info */}
          <div className="donate-impact">
            <h2 className="donate-impact__title">
              {lang === 'es' ? 'Tu Impacto' : 'Your Impact'}
            </h2>
            <div className="donate-impact__list">
              {PRESET_AMOUNTS.map(({ amount, impact, impactEs }) => (
                <div key={amount} className="impact-row">
                  <span className="impact-row__amount">${amount}</span>
                  <span className="impact-row__label">{lang === 'es' ? impactEs : impact}</span>
                </div>
              ))}
            </div>
            <div className="donate-impact__note">
              <p>
                {lang === 'es'
                  ? 'I Am H.E.R.R es una organización sin fines de lucro. Tu donación puede ser deducible de impuestos.'
                  : 'I Am H.E.R.R is a nonprofit organization. Your donation may be tax deductible.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
