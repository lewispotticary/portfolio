import React from 'react'

//Import style sheet
import './Navigation.css'

//Import Logo image
import logo from './Logo.png'

//Import of Material UI components
import {Breadcrumbs, Link, Typography} from '@mui/material';

function Navigation() {
    return (
        <div className="navigationContainer">
            <div className="navigationContent">
                <img className="logo" src={logo} alt="Webiste Logo"/>
                <Breadcrumbs aria-label="breadcrumb" color="white" >
                    <Link underline="none" color="white" variant="h6" href="/">Projects</Link>
                    <Link underline="none" color="white" variant="h6" href="">About</Link>
                    <Link underline="none" color="white" variant="h6" href="">Contact</Link>
                </Breadcrumbs>
            </div>
        </div>
    )
}

export default Navigation
