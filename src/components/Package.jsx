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


    return (
        <>
            {showDialog ? (
                <PackageDialog closePackageDialog={closePackageDetails}
                    vehicle_type={props.vehicle_type}
                    teir={props.teir}
                    price={props.price}
                    summary={props.summary}
                    images={props.images}
                    preview_image={props.preview_image}
                    interior_services={props.interior_services}
                    exterior_services={props.exterior_services} />
            ) : ("")}

            <section className="package" onClick={showPackageDetails}>
                <div className="package-image">
                    <img src={"https://detailing-server.onrender.com/images/portfolio/" + props.preview_image} alt="package" />  </div>
                <h3 className="package-tier">{props.tier}</h3>
                <p className="package-summary">{props.summary}</p>
            </section>
        </>
    );

};

export default Package;