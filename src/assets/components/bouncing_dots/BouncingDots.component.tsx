import './BouncingDots.component.css'

interface Props {
  size?: number;        // px, default 14
  className?: string;
  title?: string;       // accessible label, default "Loading"
}

function BouncingDots({
  size = 14,
  className = '',
  title = 'Loading',
}: Props) {
  const style = { ['--dot-size' as any]: `${size}px`} as React.CSSProperties;

  return (
    <div
      className={`bouncing-dots ${className}`}
      style={style}
      role="status"
      aria-live="polite"
      aria-label={title}
    >
      <span className="sr-only">{title}…</span>
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
    </div>
  );
}

export default BouncingDots;
