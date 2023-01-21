import './SkillsRow.css'
import Stars from './Stars'

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'

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
