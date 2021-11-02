import React from 'react'

import {Typography, Input} from '@mui/material';

function Contact() {
    return (
        <div className="contactContainer">
            <Typography variant="h2" color="white"><b>Contact</b></Typography>
            
            <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact-form"/>
                <Input type="text" placeholder="Name" name="name"/>
                <input type="text" placeholder="Name" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <textarea name="message" placeholder="Enter your message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact
