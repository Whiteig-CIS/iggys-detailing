import "../css/Portfolio.css";
import GalleryImage from "../components/GalleryImage";

// Import Before/After images
import b1 from "../images/portfolio/1b.jpeg";
import a1 from "../images/portfolio/1a.jpeg";
import b2 from "../images/portfolio/2b.jpeg";
import a2 from "../images/portfolio/2a.jpeg";
import b3 from "../images/portfolio/3b.jpeg";
import a3 from "../images/portfolio/3a.jpeg";
import b4 from "../images/portfolio/4b.jpeg";
import a4 from "../images/portfolio/4a.jpeg";

const Portfolio = () => {
    return (
        <div id="portfolio" className="gallery">
            <GalleryImage before={b1} after={a1} />
            <GalleryImage before={b2} after={a2} />
            <GalleryImage before={b3} after={a3} />
            <GalleryImage before={b4} after={a4} />
        </div>
    );
};

export default Portfolio;