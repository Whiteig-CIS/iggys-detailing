import "../css/Package.css";
import {useState} from "react";
import PackageDialog from "./PackageDialog"

const Package = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showPackageDetails = () => {
        setShowDialog(true);
    }

    const closePackageDetails = () => {
        setShowDialog(false);
    }
    return (
        <>
            {showDialog?(
                <PackageDialog closePackageDialog={closePackageDetails} 
                        type={props.vehicle_type} 
                        teir={props.teir}
                        interior_services={props.interior_services}
                        exterior_services={props.exterior_services}
                        price={props.price}
                        summary={props.summary}/>
            ):("")}
            <section className="package" onClick={showPackageDetails}>
                <img src={"https://detailing-server.onrender.com/images"+props.main_image} alt="package" />
                <div className="package-description">
                    <h1>{props.name}</h1>
                    <p>{props.bedrooms} Bedrooms</p>
                </div>
            </section>
        </>
    );
};

export default Package;