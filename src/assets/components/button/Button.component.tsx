import './Button.component.css'

interface myProps {
  style: {};
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

function Button(props: myProps) {
  return (
    <button
      type="button"
      className="button"
      style={props.style}
      onClick={props.onPress}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

