import React, { useState, useEffect } from "react";
import AddService from "./AddService";
import ImageInput from "./ImageInput";
import GalleryImage from "./GalleryImage";


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

    const [images, setImages] = useState([props.images]);

    const gallerizeImages = () => {
        for (let i = 0; i < images.length; ++i) {
            //   const galleryImg =  <GalleryImage before={images[i][0]} after={images=[i][1]};
            //  images[i] = galleryImg;
        }
    }


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const handleImageChange = (event) => {
        //Gonna be tough
    }

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

        const response = await fetch(
            `http://localhost:3001/api/packages/${props._id}`,

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
            setResult(result.message);
        }
    };

    return (
        <>
            <div id="edit-dialog" class="w3-modal">
                <div class="w3-modal-content">
                    <div class="w3-container">
                        <span id="close-dialog"
                            class="w3-button w3-display-topright"
                            onClick={props.close}>
                            &times;
                        </span>

                        <form id="edit-form" onSubmit={onSubmit}>


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
                                                service="interior_service"
                                                textVal={service}
                                                handleChange={handleChange}
                                            />
                                        ))}


                                    </section>


                                    {/*EXTERIOR SERVICES*/}
                                    <section id="service-section">
                                        <h4 id="service-title">Exterior Services</h4>

                                        {inputs.exterior_services && inputs.exterior_services.map((service, index) => (
                                            <AddService
                                                service="exterior_service"
                                                textVal={service}
                                                handleChange={handleChange}

                                            />
                                        ))}

                                    </section>
                                </section>



                                <section id="add-image-section">

                                    {/* I didnt like how the button looked now how it wasnt customizable so I made this one 
                                    <ImageInput uploadImage={uploadImage} name={"Before"} stage={stage} beforeBttn={true} />
                                    <ImageInput uploadImage={uploadImage} name={"After"} stage={stage} beforeBttn={false} /> */}


                                    {images.length >= 1 ? images.map(pair => {
                                    return    pair.map(src => {
                                            const path = "http://localhost:3001/images/portfolio/";
                                            console.log("Creating <GalleryImage /> with before: " + path + src[1] + " and after: " + path + src[0]);
                                         return   <GalleryImage before={path + src[1]} after={path + src[0]} />
                                        })
                                    }) : ("")}


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