import React, { useState } from "react";
import AddService from "./AddService";
import "../css/AddPackageDialog.css";
import ImageInput from "./ImageInput";
import { useEffect } from "react";
import GalleryImage from "./GalleryImage";

const AddPackage = (props) => {

    const [interiorCount, setInteriorCount] = useState(1);
    const [exteriorCount, setExteriorCount] = useState(1);

    const [result, setResult] = useState("");
    const [images, setImages] = useState([]);

    const [stage, setStage] = useState(true);
    const [pairCount, setPairCount] = useState(0);
    const [galleryList, setGalleryList] = useState([]);
    const [pendingBeforeURL, setPendingBeforeURL] = useState(null);







    const uploadImage = (event, IsBefore) => {
        const file = event.target.files[0];
        if (!file) return;

        // create object URL from the newly selected file (don't rely on state 'images' being updated yet)
        const fileURL = URL.createObjectURL(file);

        // keep raw files for upload
        setImages(prev => [...prev, file]);
        event.target.value = "";

        // If stage === true we expect a 'before' image next; when stage is false we just received the 'after' image
        if (stage) {
            // store the before image URL until the after image is uploaded
            setPendingBeforeURL(fileURL);
            setPairCount(prev => prev + 1);
        } else {
            // we have both before (pendingBeforeURL) and after (fileURL)
            const toGal = { beforeSRC: pendingBeforeURL, afterSRC: fileURL };
            setGalleryList(prev => [...prev, toGal]);
            // clear pending before
            setPendingBeforeURL(null);
        }

        // toggle stage for next upload
        setStage(prev => !prev);
    }



    useEffect(() => {
        console.log(images);
    }, [images]);



    const addToServer = async (event) => {
        event.preventDefault(); //stops us from going to another page or refreshing

       if(images.length % 2 == 0) {
        setResult("Sending...");

        const form = document.getElementById("add-package-form");

        const formData = new FormData(event.target);

        const interior_services = formData.getAll("interior_service");

        const exterior_services = formData.getAll("exterior_service");

        formData.delete("interior_service");
        formData.delete("exterior_service");
        formData.delete("BeforeImg");
        formData.delete("AfterImg");



        interior_services.forEach(service => {
            formData.append("interior_services", service);
        });

        exterior_services.forEach(service => {
            formData.append("exterior_services", service);
        });

        images.forEach(file => {
            formData.append("images", file);
        });




        console.log("trying to post");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ':', pair[1]);
        }
        const response = await fetch("https://detailing-server.onrender.com/api/packages", {
        //const response = await fetch("http://localhost:3001/api/packages", {
            "method": "POST",
            "body": formData
        });

        if (response.status === 200) {
            setResult("Package Added");
            event.target.reset();
            props.closeAddDialog();
            props.updatePackages(await response.json());
        } else {
            setResult("Error adding package"); 
        }
        }
        else {
            setResult("incorrect amount of images");
        }
    };


    return (
        <>
            <div id="add-dialog" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                        <form id="add-package-form" onSubmit={addToServer}>
                            <div id="add-title-result" className="columns">
                                <h2>Add Package</h2>
                                <div id="add-submit-div">
                                    <button type="submit">Submit</button>
                                </div>
                                <div>{result}</div>

                            </div>

                            <section id="top-section">
                                <div id="type-teir-price" className="columns">
                                    <div>
                                        <input type="text" id="vehicle_type" name="vehicle_type" placeholder="Vehicle Type" required></input>
                                    </div>

                                    <div>
                                        <input type="text" id="teir" name="teir" placeholder="Tier" required></input>
                                    </div>

                                    <div>
                                        <input type="number" id="starting_price" name="starting_price" placeholder="Starting Price" min="20" required></input>
                                    </div>
                                </div>

                                <div>
                                    <textarea type="text" id="summary" name="summary" placeholder="Summary" required></textarea>
                                </div>
                            </section>

                            <section id="add-bottom-section" className="columns unlimited-scroll">

                                <section id="add-service-section">

                                    {/*INTERIOR SERVICES*/}
                                    <div className="columns">
                                        <div>
                                            {Array.from({ length: interiorCount }).map((_, i) => (
                                                <AddService
                                                    key={i}
                                                    service="interior_service"
                                                    index={i}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            id="addInteriorService"
                                            type="button"
                                            onClick={() => setInteriorCount((c) => c + 1)}
                                        >+</button>
                                    </div>


                                    {/*EXTERIOR SERVICES*/}
                                    <div className="columns">
                                        <div>
                                            {Array.from({ length: exteriorCount }).map((_, i) => (
                                                <AddService
                                                    key={i}
                                                    service="exterior_service"
                                                    index={i}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            id="addExteriorService"
                                            type="button"
                                            onClick={() => setExteriorCount((c) => c + 1)}
                                        >+</button>
                                    </div>

                                </section>



                                <section id="add-image-section">

                                    {/* I didnt like how the button looked now how it wasnt customizable so I made this one */}
                                    <ImageInput uploadImage={uploadImage} name={"Before"} stage={stage} beforeBttn={true} />
                                    <ImageInput uploadImage={uploadImage} name={"After"} stage={stage} beforeBttn={false} />

                                      <div id="before-img-prev-section">
                                        {pairCount != 0 ?
                                           galleryList.map((pair, index) => (
                                                <GalleryImage before={pair.beforeSRC} after={pair.afterSRC} />
                                           ))
                                            
                                           :
                                            ("")
                                        }
                                    </div> 



                                   
                                </section>

                            </section>



                        </form>
                    </div>
                </div>
            </div>

        </>



    );


};

export default AddPackage;