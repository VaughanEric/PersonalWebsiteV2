import './Header.css'
import DesktopNavbar from '../Navbars/DesktopNavbar'
import MobileNavbar from '../Navbars/MobileNavbar'

import Grid from '@mui/material/Grid'

function Header() {
  return (
    <Grid container spacing={0} className="header">
      <MobileNavbar />
      <Grid item xs={12} className="greeting">
        <h2>Howdy, I'm</h2>
        <h1>Eric Vaughan</h1>
      </Grid>
      <Grid item xs={12} className="navbar">
        <DesktopNavbar color="medium-green" />
      </Grid>
    </Grid>
  );
}

export default Header;
