import './ExperienceCard.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function ExperienceCard(props) {
  return (
    <Card>
      <CardContent className="card-content">
        <h3 className="card-heading">{props.heading}</h3>
        <p className="card-subheading">{props.subheading}</p>
        <p className="card-date">{props.date}</p>
        <ul>
          {props.details.map((detail) =>
            <li>{detail}</li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;