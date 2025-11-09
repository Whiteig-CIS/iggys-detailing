import "../css/Package.css";
import PackageDialog from "./PackageDialog";
import { useState } from "react";

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
            {showDialog ? (
                <PackageDialog closePackageDialog={closePackageDetails}
                    type={props.vehicle_type}
                    teir={props.teir}
                    interior_services={props.interior_services}
                    exterior_services={props.exterior_services}
                    price={props.price}
                    summary={props.summary}
                    images={props.images} />
            ) : ("")}

            <section className="package" onClick={showPackageDetails}>
                <div className="package-image">
                    <img src={"https://detailing-server.onrender.com/images/" + props.images[0]} alt="package" />  </div>
                <h3 className="package-tier">{props.tier}</h3>
                <p className="package-summary">{props.summary}</p>
            </section>
        </>
    );

};

export default Package;