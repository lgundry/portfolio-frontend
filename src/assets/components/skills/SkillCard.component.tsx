import './SkillCard.component.css'

interface myProps {
  label: string;
<<<<<<< Updated upstream
  image: string;
=======
  icon: string;
>>>>>>> Stashed changes
}

function SkillCard(props: myProps) {
  return (
    <div className="skillCard__container">
<<<<<<< Updated upstream
      <img src={image} alt={label} />
=======
>>>>>>> Stashed changes
      <img src={icon} alt={label} />
      <h3>{label}</h3>
    </div>
  )
}
export default SkillCard;
