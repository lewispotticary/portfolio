import React from 'react'

import bannerImage from './bannerImage.png'

import './Header.css';

import {Typography, Button, Fab} from '@mui/material';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContent">
                <Typography variant="h2" color="white"><b>Hi! I'm Lewis Potticary</b></Typography>
                <div className="box">
                    <Typography variant="h4" color="white"><b>Aspiring Front-end Developer</b></Typography>
                    <Typography className="boxText" variant="h4" color="white"><b>&nbsp;and Surfer &#10132;</b></Typography>
                </div>
                <Button className="projectButton" variant="contained">View Projects</Button>
            </div>
        </div>
    )
}

export default Header
