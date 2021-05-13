import React from 'react'
import styled from 'styled-components'
import  {Link} from 'react-scroll'



const Navcontainer=styled.div`
    position:absolute;
    bottom:-8vh;
    background:rgba(216, 216, 216,0.7);
    width:100%;
    border-bottom:5px solid rgb(245, 161, 4);
    // border:1px solid;
    @media only screen and (max-width: 750px){
        bottom:0vh;

    }
    
    div{
        display:inline-block;
        // border:1px solid;
        padding:15px 35px;
        font-size:18px;
        font-family:sans-serif;
        font-weight:bold;
        cursor:pointer;
    }
    >.Navitem:hover{
        box-sizing: border-box;
        cursor: pointer;
        box-shadow: inset 0 -10px 10px -7px rgb(245, 161, 4);

        transition: width 0.3s ease 0.7s, left 0.5s;
    }
    .aboutme{
        color:rgb(245, 161, 4);
        cursor: pointer;
    }
    

`
export const Navbar = () => {
    return (
        <Navcontainer id="nav">
            <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}                        
                duration={500} ><div className="aboutme" >About Me</div>
            </Link>
            <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
            ><div className="Navitem" >Projects</div></Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
            ><div className="Navitem">Contact Me</div>
            </Link>

        </Navcontainer>
    )
}
