import '../css/LogoBanner.css';
import '../css/ToggleNav.css';
import ToggleNav from './ToggleNav';
import logo from '../images/Iggys_Detailing_Logo.svg';
import BookNow from './BookNow';
import MainNav from './MainNav';

const LogoBanner = ({ menuOpen, onToggleMenu }) => {
    return (
    
        <div id="logo-banner" className="">

            <div id="toggle-container" className={`one-small ${menuOpen ? "toggle-highlight" : ""}`}>
                <a onClick={onToggleMenu} href="#">
                    <ToggleNav id="toggle-nav" />
                </a>
            </div>


            <div id="logo" className=""> <img src={logo} alt="Iggy's Detailing" />    </div>

            <div id="book-now-small-container" className="hide-large one-small">  <div id="book-now-small-bttn"><BookNow /></div>    </div>


            

        </div>
    );
};

export default LogoBanner;