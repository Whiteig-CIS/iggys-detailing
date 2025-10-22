import {Link} from 'react-router-dom';
import '../css/Header.css';
import LogoBanner from './LogoBanner';
import MainNav from './MainNav';

const Header = () => {
    return (
        <header id="header">
            <h1> im the header</h1>
            <LogoBanner />
            <MainNav />
        </header>
    );
};

export default Header;