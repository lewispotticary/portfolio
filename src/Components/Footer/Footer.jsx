import React from 'react'

import './Footer.css'

import { HashLink } from 'react-router-hash-link';

import { BrowserRouter } from 'react-router-dom';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import linkedinLogo from './linkedinLogo.png'

import githubLogo from './githubLogo.png'

function Footer() {
    
    return (
        <BrowserRouter>
            <div className="footerContainer">
                <div className="footerContentRow1">
                    <button><HashLink smooth className="navLinks" to="#Navigation"><ExpandLessIcon className="upArrow" style={{ fontSize: '300%' }}/></HashLink></button> 
                </div>
                <hr />
                <div className="footerContentRow2">
                    <a className="test1" href="https://www.linkedin.com/in/lewispotticary/" target="_blank"><img className="footerImages" src={linkedinLogo} alt="" /></a>
                    <a href="https://github.com/lewispotticary" target="_blank"><img hr className="footerImages" src={githubLogo} alt="" /></a>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Footer
