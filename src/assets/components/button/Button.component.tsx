import type { CSSProperties, ReactNode } from 'react'
import './Button.component.css'

interface myProps {
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

function Button(props: myProps) {
  return (
    <button
      type="button"
      className={`button ${props.className ?? ''}`.trim()}
      style={props.style}
      onClick={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
