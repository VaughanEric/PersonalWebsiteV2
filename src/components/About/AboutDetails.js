import './About.css'

import Grid from '@mui/material/Grid'

function AboutDetails() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <p>
          I am an undergraduate student studying computer science and business administration at the University of Tennessee, Knoxville.
        </p>
        <p>
          Over the past few years, I have focused on full-stack development, gaining critical experience Sam's Club, Trimble Inc., undergraduate research, and personal projects.
          However, this year, I plan to explore two new areas: machine learning and iOS development.
        </p>
      </Grid>
      <Grid item xs={12} className="portrait">
        <svg viewBox="0 0 100 100">
          <defs>
            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
              <image href="./images/portrait.JPG" x="-25" width="150" height="100" />
            </pattern>
          </defs>
          <polygon points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" fill="url(#img)" stroke="#acdeaa"/>
        </svg>
      </Grid>
      <Grid item xs={12}>
        <h3 className="values-heading">Values</h3>
      </Grid>
      <Grid item xs={12}>
        <p className="quote">
          "With regard to performance, commitment, effort, dedication, there is no middle ground...
          You do something very well or not at all."
        </p>
      </Grid>
      <Grid item xs={12}>
        <p className="quote-author">
          - Ayrton Senna,
          <br />
          Former Formula One Racing World Champion
        </p>
      </Grid>
      <Grid item xs={12} className="values-list">
        <p>
          Inspired by Senna, I ensure exceptional quality in any challenge I undertake through:
        </p>
        <ul>
          <li>Devising thorough strategies</li>
          <li>Collaborating with others and listening to feedback</li>
          <li>Demonstrating relentless effort</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default AboutDetails;