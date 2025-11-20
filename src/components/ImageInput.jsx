import React, { useRef } from "react";

const ImageInput = ({ uploadImage, name, stage, beforeBttn}) => {
    const fileInput = useRef(null);
    
    
    const handleChange = (event) => {
    
        uploadImage(event);
  
    }


  return (
    <>
      <input 
        type="file"
        name={name+"Img"}
        ref={fileInput}
         disabled = {!(beforeBttn == stage)}
        onChange={handleChange} // determines if its previewed as a before image or after image
        style={{ display: 'none' }}
       
        multiple
      />
      <button
  type="button"
  className="upload-btn"
  disabled={!(beforeBttn == stage)}
  onClick={() => fileInput.current && fileInput.current.click()}
>
  {name + " Image"}
</button>
    </>
  );
};

export default ImageInput;