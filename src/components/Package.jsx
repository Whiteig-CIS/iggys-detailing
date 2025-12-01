import "../css/Package.css";
import PackageDialog from "./PackageDialog";
import { useState } from "react";
import EditPackage from "./EditPackage";

const Package = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);

    const [editPackage , setEditPackage] = useState(props);

    const editPackageFunct = (pkg) => {
        setEditPackage(pkg);
    }


    const showPackageDetails = () => {
        setShowDialog(true);
    }

    const closePackageDetails = () => {
        setShowDialog(false);
    }

    const showEditDialog = (event) => {
        setEditDialog(true);

    }

    const hideEditDialog = (event) => {
        setEditDialog(false);
    }


    return (
        <>
        {editDialog ? (<EditPackage
                        editPackage = {editPackageFunct}
                        close={hideEditDialog}
                        _id={props._id}
                        vehicle_type={props.vehicle_type}
                        teir={props.teir}
                        price={props.price}
                        summary={props.summary}
                        images={props.images}
                        preview_image={props.preview_image}
                        interior_services={props.interior_services}
                        exterior_services={props.exterior_services}
        />) : ("")}



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

            <section className="package">
                <section onClick={showPackageDetails}>
                <div className="package-image">
                    <img src={"https://detailing-server.onrender.com/images/portfolio/" + props.preview_image} alt="package" /> 
                    {/*<img src={"http://localhost:3001/images/portfolio/" + props.preview_image} alt="package" />  */}
                </div>
                <h3 className="package-tier">{props.tier}</h3>
                <p className="package-summary">{props.summary}</p>
                </section>
                <footer className="columns">
                    <div id="left-icon" ><a href="#" onClick={showEditDialog}>✏️</a></div>
                    <div id="right-icon"><a href="#" onClick={hideEditDialog}>🗑️</a></div>
                </footer>
            </section>
        </>
    );

};

export default Package;