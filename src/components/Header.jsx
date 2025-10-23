import {Link} from 'react-router-dom';
import '../css/Header.css';
import LogoBanner from './LogoBanner';
import MainNav from './MainNav';
import BookNow from './BookNow';

const Header = () => {
    return (
        <header class="columns" id="header">
            <LogoBanner />
            <MainNav />
            <div id="header-book-bttn-container" class="one"> <BookNow /> </div>
        </header>
    );
};

export default Header;