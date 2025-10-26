import '../css/SplitDiv.css';


const SplitDiv = ({title, text, videoURL, direction}) => {
    return (
       
        <div className="columns">
            <section
                id="t1"
                className={`text-section ${direction === "left" ? "hide" : ""}`}
                
                
            >
                <h1>{title}</h1>
                <p>{text}</p>
            </section>

            <section className="video-section one">
                <iframe
                    id="player"
                    type="text/html"
                    width="640"
                    height="390"
                    src={`https://www.youtube.com/embed/${videoURL}`}
                    frameBorder="0"
                ></iframe>
            </section>

            <section 
                className={`text-section ${direction === "left" ? "" : "hide"}`}
                >
                <h1>{title}</h1>
                <p>{text}</p>
            </section>
        </div>
    );
};

export default SplitDiv;