import React, { useRef } from "react";

const ImageInput = ({ uploadImage, name}) => {
  const fileInput = useRef(null);


  return (
    <>
      <input 
        type="file"
        name={name+"Img"}
        ref={fileInput}
        onChange={(event) => uploadImage(event, (name=="Before") ? true : false)} // determines if its previewed as a before image or after image
        style={{ display: 'none' }}
      />
      <button
        type="button"
        className="upload-btn"
        onClick={() => fileInput.current && fileInput.current.click()}
        style={{ width: '40%', fontSize: '14px', marginBottom: '10px' }}
      >
        {name+" Image"}
      </button>
    </>
  );
};

export default ImageInput;