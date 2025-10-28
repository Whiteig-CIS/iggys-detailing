import '../css/Header.css';
import LogoBanner from './LogoBanner';
import MainNav from './MainNav';
import BookNow from './BookNow';

const Header = () => {
    return (
        <header className="columns" id="header">
            <LogoBanner />
            <div className="hide-small"><MainNav /></div>
            <div id="header-book-bttn-container" className="one hide-small"> <BookNow /> </div>
        </header>
    );
};

export default Header;