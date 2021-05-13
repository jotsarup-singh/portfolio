import React from 'react'
import style from '../styles/aboutme.module.css'
import mongodb from '../images/mongodb.svg'
import css3 from '../images/css3.svg'
import express from '../images/express.svg'
import html from '../images/html-5.svg'
import javascript from '../images/javascript.svg'
import materialui from '../images/material-ui-1.svg'
import node from '../images/nodejs.svg'
import react from '../images/react.png'
import git from '../images/git.png'
import mysql from '../images/mysql-ar21.svg'
import Slide from 'react-reveal/Slide';
import { Button, Link, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles (() => ({
    button: {
    padding:"10px",
    background:"rgb(245, 161, 4)",
    width:"100%"
    }
    
  }));

export const Aboutme = () => {

      const classes=useStyles()
    
    return (

        <div className={style.container} id="about" >

            <Slide left>
            <div className={style.aboutme} >
                <div>
                <Typography style={{margin:"20px", fontSize:`calc(${20}px + ${1}vw)`}} variant="h4" align="center" >ABOUT ME</Typography>
                    <h3>
                    Hi, my name is Jotsarup Singh and I’m a 25 year old
                    full stack developer. I am always trying out/learning new languages and tools that facilitate better development. I have maintained, developed and launched multiple projects from scratch.
                    </h3>
                </div>
                
                    <Link target="_blank" href="https://drive.google.com/file/d/1Tl2lKNatBl64aznbuknfEJpZ2E1bPlMA/view?usp=sharing">
                        <Button className={classes.button+" "+style.button} variant="contained">
                         RESUME
                        </Button>
                    </Link>
            </div>
            </Slide>
            <Slide right>
            <div className={style.skills} >
            <Typography style={{margin:"20px", fontSize:`calc(${20}px + ${1}vw)`}} variant="h4" align="center" gutterBottom>SKILLS</Typography>
                <div className={style.svgs} >
                    <div className={style.svgcontainer}>
                        <img src={mongodb} alt="mongo" />
                        <div className={style.middle} >
                            <p className={style.text}>MongoDB</p>
                        </div>
                    </div>
                    <div className={style.svgcontainer}>
                        <img src={css3} alt="css3" />
                        <div className={style.middle} >
                            <p className={style.text}>CSS</p>
                        </div>
                    </div>
                    <div className={style.svgcontainer}>
                        <img src={express} alt="express" />
                        <div className={style.middle} >
                            <p className={style.text}>Express</p>
                        </div>
                    </div>
                    <div className={style.svgcontainer}>
                        <img src={html} alt="html" />
                        <div className={style.middle} >
                            <p className={style.text}>HTML</p>
                        </div>
                    </div>
                    <div className={style.svgcontainer}>
                        <img src={javascript} alt="javascript" />
                        <div className={style.middle} >
                            <p className={style.text}>Javascript</p>
                        </div>
                    </div><div className={style.svgcontainer}>
                        <img src={mysql} alt="mongo" />
                        <div className={style.middle} >
                            <p className={style.text}>Mysql</p>
                        </div>
                    </div><div className={style.svgcontainer}>
                        <img src={materialui} alt="materialui" />
                        <div className={style.middle} >
                            <p className={style.text}>MaterialUi</p>
                        </div>
                    </div><div className={style.svgcontainer}>
                        <img src={git} alt="git" />
                        <div className={style.middle} >
                            <p className={style.text}>Git</p>
                        </div>
                    </div>
                    <div className={style.svgcontainer}>
                        <img src={react} alt="react" /> 
                        <div className={style.middle} >
                            <p className={style.text}>React</p>
                        </div>
                    </div><div className={style.svgcontainer}>
                    <img src={node} alt="node" />
                        <div className={style.middle} >
                            <p className={style.text}>Node js</p>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>

        </div>
    )
}
