import React from 'react'

import './Header.css';

import {Typography, Button, Fab, Slide} from '@mui/material';

import { HashLink } from 'react-router-hash-link';

import { BrowserRouter } from 'react-router-dom';

import { motion } from 'framer-motion';

function Header() {
    return (
        <BrowserRouter>
            <div className="headerContainer">
                <div className="headerContent">
                    <motion.div
                        animate={{ x: [-500, 100, 0] }}
                        transition={{ ease: "easeOut", duration: 1 }}
                    >
                        <Typography variant="h2" color="white"><b>Hi! I'm Lewis Potticary.</b></Typography>
                    </motion.div>
                    <motion.div 
                        animate={{ x: [1800, 100, 0] }}
                        transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                    >
                        <div className="box">
                            <Typography variant="h4" color="white"><b>Aspiring Front-end Developer</b></Typography>
                            <Typography className="boxText" variant="h4" color="white"><b>&nbsp;and Surfer &#10132;</b></Typography>
                        </div>
                        <div className="secondaryBox">
                            <Typography color="white">Picture By: <a href="https://www.elliscollinsphoto.co.uk/" target="_blank">Ellis Collins</a></Typography>
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{ y: [-500, 100, 0] }}
                        transition={{ ease: "easeOut", duration: 1, delay: 3.5 }}
                    >
                        <HashLink smooth className="navLinks" to="#Projects">
                            <Button className="projectButton" variant="contained">View Projects</Button>
                        </HashLink>   
                    </motion.div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Header
