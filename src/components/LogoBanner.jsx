import '../css/LogoBanner.css';
import '../css/ToggleNav.css';
import ToggleNav from './ToggleNav';
import logo from '../images/Iggys_Detailing_Logo.svg';
import BookNow from './BookNow';
import MainNav from './MainNav';
import { useState } from 'react';

const LogoBanner = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
    <div>
       <div id="logo-banner" className="one">
            
                <div id="toggle-container" className={`one-small ${menuOpen ? "toggle-highlight" : ""}`}>
                    <a onClick={toggleMenu} href="#"> 
                        <ToggleNav id="toggle-nav" />  
                    </a>
                </div>
           

            <div id="logo" className="one-small"> <img src={logo} alt="Iggy's Detailing" />    </div>
            
            <div id="book-now-small-container" className="hide-large one-small">  <div id="book-now-small-bttn"><BookNow  /></div>    </div>
       </div>

       <div className = {menuOpen ? "" : "hide-small"}><MainNav /></div>

    </div>
    );
};

export default LogoBanner;