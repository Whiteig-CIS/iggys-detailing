import {Link} from 'react-router-dom';
import '../css/LogoBanner.css';
import ToggleNav from './ToggleNav';
import logo from '../images/Iggys_Detailing_Logo.svg';
import BookNow from './BookNow';
import '../Global.css';

const LogoBanner = () => {
    return (
       <div id="logo-banner" class="one">
            <ToggleNav />

            <div id="logo"> <img src={logo} alt="Iggy's Detailing" />    </div>
            
            <div class="hide-large">    <BookNow/>  </div>
       </div>
    );
};

export default LogoBanner;