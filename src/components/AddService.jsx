import pic from "../images/icons.svg";


const AddService = (props) => {
    return (
       
        <div>
            <input type="text" key={props.key} id={props.service} name={props.service} 
                                placeholder={props.service == "interior_service" ? "Interior Service": "Exterior Service"} 
                                required></input>
        </div>
    
    );
};

export default AddService;