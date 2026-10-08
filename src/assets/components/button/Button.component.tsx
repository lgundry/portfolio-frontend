import './Button.component.css'

interface myProps {
  style?: {};
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
}

function Button(props: myProps) {
  return (
    <button
      type="button"
      className={`button ${props.className ?? ''}`}
      style={props.style}
      onClick={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
