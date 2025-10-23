import '../css/LogoBanner.css';
import ToggleNav from './ToggleNav';
import logo from '../images/Iggys_Detailing_Logo.svg';
import BookNow from './BookNow';

const LogoBanner = () => {
    return (
       <div id="logo-banner" className="one">
            <ToggleNav id="toggle" />

            <div id="logo"> <img src={logo} alt="Iggy's Detailing" />    </div>
            
            <div className="hide-large">    <BookNow/>  </div>
       </div>
    );
};

export default LogoBanner;