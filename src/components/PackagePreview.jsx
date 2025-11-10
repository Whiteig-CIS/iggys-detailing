import '../css/PackagePreview.css';
import PackageList from "./PackageList"


const PackagePreview = (props) => {
    return (
       
        <section id="main-preview">
            <header>
                <div id="package-title">
                    <h1>{props.teir}</h1>
                    <h1>{props.vehicle}</h1>
                    <h1>Detail</h1>
                </div>

                <h3>Starting Price: {props.price}</h3>

            </header>
           

        </section>
    
    ); 
};

export default PackagePreview;