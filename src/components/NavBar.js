import './styles/nav-styles.css'
import React, {useState} from "react";

const NavBar = () => {

    const [style, setStyle] = useState('inactive');

    const changeStyle = () => {
        
        if(style!== 'inactive') setStyle('inactive');
        else setStyle('active');
        console.log("Changing Styles into :" + style);
    }
    
        return<header>
            <div className='first-row'>
            <div class = "brand-name">
               <h1>Portfolio </h1> 
            </div>
            
            <ul className='links'>
                <li className='nav-links' ><a className='nav-links' href='#hero-section'>Home</a> </li>
                <li className='nav-links'><a className='nav-links' href='#about-section'>About Me</a></li>
                <li className='nav-links'><a className='nav-links' href='#projects-section'>Projects</a></li>
                <li className='nav-links'><a className='nav-links' href='#contacts-section'>Contacts</a></li>
            </ul> 
            
            <div id="menuToggle"onClick = {changeStyle}>
                
                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                
                {/* <!--
                Too bad the menu has to be inside of the button
                but hey, it's pure CSS magic.
                --> */}
                <ul></ul>

            </div>
            </div>

            <div id = 'menu' className = {style}>
                <ul>
                    <li ><a className='nav-links' href='#hero-section'>Home</a> </li>
                    <li ><a className='nav-links' href='#about-section'>About Me</a></li>
                    <li ><a className='nav-links' href='#projects-section'>Projects</a></li>
                    <li ><a className='nav-links' href='#contacts-section'>Contacts</a></li>
                </ul> 
            </div>
            
        </header>
    
}

export default NavBar;



