import './Education.css'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function EducationDetails() {
  var isUtkOpen = false;
  var isSiegelOpen = false;

  function OnUtkClick() {
    if (!isUtkOpen) {
      setTimeout(() => {
        document.getElementById("utk").scrollIntoView({behavior: "smooth", block: "start"});
      }, 175);
      isUtkOpen = true;
    } else {
      setTimeout(() => {
        document.getElementById("utk").scrollIntoView({behavior: "smooth", block: "start"});
      }, 175);
      isUtkOpen = false;
    }
  }

  function OnSiegelClick() {
    if (!isSiegelOpen) {
      setTimeout(() => {
        document.getElementById("siegel").scrollIntoView({behavior: "smooth", block: "start"});
      }, 175);
      isSiegelOpen = true;
    } else {
      setTimeout(() => {
        document.getElementById("siegel").scrollIntoView({behavior: "smooth", block: "end"});
      }, 175);
      isSiegelOpen = false;
    }
  }

  return (
    <div>
      <Accordion
        onClick={OnUtkClick} 
        elevation={0}         
        sx={{
          '&:before': {
            display: 'none',
          }
        }} 
        id="utk">
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon id="icon" />}
          disableGutters={true}
          className="utk-summary"
        >
          <Typography id="school-name">University of Tennessee, Knoxville</Typography>
          <img src="./images/vols.png" alt="UTK Vols Logo" className="school-logo" />
        </AccordionSummary>
        <AccordionDetails id="utk-details">
          <ul>
            <li>Senior in the Tickle College of Engineering Class of 2024</li>
            <li>Current GPA of 4.0</li>
            <li>Major: Computer Science</li>
            <li>Minor: Business Administration</li>
            <li>The 2021/2022 Gonzalez Outstanding Computer Science Sophomore</li>
          </ul>
          <h3 className="education-category">Notable Courses</h3>
          <ul>
            <li>Algorithm Analysis & Automata</li>
            <li>Computer Organization</li>
            <li>Data Structures & Algorithms I</li>
            <li>Data Structures & Algorithms II</li>
            <li>Discrete Structures</li>
            <li>Fundamentals of Digital Archeology</li>
            <li>Introduction to Cybersecurity</li>
            <li>Introduction to Data Mining and Analytics</li>
            <li>Introduction to Machine Learning</li>
            <li>Operating Systems</li>
            <li>Programming Languages and Systems</li>
            <li>Software Engineering</li>
            <li>Systems Programming</li>
          </ul>
          <h3 className="education-category">Extracurriculars</h3>
          <ul>
            <li>Chancellor's Honors College (2020-Present)</li>
            <li>Intramural Table Tennis (2020-Present)</li>
            <li>UTK Roundnet (2021-Present)</li>
            <li>Undergraduate Research (2022-Present)</li>
            <li>Hack4Impact UTK (2021-2022)</li>
            <li>UTK Collegiate Entrepreneurs' Organization (2021)</li>
          </ul>
          <h3 className="education-category">Service</h3>
          <ul>
            <li>Raising a Voice (2021-2022)</li>
            <li>Knoxville Area Rescue Mission (2021)</li>
            <li>UTK Gardens (2021)</li>
            <li>UTK Trash Cleanup (2020)</li>
            <li>Odd Fellows Cemetery (2020)</li>
            <li>UTK Coronavirus Test Kits Assembly (2020)</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onClick={OnSiegelClick} 
        elevation={0}         
        sx={{
          '&:before': {
            display: 'none',
          }
        }} 
        id="siegel">
        <AccordionSummary expandIcon={<ExpandMoreIcon id="icon" />} className="siegel-summary">
          <Typography id="school-name">Siegel High School</Typography>
          <img src="./images/siegel.png" alt="Siegel Stars Logo" className="school-logo" />
        </AccordionSummary>
        <AccordionDetails id="siegel-details">
          <ul>
            <li>Valedictorian of the Class of 2020</li>
            <li>GPA of 4.0</li>
            <li>Over 50 Service Hours</li>
          </ul>
          <h3 className="education-category">Notable Extracurriculars</h3>
          <ul>
            <li>Latin Club (Cofounder)</li>
            <li>Excalibur Club (President)</li>
            <li>National Honors Society (President)</li>
            <li>Soccer Team (Captain)</li>
            <li>Key Club (Secretary)</li>
          </ul>
          <h3 className="education-category">Notable Awards and Honors</h3>
          <ul>
            <li>Most Outstanding AP Calculus BC Student (2020)</li>
            <li>Most Outstanding AP Latin Student (2020)</li>
            <li>Most Outstanding AP Physics I Student (2020)</li>
            <li>Most Intellectual for Siegel High Class of 2020 (2019</li>
            <li>Tennessee Governor’s School for Emerging Technology Scholar (2019)</li>
            <li>Most Outstanding AP Biology Student (2019)</li>
            <li>Most Outstanding AP Language and Composition Student (2019)</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default EducationDetails;