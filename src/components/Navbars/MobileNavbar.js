import './MobileNavbar.css'

import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

function MobileNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function HandleDrawerToggle() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  var sections = [
    {buttonName: "About", sectionId: "about"},
    {buttonName: "Education", sectionId: "education"},
    {buttonName: "Experience", sectionId: "experience"},
    {buttonName: "Skills", sectionId: "skills"},
    {buttonName: "Contact", sectionId: "contact"}
  ]

  function ScrollToSection(sectionId) {
    setIsDrawerOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId).scrollIntoView({behavior: "smooth", block: "end"});
    }, 0);
  }

  return (
    <div className="mobile-navbar">
      <IconButton size="large" onClick={HandleDrawerToggle}>
        <MenuIcon fontSize="large" className="menu-button" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={HandleDrawerToggle}
      >
        <Box
          p={2}
          width="200px"
          textAlign="center"
          role="presentation"
        >
          <List>
            {sections.map((section) => (
              <ListItem key={section.buttonName} className={section.buttonName}>
                <ListItemButton onClick={() => ScrollToSection(section.sectionId)}>
                  <ListItemText primary={section.buttonName} className="drawer-text" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default MobileNavbar;
