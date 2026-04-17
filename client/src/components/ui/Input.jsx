import './Input.css';

export default function Input({
  label,
  id,
  error,
  hint,
  type = 'text',
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="input-field input-field--textarea"
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          aria-invalid={error ? 'true' : undefined}
          required={required}
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          className="input-field"
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          aria-invalid={error ? 'true' : undefined}
          required={required}
          {...props}
        />
      )}
      {hint && !error && (
        <p id={`${id}-hint`} className="input-hint">{hint}</p>
      )}
      {error && (
        <p id={`${id}-error`} className="input-error" role="alert">{error}</p>
      )}
    </div>
  );
}

Input.Select = function InputSelect({ label, id, error, required = false, children, className = '', ...props }) {
  return (
    <div className={`input-group ${error ? 'input-group--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="input-required" aria-hidden="true"> *</span>}
        </label>
      )}
      <select id={id} className="input-field input-field--select" required={required} {...props}>
        {children}
      </select>
      {error && <p id={`${id}-error`} className="input-error" role="alert">{error}</p>}
    </div>
  );
};
