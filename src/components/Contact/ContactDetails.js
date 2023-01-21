import './Contact.css'

import Grid from '@mui/material/Grid'

function ContactDetails() {
  return (
    <div className="contact-grid-container">
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <p>I believe that I have the experience and quick-learning ability to make an immediate impact in any setting.</p>
      </Grid>
      <Grid item xs={12}>
        <p>If you wish to collaborate on an exciting idea or have a business inquiry, please feel welcome to reach out to me!</p>
      </Grid>
      <Grid item xs={12}>
        <p>I am only available for freelance opportunities, except for the summer during which I am also available for internships.</p>
      </Grid>
      <Grid item xs={12}>
        <h3 className="contact-name">Eric Vaughan</h3>
      </Grid>
      <Grid item xs={12}>
        <p className="personal-title">Undergraduate Programmer and Full-Stack Developer</p>
      </Grid>
      <Grid item xs={12}>
        <a href="https://www.linkedin.com/in/vaughaneric/" className="contact-link">linkedin.com/in/vaughaneric</a>
      </Grid>
      <Grid item xs={12}>
        <a href="mailto:hello.ericvaughan@gmail.com" className="contact-link">hello.ericvaughan@gmail.com</a>
      </Grid>
      <Grid item xs={12}>
        <p className="update-date">Site by Eric Vaughan (Updated as of January 2023)</p>
      </Grid>
    </Grid>
    </div>
  );
}

export default ContactDetails;