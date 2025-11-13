import pic from "../images/icons.svg";


const AddService = (props) => {
    return (
       
        <div>
            <label htmlFor={props.service}>Inerior Services:</label>
            <input type="text" key={props.key} id={props.service} name={props.service} required></input>
        </div>
    
    );
};

export default AddService;