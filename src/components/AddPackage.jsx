import React, { useState } from "react";
import AddService from "./AddService";

const AddPackage = (props) => {

    const [interiorCount, setInteriorCount] = useState(1);
    const [exteriorCount, setExteriorCount] = useState(1);

    const [BeforePrevSrc, setBeforePrevSrc] = useState("");
    const [AfterPrevSrc, setAfterPrevSrc] = useState("");

    const [result, setResult] = useState("");




    const uploadImage = (event, before) => {
       const file = event.target.files[0];
  const src = URL.createObjectURL(file);

  if (before) {
    setBeforePrevSrc(src);
  } else {
    setAfterPrevSrc(src);
  }
    };



    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3001/api/houses", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Package Added");
            event.target.reset();
            props.closeAddDialog();
            props.updatePackages(await response.json());
        } else {
            setResult("Error adding house");
        }
    };


    return (
        <>
            <div id="add-dialog" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddPackage}>&times;</span>
                        <form id="add-property-form" onSubmit={addToServer}>
                            <h2>Add Package</h2>

                            <p>
                                <label htmlFor="vehicle_size">Vehicle Type:</label>
                                <input type="text" id="vehicle_type" name="vehicle_type" required></input>
                            </p>

                            <p>
                                <label htmlFor="teir">Teir:</label>
                                <input type="text" id="teir" name="teir" required></input>
                            </p>

                            <p>
                                <label htmlFor="starting_price">Starting Price:</label>
                                <input type="number" id="starting_price" name="starting_price" min="20" required></input>
                            </p>

                            {/*used chat to help*/}
                            <p>
                                {Array.from({ length: interiorCount }).map((_, i) => (
                                    <AddService
                                        key={i}
                                        service="interior_services"
                                        index={i}
                                    // if your AddService needs unique field names:
                                    // name={`interior_service[${i}]`}
                                    />
                                ))}
                            </p>

                            <button
                                id="addInteriorService"
                                type="button"
                                onClick={() => setInteriorCount((c) => c + 1)}
                            >Add Another Interior Service</button>


                            {/*used chat to help*/}
                            <p>
                                {Array.from({ length: exteriorCount }).map((_, i) => (
                                    <AddService
                                        key={i}
                                        service="exterior_services"
                                        index={i}
                                    // if your AddService needs unique field names:
                                    // name={`interior_service[${i}]`}
                                    />
                                ))}
                            </p>

                            <button
                                id="addExteriorService"
                                type="button"
                                onClick={() => setExteriorCount((c) => c + 1)}
                            >Add Another Exterior Service</button>

                            <p>
                                <label htmlFor="summary">Summary:</label>
                                <input type="text" id="summary" name="summary" required></input>
                            </p>

                            <p id="img-before">
                                <label htmlFor="img">Upload Before Photo:</label>
                                <input type="file" id="BeforeImg" name="BeforeImg" accept="image/*" onChange={(event) => uploadImage(event, true)}/>
                            </p>

                            <p id="img-after">
                                <label htmlFor="img">Upload After Photo:</label>
                                <input type="file" id="AfterImg" name="AfterImg" accept="image/*" onChange={(event) => uploadImage(event, false)}/>
                            </p>

                            <div>
                                <p id="before-img-prev-section">
                                    {BeforePrevSrc!=""?
                                    (<img id="before-img-prev" src={BeforePrevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>

                            <div>
                                <p id="after-img-prev-section">
                                    {AfterPrevSrc!=""?
                                    (<img id="after-img-prev" src={AfterPrevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>

                            <p>
                            <button type="submit">Submit</button>
                            </p>

                            <p>{result}</p>


                        </form>
                    </div>
                </div>
            </div>

        </>



    );


};
export default AddPackage;