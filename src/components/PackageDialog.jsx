import "./../css/Dialog.css";
import GalleryImage from "./GalleryImage";
 
const imgPath = "https://detailing-server.onrender.com/images/portfolio/";
//const imgPath = "http://localhost:3001/images/portfolio/";

const PackageDialog = (props) => {
  console.log(props.interior_services);
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

          <div className="columns">


            <section id="main-preview">
              <header>
                <div>
                <div id="package-title">
                  <h1>{props.teir} </h1>
                  <h1>{props.vehicle_type} </h1>
                  <h1>Detail</h1>
                </div>

                <h3>Starting Price: ${props.starting_price}</h3>
                </div>
              </header>


              <ul className="dialog_list">
                {props.interior_services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

              <ul className="dialog_list">
               {props.exterior_services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>

             <section id="portfolio" className="gallery">
  {Array.isArray(props.images) &&
    props.images.map((group, index) => (
      <GalleryImage
        key={index}
        before={imgPath + group[0]}
        after={group[1] ? imgPath + group[1] : imgPath + group[0]}
      />
    ))}
</section>


            </section>
            {/*<div id="dialog-content">
              <h3>{props.teir}</h3>
              <h3>{props.vehicle_type}</h3>
              <h3>${props.price}</h3>
              <p>Summary {props.summary}</p>
            </div>

            <div className="dialog-img">
              <img
                className="dialog-img-el"
                src={`https://detailing-server.onrender.com/images/portfolio/${props.preview_image}`}
                alt="package"
              />
            </div>*/}

          </div>

        </div>
      </div>
    </div>
  );
};

export default PackageDialog;