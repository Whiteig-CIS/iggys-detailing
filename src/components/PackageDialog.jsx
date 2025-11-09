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

          {/* was class="columns" — in React it must be className */}
          <div className="columns">
            <div className="dialog-img">
              <img
                className="dialog-img-el"
                src={`https://detailing-server.onrender.com/images/portfolio/${props.preview_image}`}
                alt="package"
              />
            </div>

            <div id="dialog-content">
              <h3>{props.teir}</h3>
              <h3>{props.vehicle_type}</h3>
              <h3>${props.price}</h3>
              <p>Summary {props.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDialog;