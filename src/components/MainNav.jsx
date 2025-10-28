import {Link} from 'react-router-dom';
import '../css/MainNav.css';

const MainNav = () => {
    return (
       <nav id="main-nav" className="four columns">
            <ul className="columns ">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/marine">MARINE</Link></li>
                <li><Link to="/auto">AUTO</Link></li>
                <li><Link to="/locations">LOCATIONS</Link></li>
                <li><Link to="/portfolio">PORTFOLIO</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
       </nav>
    );
};

export default MainNav;