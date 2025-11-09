import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Package.css";
import Package from "../components/Package";

const PackageList = (props) => {
    const [packages, setPackages] = useState([]);

    //after page has loaded
    useEffect(() => {
  const loadPackages = async () => {
    try {
      const response = await axios.get("https://detailing-server.onrender.com/api/packages");

      // if only num is provided: 0 → num
      // if both num and end are provided: num → end
      const startIndex = props.end ? parseInt(props.num) : 0;
      const endIndex = props.end ? parseInt(props.end) : parseInt(props.num);

      const sliced = response.data.slice(startIndex, endIndex);
      setPackages(sliced);
    } catch (error) {
      console.error("Error loading packages:", error);
    }
  };

  loadPackages();
}, [props.num, props.end]);

    return (
        <div id="package-list" className="columns">
           
            {packages.map((pkg)=>(
                <Package  key={pkg._id} 
                        id={pkg._id}
                        vehicle_type={pkg.vehicle_type} 
                        teir={pkg.teir}
                        interior_services={pkg.interior_services}
                        exterior_services={pkg.exterior_services}
                        price={pkg.starting_price}
                        summary={pkg.summary}
                        images={pkg.images}
                        preview_image={pkg.preview_image} />
            ))}
        </div>
    )
};

export default PackageList;