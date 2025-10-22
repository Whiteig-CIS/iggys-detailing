import {Link} from 'react-router-dom';
import '../css/MainNav.css';

const MainNav = () => {
    return (
       <nav id="main-nav">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">MARINE</Link></li>
                <li><Link to="/">AUTO</Link></li>
                <li><Link to="/">LOCATIONS</Link></li>
                <li><Link to="/">PORTFOLIO</Link></li>
                <li><Link to="/">CONTACT</Link></li>
            </ul>
       </nav>
    );
};

export default MainNav;