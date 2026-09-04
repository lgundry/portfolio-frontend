import './SkillCard.component.css'

interface myProps {
  label: string;
  image: string;
}

function SkillCard(props: myProps) {
  return (
    <div className="skillCard__container">
      <img className="skillCard__image" src={props.image} alt={props.label} />
      <h3 className="skillCard__label">{props.label}</h3>
    </div>
  )
}
export default SkillCard;
