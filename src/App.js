import './App.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import AboutDetails from './components/About/AboutDetails'
import ExperienceDetails from './components/Experience/ExperienceDetails'
import EducationDetails from './components/Education/EducationDetails'
import SkillsDetails from './components/Skills/SkillsDetails'
import ContactDetails from './components/Contact/ContactDetails'

import Grid from '@mui/material/Grid'

function App() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header className="header" />
      </Grid>
      <Grid item xs={12} md={6} className="about-title">
        <Title title="About" />
      </Grid>
      <Grid item xs={12} md={6} className="about-details">
        <AboutDetails />
      </Grid>
      <Grid item xs={12} md={6} className="experience-title">
        <Title title="Experience" />
      </Grid>
      <Grid item xs={12} md={6} className="experience-details">
        <ExperienceDetails />
      </Grid>
      <Grid item xs={12} md={6} className="education-title">
        <Title title="Education" />
      </Grid>
      <Grid item xs={12} md={6} className="education-details">
        <EducationDetails />
      </Grid>
      <Grid item xs={12} md={6} className="skills-title">
        <Title title="Skills" />
      </Grid>
      <Grid item xs={12} md={6} className="skills-details">
        <SkillsDetails />
      </Grid>
      <Grid item xs={12} md={6} className="contact-title">
        <Title title="Contact" />
      </Grid>
      <Grid item xs={12} md={6} className="contact-details">
        <ContactDetails />
      </Grid>      
    </Grid>
  );
}

export default App;
