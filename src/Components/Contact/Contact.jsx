import React from 'react'

import {Typography, Input, Button} from '@mui/material';

import './Contact.css'

function Contact() {
    return (
        <div className="contactContainer">
            <Typography variant="h2" color="white"><b>Contact</b></Typography>
            
            <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            className="formContent"
            >
                <input type="hidden" name="form-name" value="contact-form"/>
                <input type="text" placeholder="Name" name="name"/>
                <input type="text" placeholder="Email" name="email"/>
                <textarea name="message" placeholder="Enter your message"></textarea>
                <Button sx={{ p: 2 }} type="submit" variant="contained" className="formSubmit">Submit</Button>
                
            </form>
        </div>
    )
}

export default Contact
