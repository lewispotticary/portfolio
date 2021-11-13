import React from 'react';

import './Body.css'

import covidTrackerImage from './covidTrackerProject.JPG'

import expenseTrackerImage from './expenseTrackerProject.JPG'

import portfolioProject from './portfolioProject.JPG'

import githubImage from './githubImage.jpg'

import {Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Modal, Box, } from '@mui/material';

import Animation from '../Animation/Animation';

function Body() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    return (
        <div className="bodyContainer">
            <div className="titleContainer" id="Projects">
                <Typography variant="h2" color="white"><b>Projects.</b></Typography>
            </div>       
            <div className="cardContainer">
                <Grid container justify="center">
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia
                        component="img"
                        image={covidTrackerImage}
                        alt="green iguana"
                        className="cardRow1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Covid-19 Tracker</Typography>
                            <Typography variant="body1" color="white">
                            Covid-19 tracker web application. Built using React.JS, Material UI, Chart.JS, and Leaflet.JS. Fully responsive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h5" component="h2">Covid-19 Tracker</Typography>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>Goals of the project</Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                The goal of the Covid-19 tracker project was to use a API to pull covid-19 data and present this data using javascript librarys
                                such as Leaflet JS and Chart JS.
                                </Typography>
                                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                                Challenges Faced
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                One of the challenges faced witht covid-19 tracker
                                </Typography>
                            </Box>
                            </Modal>
                            <Box mr={1}>
                                <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="contained" href="https://musing-bassi-1d4cea.netlify.app/" target="_blank">Live Site</Button>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/coronavirus-tracker" target="_blank">Source</Button>
                        </CardActions>
                        </Animation> 
                    </Grid>
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia
                        component="img"
                        image={expenseTrackerImage}
                        alt="green iguana"
                        className="cardRow1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Expense Tracker</Typography>
                            <Typography variant="body1" color="white">
                            Expense tracker web application. Built using React.JS, Bootstrap and Chart.JS. Fully responsive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box mr={1}>
                                <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="contained" href="https://naughty-montalcini-8be930.netlify.app/" target="_blank">Live Site</Button>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/react-expense-tracker" target="_blank">Source</Button>
                        </CardActions>
                        </Animation> 
                    </Grid>
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia
                        component="img"
                        image={portfolioProject}
                        alt="green iguana"
                        className="cardRow2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Portfolio Website</Typography>
                            <Typography variant="body1" color="white">
                            My personal portfolio website. Built using React.JS, Material.UI, React Router and React Router Hash Link. Fully Responsive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box mr={1}>
                                <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/portfolio" target="_blank">Source</Button>
                        </CardActions>
                        </Animation> 
                    </Grid>
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia
                        component="img"
                        image={githubImage}
                        alt="green iguana"
                        className="cardRow2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Other Projects</Typography>
                            <Typography variant="body1" color="white" marginBottom="auto">
                            Take a look at my personal GitHub account where I store all my personal projects, also see what I'm currently working on.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" href="https://github.com/lewispotticary" target="_blank">All Projects</Button>
                        </CardActions>
                        </Animation> 
                    </Grid>
                </Grid>
            </div>     
        </div>
    )
}

export default Body
