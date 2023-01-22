import './SkillsRow.css'
import Stars from './Stars'

function SkillsRow(props) {
  return (
    <tr className="skills-row">
      <td className="td-left">{props.name}</td>
      <td className="td-right">
        <Stars numStars={props.numStars} />
      </td>
    </tr>
  );
}

export default SkillsRow;
