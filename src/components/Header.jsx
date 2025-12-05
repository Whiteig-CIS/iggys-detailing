import '../css/Header.css';
import LogoBanner from './LogoBanner';
import MainNav from './MainNav';
import BookNow from './BookNow';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="columns" id="header">
            <div className="one-sixth"><LogoBanner menuOpen={menuOpen} onToggleMenu={toggleMenu} /></div>
            <div id="main-nav-container" className={`${menuOpen? "" : "hide-small"}`}><MainNav /></div>
        </header>
    );
};

export default Header;


