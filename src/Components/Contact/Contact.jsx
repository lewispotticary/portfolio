import React from 'react'

import {Typography} from '@mui/material';

function Contact() {
    return (
        <div className="contactContainer">
            <Typography variant="h2" color="white"><b>Contact</b></Typography>
            
            <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                
                <input type="hidden" name="form-name" value="contact"/>

                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export default Contact
