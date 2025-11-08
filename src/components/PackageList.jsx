import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Package.css";
import Package from "../components/Package";

const PackageList = (props) => {
    const [packages, setPackages] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadPackages = async() => {
            const response = await axios.get("https://detailing-server.onrender.com/api/packages");
            setPackages(response.data.splice(0,props.num));
            
        };

        loadPackages();
    },[]);

    return (
        <div id="package-list" className="columns">
           
            {packages.map((pkg)=>(
                <Package  key={pkg._id} 
                        id={pkg._id}
                        vehicle_type={pkg.vehicle_type} 
                        teir={pkg.teir}
                        interior_services={pkg.interior_services}
                        exterior_services={pkg.exterior_services}
                        price={pkg.price}
                        summary={pkg.summary}
                        images={pkg.images} />
            ))}
        </div>
    )
};

export default PackageList;