import {Link} from 'react-router-dom';
import '../css/BookNow.css';

const BookNow = () => {
    return (
       
            <div id="book-now">
                 <Link to="/booking">
                    <h3>BOOK NOW</h3>
                </Link>
            </div>
        
    );
};

export default BookNow;