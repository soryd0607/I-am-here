import './Badge.css';

export default function Badge({ children, variant = 'rose', className = '' }) {
  return (
    <span className={`badge badge--${variant} ${className}`}>
      {children}
    </span>
  );
}
