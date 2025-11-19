import React, { useState } from "react";
import AddService from "./AddService";
import "../css/AddPackageDialog.css";
import ImageInput from "./ImageInput";

const AddPackage = (props) => {

    const [interiorCount, setInteriorCount] = useState(1);
    const [exteriorCount, setExteriorCount] = useState(1);

    const [BeforePrevSrc, setBeforePrevSrc] = useState("");
    const [AfterPrevSrc, setAfterPrevSrc] = useState("");

    const [result, setResult] = useState("");




    const uploadImage = (event, before) => {
        const file = event.target.files[0];
        const files = event.target.files;
        const src = URL.createObjectURL(file);
        let beforeIMG;
        let afterIMG;

        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                console.log("File exists:", files[i].name);
            }
        }

        if(!file) {
            console.log("file isnt here");
            return;
        }

        if (before) {
            setBeforePrevSrc(src);
            console.log("made it to before");
            
        } else {
            setAfterPrevSrc(src);
            console.log("made it to after");
           

        } 
    };



    const addToServer = async (event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const form = document.getElementById("add-package-form");

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





        console.log("trying to post");
       for (let pair of formData.entries()) {
    console.log(pair[0] + ':', pair[1]);
}
        //const response = await fetch("https://detailing-server.onrender.com/api/packages", {
        const response = await fetch("http://localhost:3001/api/packages", {
            "method": "POST",
            "body": formData
        });

        if (response.status == 200) {
            setResult("Package Added");
            event.target.reset();
            props.closeAddDialog();
            props.updatePackages(await response.json());
        } else {
            setResult("Error adding package");
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

                            <section id="add-bottom-section" className="columns">

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
                                    
                                    {/* I didnt like how the button looked now how it wasnt customizable so I made this one*/}
                                    <ImageInput uploadImage={uploadImage} name={"Before"}/>
                                    <ImageInput uploadImage={uploadImage} name={"After"}/> 

                                    <div id="before-img-prev-section">
                                        {BeforePrevSrc != "" ?
                                            (<img id="before-img-prev" src={BeforePrevSrc}></img>) :
                                            ("")
                                        }
                                    </div>



                                    <div id="after-img-prev-section">
                                        {AfterPrevSrc != "" ?
                                            (<img id="after-img-prev" src={AfterPrevSrc}></img>) :
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