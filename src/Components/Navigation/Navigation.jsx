import React from 'react'

//Import style sheet
import './Navigation.css'

//Import Logo image
import logo from './Logo.png'

//Import of Material UI components
import {Breadcrumbs, Link, Typography} from '@mui/material';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
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
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Projects', 'About', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      );

    const logo = "{LP}"

    return (
        <div className="navigationContainer">
            <div className="navigationContent">
                <Typography variant="h2" color="white"><b>{logo}</b></Typography>
                <Breadcrumbs className="breadcrumbMenu" aria-label="breadcrumb" color="white" >
                    <Link underline="none" color="white" variant="h6" href="/"><b>Projects</b></Link>
                    <Link underline="none" color="white" variant="h6" href=""><b>About</b></Link>
                    <Link underline="none" color="white" variant="h6" href=""><b>Contact</b></Link>
                </Breadcrumbs>
                {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                <MenuIcon style={{fill: "white", fontSize: 50}}  onClick={toggleDrawer(anchor, true)}/>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
            </div>
        </div>
    )
}

export default Navigation
