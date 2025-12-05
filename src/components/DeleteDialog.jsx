import React, { useState, useEffect } from "react";
import "../css/AddPackageDialog.css";

const DeleteDialog = (props) => {
    const [result, setResult] = useState("Confirm Deletion");

    const deletePackage = async(event) => {
        event.preventDefault();
        event.stopPropagation();
        const response = await fetch(
            `http://localhost:3001/api/packages/${props._id}`,
            {
                method: "DELETE",
            }
        );

        if(response.status === 200) {
            setResult("Package Deleted.");
            // close the dialog after successful deletion
            props.close();
            props.hidePackage();
            
        } else {
            console.log("error deleting package ", response);
            setResult("Error deleting package");
        }
    };

    return (
        <>
            <div id="delete-dialog" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <div className="columns">

                            <span
                                id="dialog-close"
                                className="w3-button w3-display-topright"
                                onClick={props.close}>
                                &times;
                            </span>

                            <h1>{result}</h1>

                            <button className="delete-button" onClick={deletePackage}>Yes</button>
                            <button className="delete-button" onClick={props.close}>No</button>

                        </div>


                    </div>
                </div>
            </div>
        </>

    );


};

export default DeleteDialog;