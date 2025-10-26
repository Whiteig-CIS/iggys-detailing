import '../css/LogoBanner.css';
import ToggleNav from './ToggleNav';
import logo from '../images/Iggys_Detailing_Logo.svg';
import BookNow from './BookNow';

const LogoBanner = () => {
    return (
       <div id="logo-banner" className="one">
           <div id="toggle-container" className="one-small"> <ToggleNav id="toggle-nav" /> </div>

            <div id="logo" className="one-small"> <img src={logo} alt="Iggy's Detailing" />    </div>
            
            <div id="book-now-small-container" className="hide-large one-small">  <div id="book-now-small-bttn"><BookNow  /></div>    </div>
       </div>
    );
};

export default LogoBanner;