import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Package.css";
import Package from "../components/Package";

const PackageList = (props) => {
    const [Packages, setPackages] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadPackages = async() => {
            const response = await axios.get("https://detailing-server.onrender.com/api/pkgs");
            setPackages(response.data.splice(0,props.num));
        };

        loadPackages();
    },[]);

    // TODO
    return (
        <div id="package-list" className="columns">
           
            {Packages.map((pkg)=>(
                <Package  key={pkg._id} 
                        id={pkg._id}
                        type={pkg.vehicle_type} 
                        teir={pkg.teir}
                        interior_services={pkg.interior_services}
                        exterior_services={pkg.exterior_services}
                        price={pkg.price}
                        summary={pkg.summary} />
            ))}
        </div>
    )
};

export default PackageList;