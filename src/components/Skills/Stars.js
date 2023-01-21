import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import React from 'react'

function Stars(props) {
  var stars = [];
  var numStars = props.numStars
  for (var i = 0; i < 5; i++) {
    if (numStars >= 1) stars.push(<StarOutlinedIcon className="star-icon" />);
    else if (numStars == 0.5) stars.push(<StarHalfOutlinedIcon className="star-icon" />);
    else stars.push(<StarBorderOutlinedIcon className="star-icon" />);
    numStars--;
  }
  
  return (
    <React.Fragment>{stars}</React.Fragment>
  );
}

export default Stars;