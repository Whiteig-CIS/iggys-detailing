import "../css/Locations.css"
import SplitImg from "../components/SplitImg";
import pic1 from "../images/columbia.jpg";
import pic2 from "../images/fort-mill.png";
import Divider from "../components/Divider";

const Locations = () => {
    return (
        <div id="locations">
            <SplitImg 
            title="COLUMBIA, SC"
            text="In addition to Fort Mill, I also provide detailing services in Columbia, SC, and the surrounding areas. As a student at the University of South Carolina, I’ve expanded my coverage to serve clients here, bringing the same quality and attention to detail that has built my reputation back home."
            path={pic1}
            direction=""
            />

            <Divider />

            <SplitImg 
            title="FORT MILL, SC"
            text="I proudly serve the Fort Mill, SC area, where I grew up and continue to provide professional detailing services to the majority of my clients."
            path={pic2}
            direction="left"
            />
           
        </div>
    );


};

export default Locations;