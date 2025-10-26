import '../css/HomeImage.css';
import pic from "../images/portfolio/18a.jpeg";


const HomeImage = () => {
    return (
       
           <div id="home-image-div">
                <img src={pic} alt="homeImage"></img>
                <div id="h1-container">
                    <h1 id="top-h1">PROFESSIONAL</h1>
                    <h1 id="bottom-h1">DETAILING</h1>
                </div>
           </div>
    
    );
};

export default HomeImage;