import './SkillCard.component.css'

interface myProps {
  label: string;
  image: string;
}

function SkillCard(props: myProps) {
  return (
    <div className="skillCard__container">
      <img src={image} alt={label} />
      <h3>{label}</h3>
    </div>
  )
}
export default SkillCard;
