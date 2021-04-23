import React from 'react'
import image from '../images/circle-cropped (1).png'
import style from '../styles/details.module.css'
import Typed from "react-typed";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    bottomNavContainer: {
      background: "#222",
    },
    icon: {
        "&:hover": {
          fill: "rgb(245, 161, 4)",
          fontSize: "1.8rem",
          transform: "translate(0, -5px)"
        }
      }
    }
  );
export const Details = () => {
    const classes = useStyles();

    return (
        <div className={style.container} >
            <div >
                <img src={image} alt="personal" />
            </div>
            <Typed className={style.typedname}
          strings={["JOTSARUP SINGH "]} typeSpeed={24}/>
            <br/>
            <Typed className={style.typed}
                strings={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                
            />
            <br/>
            <div className={style.iconcontainer} >
                <IconButton target="_blank" href="https://www.linkedin.com/in/jotsarupsingh21/">
                    <LinkedInIcon style={{fontSize:"38px"}} className={classes.icon} />
                    
                </IconButton>
                <IconButton target="_blank" href="https://github.com/jotsarup-singh/">
                    <GitHubIcon style={{fontSize:"35px"}} className={classes.icon}/>
                </IconButton>
            </div>
        </div>
    )
}
