import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import projectone from '../images/project/thehindu.png'
import projecttwo from '../images/project/rentomojo.png'
import projectthree from '../images/project/sumpayroll.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import VideocamIcon from '@material-ui/icons/Videocam';
import styled from "styled-components";
import style from '../styles/projects.module.css'
import Slide from 'react-reveal/Slide';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

// const random = ()=>{
//     var max = 160
//     return `rgb(${Math.floor(Math.random()*max)},${Math.floor(Math.random()*max)},${Math.floor(Math.random()*max)})`
// }

const Stack=styled.div`
    display:inline-block;
    border:2px solid;
    padding:10px 20px;
    margin:10px 5px;
    font-family: sans-serif;
    font-weight: bold;
`

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
    
  },
  cardContainer: {
    maxWidth: 400,
    margin: "50px auto",
    minHeight:"80vh"
  },
}));

const projects = [
  {
    name: "The Hindu",
    description: `The Hindu is the second most circulated English-
    language newspaper in India.It was cloned using React.JS,Redux and Material UI. A user can register, login to web app and read allthe news available`,
    image: projectone,
    github:"https://github.com/Jammy12345/Team-Butane-THE-HINDU",
    video:"https://www.linkedin.com/posts/jotsarupsingh21_reactjs-redux-thehindu-activity-6782676639403806721-SPnh",
    stack:["React.JS","Redux","Material-UI"],
    link:"https://the-hindu-1w79mgmmr-ashishbhagat123.vercel.app/"
    },
  {
    name: "RentoMojo",
    description: `India's leading rental platform brings to you a wide range of products on rent.We used vanilla JavaScript with HTML and CSS.A user can choose products from a wide range,add to the cart and checkout.`,
    image: projecttwo,
    github:"https://github.com/Rakesh-Thampy/Rentomojo_Clone",
    video:"https://www.linkedin.com/posts/jotsarupsingh21_rentomojoclone-vanillajavacsript-justgettingstarted-activity-6764862927502663681-KZE0",
    stack:["JavaScript","API","CSS","HTML"],
    link:"https://gracious-dubinsky-c3b1ed.netlify.app"
  },
  {
    name: "Sumopayroll",
    description: "sumopayroll is a cloud based Employee Payroll and HR Management platform. First ever try to clone a website made a few static pages. We used HTML and CSS and JavaScript."
    ,
    image: projectthree,
    github:"https://github.com/AmanSingh-code/sumopayroll_project",
    stack:["JavaScript","CSS","HTML"],
    video:"https://youtu.be/DeY2OnBfrPk"
  }
];



export const Projects = () => {
  const classes = useStyles();
  return (
< div className={style.container} id="project" >
<Typography style={{fontSize:`calc(${20}px + ${1}vw)`}} variant="h4" align="center" gutterBottom>PROJECTS</Typography>
<Slide bottom>

    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={project.image}
                  />
                  {project.stack && project.stack.map(el=><Stack>{el}</Stack>)}
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {project.video &&<IconButton target="_blank" href={project.video}>
                    <VideocamIcon style={{fontSize:"38px"}} className={classes.root} />
                    
                </IconButton>}
                <IconButton target="_blank" href={project.github}>
                    <GitHubIcon style={{fontSize:"35px"}} className={classes.root}/>
                </IconButton>
                {project.link &&<IconButton target="_blank" href={project.link}>
                    <ComputerOutlinedIcon style={{fontSize:"38px"}} className={classes.root} />
                    
                </IconButton>}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
</Slide>
</div>
  );
};

