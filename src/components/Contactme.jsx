import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { 
  Button, 
  Card, 
  Typography
}   
from '@material-ui/core';
import emailjs from 'emailjs-com';
import bgemail from '../images/background/pngaaa.com-14030.png'
import style from '../styles/contactme.module.css'
import Slide from 'react-reveal/Slide';


const useStyles = makeStyles((theme) => ({
    form: {
        width: '98%' ,
        margin:"1%"
         },
      card:{
        width:'80%',
        padding:"30px 10px",
        margin:"50px auto",
        opacity:"0.7"
      },
      button:{
        margin: theme.spacing(1),
        width: '97%' ,
        padding:"8px 0", 
        opacity:"1"
      }
  }));


export function Contactme() {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_4vzem4o', 'template_2adz3in', e.target, 'user_h5isomAZb8f0fqDTaWFtM')
.then(() => {
          alert("Thankyou for contacting your response have been successfully noted")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }

  return (
      <div className={style.container} id="contact">
        <div style={{  
          backgroundImage: "url(" + bgemail+ ")",
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} >
        <Slide top>
        <Typography style={{margin:"20px", fontSize:`calc(${20}px + ${1}vw)`}} variant="h4" align="center" gutterBottom>CONTACT ME</Typography>
        <Card className={classes.card} variant="outlined">
            <form onSubmit={sendEmail} className={classes.form} noValidate autoComplete="off">
                 <TextField  className={classes.form} label="Name" name="name" />
                 <TextField  className={classes.form}  label="Phone Number" name="phonenumber" />
                 <TextField  className={classes.form} label="Email Address" name="email" />
                 <TextField  className={classes.form}
                     label="Message"
                     multiline
                     name="message"
                  />
                  <Button type="submit" size="medium" className={classes.button} variant="contained" color="primary">                     Send
                  </Button> 
             </form>
        </Card>
        </Slide>
        </div>
    </div>

  );
}