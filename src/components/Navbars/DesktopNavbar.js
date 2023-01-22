import './DesktopNavbar.css'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function DesktopNavbar(props) {
  function ScrollToSection(section) {
    document.getElementById(section).scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
    <Breadcrumbs className={`desktop-navbar ${props.color}`}>
      <Link onClick={() => ScrollToSection("about")}>About</Link>
      <Link onClick={() => ScrollToSection("education")}>Education</Link>
      <Link onClick={() => ScrollToSection("experience")}>Experience</Link>
      <Link onClick={() => ScrollToSection("skills")}>Skills</Link>
      <Link onClick={() => ScrollToSection("contact")}>Contact</Link>
    </Breadcrumbs>
  );
}

export default DesktopNavbar;
