import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './NotFound.css';

export default function NotFound({ lang = 'en' }) {
  return (
    <div className="not-found section">
      <div className="container not-found__inner">
        <div className="not-found__num" aria-hidden="true">404</div>
        <h1>{lang === 'es' ? 'Página no encontrada' : 'Page Not Found'}</h1>
        <p>
          {lang === 'es'
            ? 'La página que buscas no existe. Vuelve al inicio y encuentra lo que necesitas.'
            : "The page you're looking for doesn't exist. Head back home and find what you need."}
        </p>
        <Button as={Link} to="/" variant="primary" size="lg">
          {lang === 'es' ? 'Volver al inicio' : 'Back to Home'}
        </Button>
      </div>
    </div>
  );
}
