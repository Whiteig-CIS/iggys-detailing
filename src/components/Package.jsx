import "../css/Package.css";
import PackageDialog from "./PackageDialog";
import { useState } from "react";
import EditPackage from "./EditPackage";
import DeleteDialog from "./DeleteDialog";

const Package = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [packagePreview, setPackagePreview] = useState(true);

    const [packageData, setPackageData] = useState(props);

    const editPackage = (pkg) => {
        // update local display
        setPackageData(pkg);
        // notify parent list to update its array if handler provided
        if (props.onEditPackage) props.onEditPackage(pkg);
    }


    const showPackageDetails = () => {
        setShowDialog(true);
    }

    const closePackageDetails = () => {
        setShowDialog(false);
    }

    const showEditDialog = () => {
        setEditDialog(true);

    }

    const hideEditDialog = () => {
        setEditDialog(false);
    }

    const showDeleteDialog = () => {
        setDeleteDialog(true);
    }

    const hideDeleteDialog = () => {
        console.log("in delete dialog");
        setDeleteDialog(false);
    }

    const showPackage = () => {
        setPackagePreview(true);
    }

    const hidePackage = () => {
        setPackagePreview(false);
    }


    return (

        <>
            {packagePreview ? ( <> 

            {editDialog ? (<EditPackage
                editPackage={editPackage}
                close={hideEditDialog}
                _id={packageData._id}
                vehicle_type={packageData.vehicle_type}
                teir={packageData.teir}
                starting_price={packageData.starting_price}
                summary={packageData.summary}
                images={packageData.images}
                preview_image={packageData.preview_image}
                interior_services={packageData.interior_services}
                exterior_services={packageData.exterior_services}
            />) : ("")}


            {deleteDialog ? (<DeleteDialog close={hideDeleteDialog} _id={props._id} hidePackage={hidePackage} />) : ("")}



            {showDialog ? (
                <PackageDialog closePackageDialog={closePackageDetails}
                    vehicle_type={props.vehicle_type}
                    teir={props.teir}
                    starting_price={props.starting_price}
                    summary={props.summary}
                    images={props.images}
                    preview_image={props.preview_image}
                    interior_services={props.interior_services}
                    exterior_services={props.exterior_services} />
            ) : ("")}

            <section className="package">
                <section onClick={showPackageDetails}>
                    <div className="package-image">
                        {/* <img src={"https://detailing-server.onrender.com/images/portfolio/" + packageData.preview_image} alt="package" /> */}
                        <img src={"http://localhost:3001/images/portfolio/" + packageData.preview_image} alt="package" />
                    </div>
                    <h3 className="package-tier">{packageData.tier || packageData.teir}</h3>
                    <p className="package-summary">{packageData.summary}</p>
                </section>
                <footer className="columns">
                    <div id="left-icon" ><a href="#" onClick={showEditDialog}>✏️</a></div>
                    <div id="right-icon"><a href="#" onClick={showDeleteDialog}>🗑️</a></div>
                </footer>
            </section>

              </> ) : ("")} 
        </>

    );

};

export default Package;