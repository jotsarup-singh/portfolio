import React from 'react'
import style from '../styles/footear.module.css'
import EmailIcon from '@material-ui/icons/Email';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import {  makeStyles } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    icon: {
        "&:hover": {
          fill: "",
          transform: "translate(0, -5px)"
        },
        color:"white",
        fontSize: "3rem",
        padding:"10px",
        background:"rgb(38,47,56)"
      }
    }
  );
export const Footear = () => {
    const classes=useStyles()
    let [size,setsize]=React.useState(true)
  
    const handleWindowResize = () => {
      setsize( window.innerWidth >840 )
    }
  
    window.addEventListener("resize",handleWindowResize)
    return size && (
        <div className={style.footear}>
            <div className={style.footearcontainer}>
                <div className={style.information} >
                    <EmailIcon className={classes.icon}/>
                    <h3>Jotsarupsingh@gmail.com</h3>
                </div>
                <div className={style.information}>
                    <PersonPinCircleIcon className={classes.icon}/>    
                    <h3>New Delhi</h3>
                </div>
                <div className={style.information}>
                    <PhoneIcon className={classes.icon}/>
                    <h3>9205527097</h3>
                </div>
                <div className={style.information}>
                    <PersonIcon className={classes.icon}/>
                    <h3>Jotsarup Singh</h3>
                </div>
            </div>
        </div>
    )
}
