import React from 'react'

//Import style sheet
import './Navigation.css'

//Import of Material UI components
import {Breadcrumbs, Link, Typography} from '@mui/material';

import { HashLink } from 'react-router-hash-link';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

import { BrowserRouter } from 'react-router-dom';

function Navigation() {

    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
    
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Projects', 'About', 'Contact'].map((text, index) => (
            <div className="drawerContent">
              <Link underline="none" color="white" variant="h6" href="/"><b><HashLink smooth className="navLinks" to={"#" + text}>{text}</HashLink></b></Link>
            </div>
            ))}
        </List> 
      </Box>
    );

    const logo = "{LP}"

    return (
        <BrowserRouter>
          <div className="navigationContainer" id="Navigation">
              <div className="navigationContent">
                  <Typography variant="h2" color="white"><b>{logo}</b></Typography>
                  <Breadcrumbs className="breadcrumbMenu" aria-label="breadcrumb" color="white" >
                    <Link underline="none" color="white" variant="h6" href="/"><b><HashLink smooth className="navLinks" to="#Projects">Projects</HashLink></b></Link>
                    <Link underline="none" color="white" variant="h6" href=""><b><HashLink smooth className="navLinks" to="#About">About</HashLink></b></Link>
                    <Link underline="none" color="white" variant="h6" href=""><b><HashLink smooth className="navLinks" to="#Contact">Contact</HashLink></b></Link>
                  </Breadcrumbs>
                  {['right'].map((anchor) => (
                  <React.Fragment key={anchor}>
                  <MenuIcon style={{fill: "white", fontSize: 50}}  onClick={toggleDrawer(anchor, true)}/>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    PaperProps={{
                      sx: {
                        backgroundColor: "black",
                        color: "white",
                      }
                    }}
                  >
                    {list(anchor)}
                  </Drawer>
                  </React.Fragment>
              ))}
              </div>
          </div>
        </BrowserRouter>
    )
}

export default Navigation
