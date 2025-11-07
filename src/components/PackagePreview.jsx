import '../css/PackagePreview.css';


const PackagePreview = (prop) => {
    return (
       
        <section id="main-preview">
            <h3>{prop.teir}</h3>
            <div>
                <img src={prop.src}></img>  
            </div>
            <ul>
                {prop.array.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>

        </section>
    
    ); 
};

export default PackagePreview;