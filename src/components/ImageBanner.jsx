import '../css/ImageBanner.css';
import pic from "../images/marine.png";


const ImageBanner = ({title1, title2}) => {
    return (
       <div id="image-banner">

        <img src={pic} alt={title1+title2}></img>
        <div id="h1-div">
            <h1 className="top-h1">{title1}</h1>
            <h1 className = "bottom-h1">{title2}</h1>
        </div>

       </div>
       
    
    );
};

export default ImageBanner;