import '../css/SplitImg.css';


const SplitImg = ({title, text, path, direction}) => {
    // debug: log the incoming path so we can tell if the import made it through
    if (typeof window !== 'undefined') console.log('SplitImg: path=', path);

    return (
       
      
        <div id="split-image"className="columns">
            <section className={`three text-section ${direction === "left" ? "hide" : ""}`}>
                <h1>{title}</h1>
                <p>{text}</p>
            </section>

            <section id="img-section"className='two'>
                <img src={path} alt="image"></img>
            </section>

            <section 
                className={`three text-section ${direction === "left" ? "" : "hide"}`}
                >
                <h1>{title}</h1>
                <p>{text}</p>
            </section>
        </div>
    );
};

export default SplitImg;