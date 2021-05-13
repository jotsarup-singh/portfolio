import React from 'react'
// import image from '../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg'
import styles from '../styles/img.module.css'
import { Details } from './Details'
import { Downarrow } from './Downarrow'
import {Particles} from './Particles'
import image from '../images/background/croppedbackground.jpg'

export const Front = () => {
   

    return (    
         <>
            <div className={styles.container} >
                <img src={image} alt="portfolio"/>  
            </div>
            <Particles/>
            <Details/>
            <Downarrow/>
        </>
    )
}
