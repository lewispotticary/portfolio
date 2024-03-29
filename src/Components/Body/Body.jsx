import React from 'react';

//Import of style sheet
import './Body.css'

//Import of images
import covidTrackerImage from './covidTrackerProject.JPG'
import expenseTrackerImage from './expenseTrackerProject.JPG'
import portfolioProject from './portfolioProject.JPG'
import githubImage from './githubImage.jpg'
import geoguessrProject from './geoguessrProject.JPG'
import mileageTrackerProject from './mileageTrackerProject.JPG'

//Import of Material UI
import {Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Modal, Box, } from '@mui/material';

//Import of Animation function
import Animation from '../Animation/Animation';

function Body() {

    //Covid Tracker Modal
    const [covidTracker, setCovidTracker] = React.useState(false);
    const openCovidTracker = () => setCovidTracker(true);
    const closeCovidTracker = () => setCovidTracker(false);

    //Expense Tracker Modal
    const [expenseTracker, setExpenseTracker] = React.useState(false);
    const openExpenseTracker = () => setExpenseTracker(true);
    const closeExpenseTracker = () => setExpenseTracker(false);

    //Portfolio Modal
    const [portfolio, setPortfolio] = React.useState(false);
    const openPortfolio = () => setPortfolio(true);
    const closePortfolio = () => setPortfolio(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'black',
        border: '2px solid white',
        boxShadow: 24,
        p: 4,
        color: 'white',
      };
    
    return (
        <div className="bodyContainer">
            <div className="titleContainer" id="Projects">
                <Typography variant="h2" color="white"><b>Projects.</b></Typography>
            </div>       
            <div className="cardContainer">
                <Grid container justify="center">
                    {/*Covid-19 Tracker Card*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                            <CardMedia component="img" image={covidTrackerImage} alt="Covid Tracker Project Image" className="cardRow1"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="white">Covid-19 Tracker</Typography>
                                <Typography variant="body1" color="white">
                                Covid-19 tracker web application. Built using React.JS, Material UI, Chart.JS, and Leaflet.JS. Fully responsive.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Modal open={covidTracker} onClose={closeCovidTracker}>
                                    <Box sx={style}>
                                        <Typography variant="h5" component="h2"><b>Covid-19 Tracker</b></Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Goals of the project</b></Typography>
                                        <Typography sx={{ mt: 2 }}>The goal of the Covid-19 tracker project was to use an API to pull covid-19 data and present this data using JavaScript libraries such as Leaflet JS and Chart JS.</Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Challenges Faced</b></Typography>
                                        <Typography sx={{ mt: 2 }}>One of the challenges faced creating the covid-19 tracker was pulling data from multiple API's, manipulating this data using javascript methods such as map, then storing this data in state hooks and finally taking the data from the state hooks and presenting in the form of graphs and maps.<br /><br />A specific issue faced was the creation of the map feature using leaflet JS. This was a challenge as map center and zoom attribute needed to be dynamic depending on country selected but leaflet JS didn't update automatically when state hook changed. So, an extra function had to be created to set center and zoom for when the state hook changed.</Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>What I learnt</b></Typography>
                                        <Typography sx={{ mt: 2 }}>This was the first project using Material UI a user interface library. As this was the first-time using Material UI there was a learning curve on the different components and tailoring these components to my needs.<br /><br />Finally, I learnt how to use media queries to create different layouts for different screen sizes as this project used both a row and column layout on large screens and row only on small screens.</Typography>
                                    </Box>
                                </Modal>
                                <Box mr={1}>
                                    <Button size="small" onClick={openCovidTracker} variant="contained" color="success">Full Description</Button>
                                </Box>
                                <Button size="small" variant="contained" href="https://covid-19-data-tracker-app.netlify.app/" target="_blank">Live Site</Button>
                                <Button size="small" variant="outlined" href="https://github.com/lewispotticary/coronavirus-tracker" target="_blank">Source</Button>
                            </CardActions>
                        </Animation> 
                    </Grid>
                    {/*Expense Tracker Card*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                            <CardMedia component="img" image={expenseTrackerImage} alt="Expense Tracker Project Image" className="cardRow1"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="white">Expense Tracker</Typography>
                                <Typography variant="body1" color="white">Expense tracker web application. Built using React.JS, Bootstrap and Chart.JS. Fully responsive.</Typography>
                            </CardContent>
                            <CardActions>
                                <Modal open={expenseTracker} onClose={closeExpenseTracker}>
                                    <Box sx={style}>
                                        <Typography variant="h5" component="h2"><b>Expense Tracker</b></Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Goals of the project</b></Typography>
                                        <Typography sx={{ mt: 2 }}>The goal of the expense tracker project was to allow a user to input expense data, this data is then organised and displayed in the form of a list and finally allow the user to filter this data.</Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Challenges Faced</b></Typography>
                                        <Typography sx={{ mt: 2 }}>The main challenge of the expense tracker was the filter functions, this being the name, category and date filters. This was a challenge as it involved using multiple JavaScript methods such as sort, filter and map to manipulate data.<br /><br />A specific challenge faced was a bug related to the date filter function where the date filter state would change but not UI sometimes, to overcome this challenge I had to pass a new array into the date filter state so the UI would change every time.</Typography>
                                        <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>What I learnt</b></Typography>
                                        <Typography sx={{ mt: 2 }}>As this was my first project using React, I learnt the React fundamentals such as useState, useEffect, components, props, JSX syntax and also, I learnt how to think in React. Also, I learnt how to implement React Bootstrap and React Chart JS.</Typography>
                                    </Box>
                                </Modal>
                                <Box mr={1}>
                                    <Button size="small" onClick={openExpenseTracker} variant="contained" color="success">Full Description</Button>
                                </Box>
                                <Button size="small" variant="contained" href="https://expense-tracker-react-site.netlify.app/" target="_blank">Live Site</Button>
                                <Button size="small" variant="outlined" href="https://github.com/lewispotticary/react-expense-tracker" target="_blank">Source</Button>
                            </CardActions>
                        </Animation> 
                    </Grid>
                    {/*Geoguessr Card*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                            <CardMedia component="img" image={geoguessrProject} alt="Expense Tracker Project Image" className="cardRow1"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="white">GeoGuessr Game</Typography>
                                <Typography variant="body1" color="white">Recreation of the popular GeoGuessr game. Find clues and guess where you are in the world. First full-stack web application. Created using Firebase, Javascript, HTML, CSS and random streetview library. Fully responsive</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" href="https://geoguessr-game.netlify.app/" target="_blank">Live Site</Button>
                                <Button size="small" variant="outlined" href="https://github.com/lewispotticary/geoguessr-game" target="_blank">Source</Button>
                            </CardActions>
                        </Animation> 
                    </Grid>
                    {/*Mileage Tracker*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                            <CardMedia component="img" image={mileageTrackerProject} alt="Expense Tracker Project Image" className="cardRow1"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" color="white">Mileage Tracker</Typography>
                                <Typography variant="body1" color="white">Full stack mileage tracker application. Created using HTML, CSS, JavaScript, NodeJS, ExpressJS, PostgreSQL and Firebase.</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant="contained" href="https://mileage-app-tracker.herokuapp.com/" target="_blank">Live Site</Button>
                                <Button size="small" variant="outlined" href="https://github.com/lewispotticary/mileage-tracker" target="_blank">Source</Button>
                            </CardActions>
                        </Animation> 
                    </Grid>
                    {/*Portfolio Card*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia component="img" image={portfolioProject} alt="Portfolio Project Image" className="cardRow2"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Portfolio Website</Typography>
                            <Typography variant="body1" color="white">My personal portfolio website. Built using React.JS, Material UI, React Router, React Router Hash Link and Framer Motion. Fully Responsive.</Typography>
                        </CardContent>
                        <CardActions>
                            <Modal open={portfolio} onClose={closePortfolio}>
                                <Box sx={style}>
                                    <Typography variant="h5" component="h2"><b>Portfolio Website</b></Typography>
                                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Goals of the project</b></Typography>
                                    <Typography sx={{ mt: 2 }}>The goal of the portfolio website project was to show case all my best projects in one place and to design and create a single page website.</Typography>
                                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>Challenges Faced</b></Typography>
                                    <Typography sx={{ mt: 2 }}>One of the challenges faced creating the portfolio website was making a website that was visually appealing as well as fully responsive so it can be viewed on a multitude of devices.<br /><br />A few specific challenges faced was the implementation of animation of components when in view, Netlify contact form and finally navigation anchors using React Router Hash Link.</Typography>
                                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}><b>What I learnt</b></Typography>
                                    <Typography sx={{ mt: 2 }}>I learnt the process of creating a single page website and the testing involved to make sure it's fully response. Also, I learnt how to add animation using framer motion, implementing navigation anchors using React Router Hash Link and finally customizing Material UI components to suit my design needs.</Typography>
                                </Box>
                            </Modal>
                            <Box mr={1}>
                                <Button size="small" onClick={openPortfolio} variant="contained" color="success">Full Description</Button>
                            </Box>
                            <Button size="small" variant="outlined" href="https://github.com/lewispotticary/portfolio" target="_blank">Source</Button>
                        </CardActions>
                        </Animation> 
                    </Grid>
                    {/*GitHub Card*/}
                    <Grid item component={Card} xs={12} sm={12} md={5.5} className="card" style={{backgroundColor: "black"}}>
                        <Animation> 
                        <CardMedia component="img" image={githubImage} alt="Github Project Image" className="cardRow2"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">Other Projects</Typography>
                            <Typography variant="body1" color="white" marginBottom="auto">Take a look at my personal GitHub account where I store all my personal projects, also see what I'm currently working on.</Typography>
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
