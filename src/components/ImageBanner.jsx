import '../css/ImageBanner.css';


const ImageBanner = ({title1, title2, path}) => {
    return (
       <div id="image-banner">

            <img src={path} alt={title1+title2}></img>
            <div id="h1-div">
                <h1 className="top-h1">{title1}</h1>
                <h1 className = "bottom-h1">{title2}</h1>
            </div>

       </div>
       
    
    );
};

export default ImageBanner;