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
            <div className="one"><LogoBanner menuOpen={menuOpen} onToggleMenu={toggleMenu} /></div>
            <div id="main-nav-container" className={`four ${menuOpen? "" : "hide-small"}`}><MainNav /></div>
            <div id="header-book-bttn-container" className="one hide-small"> <BookNow /> </div>
        </header>
    );
};

export default Header;


