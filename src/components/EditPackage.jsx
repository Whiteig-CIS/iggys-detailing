
import React, { useState, useEffect } from "react";
import AddService from "./AddService";
import GalleryImage from "./GalleryImage";
import ImageInput from "./ImageInput";
import "../css/EditPackage.css";


const EditPackage = (props) => {

    const [inputs, setInputs] = useState({
        _id: props._id,
        vehicle_type: props.vehicle_type,
        teir: props.teir,
        starting_price: props.starting_price,
        summary: props.summary,
        images: props.images,
        preview_image: props.preview_image,
        interior_services: props.interior_services,
        exterior_services: props.exterior_services,
    });

    const [result, setResult] = useState("");

    // Initialize images state with a copy of props.images
    const [images, setImages] = useState(props.images || []);

    const [pairNum, setPairNum] = useState(0);

    // Helper function to determine the correct image source
    const path = "https://detailing-server.onrender.com/images/portfolio/";
    

    const getImagePath = (fileOrName) => {
        if (!fileOrName) return "";

        // Check if the item is a File object (meaning it's a new upload)
        if (fileOrName instanceof File) {
            // Use the client-side URL for display
            return URL.createObjectURL(fileOrName); 
        } 
        
        // Otherwise, assume it's the file name string from the database
        return path + fileOrName;
    }

    const nextPair = () => {
        const lastIndex = images.length - 1;

        setPairNum(prevPairNum => {
            if (prevPairNum < lastIndex) {
                console.log("Advancing from " + prevPairNum + " to " + (prevPairNum + 1));
                return prevPairNum + 1;
            } else {
                console.log("Wrapping from " + prevPairNum + " to 0");
                return 0;
            }
        });
    }

    const prevPair = () => {
        const lastIndex = images.length - 1;

        setPairNum(prevPairNum => {
            if (prevPairNum > 0) {
                console.log("Going back from " + prevPairNum + " to " + (prevPairNum - 1));
                return prevPairNum - 1;
            } else {
                console.log("Wrapping to end: from " + prevPairNum + " to " + lastIndex);
                return lastIndex;
            }
        });
    };

    const testImages = () => {
        if (pairNum < 0 || pairNum >= images.length) {
            console.error(`Invalid pairNum: ${pairNum}. Cannot access image.`);
            return;
        }

        const set = images[pairNum];
        if (set && set[0] && set[1]) {
            console.log("Before Image Pair: ", set[0]);
            console.log("After Image Pair: ", set[1]);
        } else {
            console.error(`Image set at index ${pairNum} is malformed or missing.`);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

   // --- MODIFIED IMAGE HANDLER ---
   const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (!file) return;

        // 1. Create a copy of the current images state
        const newImages = [...images];

        // Ensure the current pair exists and is an array
        if (newImages[pairNum] && Array.isArray(newImages[pairNum])) {
            
            // 2. Update the specific index (0 for Before, 1 for After) with the File object
            newImages[pairNum][index] = file; 
            
            // 3. Update the state to trigger a re-render
            setImages(newImages);

            console.log(`Image at pairNum ${pairNum}, index ${index} updated with a new File object.`);
        } else {
             console.error(`Cannot update image: Image set at index ${pairNum} is malformed or missing.`);
        }
        
        // Clear the input value so the same file can be selected again
        event.target.value = "";
    }

    // --- MODIFIED SUBMISSION HANDLER ---
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("sending...");
        const formData = new FormData(event.target);

        const interior_services = formData.getAll("interior_service");
        const exterior_services = formData.getAll("exterior_service");

        formData.delete("interior_service");
        formData.delete("exterior_service");

        interior_services.forEach(service => {
            formData.append("interior_services", service);
        });

        exterior_services.forEach(service => {
            formData.append("exterior_services", service);
        });

        // Loop through the images state to find newly uploaded File objects
        images.forEach((pair, pairIndex) => {
            if (!pair || !Array.isArray(pair)) return;

            pair.forEach((item, index) => {
                // If the item is a File object, it's a new upload
                if (item instanceof File) {
                    // Append the file, using a structured name the server can understand
                    // to replace the image at this specific index (pair_index, before/after).
                    const slotName = index === 0 ? 'before' : 'after';
                    formData.append(`new_image_pair_${pairIndex}_${slotName}`, item);
                    
                    // You might also need to send the original filename if the server needs 
                    // to know which file to delete, but for now, we just send the new file.
                }
            });
        });


        const response = await fetch(
            `https://detailing-server.onrender.com/api/packages/${props._id}`,
            {
                method: "PUT",
                body: formData,
            }
        );

        console.log(response);
        if (response.status === 200) {
            setResult("Package Loaded");
            event.target.reset();
            props.editPackage(await response.json());
            props.close();
        } else {
            console.log("error editing package", response);
            setResult("Error: " + response.statusText);
        }
    };

    return (
        <>
            <div id="edit-dialog" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <span id="close-dialog"
                            className="w3-button w3-display-topright"
                            onClick={props.close}>
                            &times;
                        </span>

                        <form id="edit-form" onSubmit={onSubmit} >


                            <div id="add-title-result" className="columns">
                                <h2>Edit Package</h2>
                                <div id="add-submit-div">
                                    <button type="submit">Submit</button>
                                </div>

                                <div>{result}</div>

                            </div>

                            <section id="top-section">
                                <div id="type-teir-price" className="columns">
                                    <div>
                                        <input type="text" id="vehicle_type" name="vehicle_type" placeholder="Vehicle Type" onChange={handleChange} value={inputs.vehicle_type || ""} required></input>
                                    </div>

                                    <div>
                                        <input type="text" id="teir" name="teir" placeholder="Tier" onChange={handleChange} value={inputs.teir || ""} required></input>
                                    </div>

                                    <div>
                                        <input type="number" id="starting_price" name="starting_price" placeholder="Starting Price" min="20" onChange={handleChange} value={inputs.starting_price || ""} required></input>
                                    </div>
                                </div>

                                <div>
                                    <textarea type="text" id="summary" name="summary" placeholder="Summary" onChange={handleChange} value={inputs.summary || ""} required></textarea>
                                </div>
                            </section>

                            <section id="add-bottom-section" className="columns unlimited-scroll">

                                <section id="add-service-section">

                                    {/*INTERIOR SERVICES*/}
                                    <section id="service-section">
                                        <h4 id="service-title">Interior Services</h4>

                                        {inputs.interior_services && inputs.interior_services.map((service, index) => (
                                            <AddService
                                                key={`interior-${index}`} // Added key for list items
                                                service="interior_service"
                                                textVal={service}
                                                handleChange={handleChange}
                                            />
                                        ))}
                                        <AddService service="interior_service" textVal="" handleChange={handleChange} />


                                    </section>


                                    {/*EXTERIOR SERVICES*/}
                                    <section id="service-section">
                                        <h4 id="service-title">Exterior Services</h4>

                                        {inputs.exterior_services && inputs.exterior_services.map((service, index) => (
                                            <AddService
                                                key={`exterior-${index}`} // Added key for list items
                                                service="exterior_service"
                                                textVal={service}
                                                handleChange={handleChange}

                                            />
                                        ))}
                                         <AddService service="exterior_service" textVal="" handleChange={handleChange} />

                                    </section>
                                </section>



                                <section id="add-image-section">

                                    <div className="columns">
                                        <button type="button" onClick={prevPair}>&lt;</button>
                                        <button type="button" onClick={nextPair}>&gt;</button>
                                    </div>

                                   
                                    <h3>Before Image</h3>
                                    {/* --- MODIFIED IMAGE SRC --- */}
                                    <img 
                                        id="before-img" 
                                        src={images[pairNum] ? getImagePath(images[pairNum][0]) : ""} 
                                        alt="before" 
                                    />
                                    <ImageInput uploadImage={(e) => handleImageChange(e, 0)} name={"Before"} stage={true} beforeBttn={true} />
                                   
                                  
                                    <h3>After Image</h3>
                                    {/* --- MODIFIED IMAGE SRC --- */}
                                    <img 
                                        id="after-img" 
                                        src={images[pairNum] ? getImagePath(images[pairNum][1]) : ""} 
                                        alt="after" 
                                    />
                                     <ImageInput uploadImage={(e) => handleImageChange(e, 1)} name={"After"} stage={false} beforeBttn={false} />
                                    
                                    {/* Test Images is a function, call it if you want the logs to run */}
                                    {/* {testImages()} */} 

                                </section>

                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditPackage;