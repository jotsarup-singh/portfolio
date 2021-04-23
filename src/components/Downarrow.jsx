import React from 'react'
import  {Link} from 'react-scroll'

import style from '../styles/downarrow.module.css'
export const Downarrow = () => {
    return (
        <Link
            activeClass="active"
            to="nav"
            spy={true}
            smooth={true}
            duration={500}
        >
        <div className={style.arrowcontainer}>
            <div className={style.arrowdown}></div>
        </div>

    </Link>
        
    )
}
