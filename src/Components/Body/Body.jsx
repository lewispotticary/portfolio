import React from 'react';

import './Body.css'

import covidTrackerImage from './covidTrackerProject.JPG'

import expenseTrackerImage from './expenseTrackerProject.JPG'

import portfolioProject from './portfolioProject.JPG'

import githubImage from './githubImage.png'

import {Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Modal, Box, } from '@mui/material';

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
                <Typography variant="h2" color="white"><b>Projects</b></Typography>
            </div>
            <div className="cardContainer">
                <Grid container justify="center">
                    <Grid item component={Card} xs={12} md={3.5} className="card">
                        <CardMedia
                        component="img"
                        image={covidTrackerImage}
                        alt="green iguana"
                        className="cardRow1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Covid-19 Tracker</Typography>
                            <Typography variant="body1" color="black">
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
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </Box>
                            </Modal>
                            <Box mr={1}>
                                <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="contained" href="https://musing-bassi-1d4cea.netlify.app/" target="_blank">Live Site</Button>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/coronavirus-tracker" target="_blank">Source</Button>
                        </CardActions>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3.5} className="card">
                        <CardMedia
                        component="img"
                        image={expenseTrackerImage}
                        alt="green iguana"
                        className="cardRow1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Expense Tracker</Typography>
                            <Typography variant="body1" color="black">
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
                    </Grid>
                    <Grid item component={Card} xs={12} md={3.5} className="card">
                        <CardMedia
                        component="img"
                        image={portfolioProject}
                        alt="green iguana"
                        className="cardRow2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Portfolio Website</Typography>
                            <Typography variant="body1" color="black">
                            My personal portfolio website. Built using React.JS, Material.UI, React Router and React Router Hash Link. Fully Responsive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box mr={1}>
                                <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/portfolio" target="_blank">Source</Button>
                        </CardActions>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3.5} className="card">
                        <CardMedia
                        component="img"
                        image={githubImage}
                        alt="green iguana"
                        className="cardRow2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Other Projects</Typography>
                            <Typography variant="body1" color="black" marginBottom="auto">
                            Take a look at my personal GitHub account where I store all my personal projects, also see what I'm currently working on.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" href="https://github.com/lewispotticary" target="_blank">All Projects</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </div>      
        </div>
    )
}

export default Body
