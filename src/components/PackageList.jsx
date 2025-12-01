import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/Package.css";
import Package from "./Package";
import AddPackage from "./AddPackage";

const PackageList = (props) => {
    const [packages, setPackages] = useState([]);
    const [showAddPackage, setShowAddPackage] = useState(false);

    //open function
    const openAddPackage = () => {
      setShowAddPackage(true);
    }

    //close function
    const closeAddDialog = () => {
      setShowAddPackage(false);
    }

    //update
    const updatePackages = (pkg) => {
      setPackages((packages)=>[...packages, pkg]);
      console.log("in update packages");
    };


  //-------- Load Packages ----------//
  useEffect(() => {
  const loadPackages = async () => {
    try {
      const response = await axios.get("https://detailing-server.onrender.com/api/packages"); // RENDER
      //const response = await axios.get("http://localhost:3001/api/packages");// --------------- // LOCAL

      const startIndex = props.end ? parseInt(props.num) : 0;// ------------------------------- // loads a certain amount of packages
      const endIndex = props.end ? parseInt(props.end) : parseInt(props.num);

      const sliced = response.data.slice(startIndex, endIndex);
      setPackages(sliced); // ----------------------------------------------------------------- // sets the package list to the packages from start to end
    } catch (error) {
      console.error("Error loading packages:", error);
    }
  };

  loadPackages();
}, [props.num, props.end]);

// ---------- What shows on browser ----------//
    return (
    <>
        <button id="add-package-button" onClick={openAddPackage}>+</button>

        {showAddPackage? (<AddPackage
                              closeAddDialog={closeAddDialog}
                              updatePackages={updatePackages}
                              /> ): ("") }



        <div id="package-list" className="columns">
           
            {packages.map((pkg)=>(
                <Package  key={pkg._id} 
                        _id={pkg._id}
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
      </>
    )
};

export default PackageList;