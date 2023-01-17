import './DesktopNavbar.css'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

function DesktopNavbar(props) {
  return (
    <Breadcrumbs className={`desktop-navbar ${props.color}`}>
      <Link href="#about">About</Link>
      <Link href="#experience">Experience</Link>
      <Link href="#education">Education</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#contact">Contact</Link>
    </Breadcrumbs>
  );
}

export default DesktopNavbar;
