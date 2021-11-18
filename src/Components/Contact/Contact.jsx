import React from 'react'

//Import of Material UI
import {Typography, Button} from '@mui/material';

//Import of style sheet
import './Contact.css'

//Import of Animation function
import Animation from '../Animation/Animation';

function Contact() {
    return (
        <div>
        <div className="contactTitle" id="Contact">
            <Typography variant="h2" color="white"><b>Contact.</b></Typography>
        </div>
        <Animation>
        <div className="contactContainer">
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
        </Animation>
        </div>
    )
}

export default Contact
