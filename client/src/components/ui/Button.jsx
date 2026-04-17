import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  );
}
