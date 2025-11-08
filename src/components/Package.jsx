import "../css/Package.css";
import PackageDialog from "./PackageDialog";
import {useState} from "react";

const Package = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showPackageDetails = () => {
        setShowDialog(true);
    }

    const closePackageDetails = () => {
        setShowDialog(false);
    } 

       
        console.log(props.images[0]);
    return (
        <>
            {showDialog?(
                <PackageDialog closePackageDialog={closePackageDetails} 
                        type={props.vehicle_type} 
                        teir={props.teir}
                        interior_services={props.interior_services}
                        exterior_services={props.exterior_services}
                        price={props.price}
                        summary={props.summary}
                        images={props.images} />
            ):("")} 
            
            <section className="package" onClick={showPackageDetails}>
                <img src={"https://detailing-server.onrender.com/images/"+props.images[0]} alt="package" />
                <div className="package-description">
                    <h1>{props.vehicle_type}</h1>
                    <h1>{props.teir}</h1>
                </div>
            </section>
        </> 
    );
    
};

export default Package;