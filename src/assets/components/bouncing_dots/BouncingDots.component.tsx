import './BouncingDots.component.css'

interface Props {
  size?: number;        // px, default 14
  color?: string;       // any CSS color, default uses currentColor
  className?: string;
  title?: string;       // accessible label, default "Loading"
}

function BouncingDots({
  size = 14,
  color = 'currentColor',
  className = '',
  title = 'Loading',
}: Props) {
  const style = { ['--dot-size' as any]: `${size}px`, ['--dot-color' as any]: color } as React.CSSProperties;

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
