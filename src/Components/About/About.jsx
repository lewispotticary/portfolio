import React from 'react'

//Import of Material UI
import {Typography} from '@mui/material';

//Import of style sheet
import './About.css';

//Import of animation function
import Animation from '../Animation/Animation';

function About() {
    return (
        <div className="aboutContainer" id="About">
            <div className="aboutContent">   
                <Typography className="test" variant="h2" color="white"><b>About.</b></Typography>  
                <Animation>
                <hr></hr>
                <div className="aboutBox">
                <Typography variant="h6" color="white"><b><p>Hi I'm Lewis. I'm aspiring web developer from Broadstairs, Kent. Looking to turn my hobby of creating 
                web applications into a career. I'm a self taught developer learning front end technologies such as React, JavaScript, HTML and CSS. Looking to secure my 
                first developer role to put my skills and knowledge on web technologies and tools I have built up throught self learning into practice. If you are interested 
                in what see, feel free to contact me though the contact form below.
                </p></b></Typography> 
                </div>
                <hr></hr>
                </Animation>
            </div>

        </div>
    )
}

export default About
