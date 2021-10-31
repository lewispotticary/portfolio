import React from 'react';

import './Body.css'

import covidTrackerImage from './covidTrackerProject.JPG'

import expenseTrackerImage from './expenseTrackerProject.JPG'

import {Typography, Button, Fab, Card, CardMedia, CardContent, CardActions, Grid, Modal, Box, } from '@mui/material';



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
            <div className="titleContainer">
                <Typography variant="h2" color="white"><b>Projects</b></Typography>
            </div>
            <div className="cardContainer">
                <Grid container justify="center">
                    <Grid item component={Card} xs={12} md={5.52} className="card">
                        <CardMedia
                        component="img"
                        image={covidTrackerImage}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Covid-19 Tracker</Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box mr={1}>
                            <Button size="small" onClick={handleOpen} variant="contained" color="success">Full Description</Button>
                            </Box>
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
                            <Button size="small" variant="contained" href="https://musing-bassi-1d4cea.netlify.app/" target="_blank">Live Site</Button>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/coronavirus-tracker" target="_blank">Source</Button>
                        </CardActions>
                    </Grid>
                    <Grid item component={Card} xs={12} md={5.52} className="card">
                        <CardMedia
                        component="img"
                        image={expenseTrackerImage}
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Expense Tracker</Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid>
                    <Grid item component={Card} xs={12} md={5.52} className="card">
                        <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Portfolio</Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </div>      
        </div>
    )
}

export default Body
