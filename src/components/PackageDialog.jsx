import "./../css/Dialog.css";

const PackageDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closePackageDialog}
                    >
                        &times;
                    </span>
                    <div class="columns">
                        <img src={"https://detailing-server.onrender.com/images/"+props.images[0]} alt="package" />
                        <div id="dialog-content">
                            <h3>{props.teir}</h3>
                            <h3>{props.vehicle_type} type</h3>
                            <h3>{props.price} price</h3>
                            <p>Summary {props.summary} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDialog;