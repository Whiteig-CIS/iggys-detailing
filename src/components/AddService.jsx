import pic from "../images/icons.svg";


const AddService = (props) => {
    return (
       
        <div>
            <label htmlFor={props.for}>Inerior Services:</label>
            <input type="text" id={props.for} name={props.for} required></input>
        </div>
    
    );
};

export default AddService;