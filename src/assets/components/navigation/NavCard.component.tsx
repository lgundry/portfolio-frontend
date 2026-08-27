import './NavCard.component.css'
import type { IconType } from 'react-icons'
import Button from '../button/Button.component.tsx'

interface myProps {
  title: string;
  destination: string;
  icon: IconType;
}

function NavCard(props: myProps) {
  const Icon = props.icon;
  return (
    <div className="navcard__container">
      <Button onPress={() => console.log("clicked")}>
        <Icon className="navcard__icon"/>
        <h3 className="navcard__text">{ props.title }</h3>
      </Button>
    </div>
  )

}
export default NavCard;
