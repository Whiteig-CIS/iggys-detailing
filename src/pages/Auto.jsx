import "../css/Auto.css"
import ImageBanner from "../components/ImageBanner";
import autoImg from "../images/auto.jpg";
import PackageList from "../components/PackageList";

const Auto = () => {
    return (
        <div id="marine">
            <ImageBanner title1="AUTOMOTIVE" title2="DETAILING" path={autoImg}/>

            <p>Cars are exposed daily to dust, dirt, and the elements, which can quickly take away from their appearance and condition. While keeping up with a vehicle’s cleanliness can be overwhelming for owners, at Iggy’s Detailing we specialize in bringing cars back to a like-new shine. From the interior to the exterior, every surface is carefully cleaned and protected, ensuring your car not only looks its best but also provides a more enjoyable driving experience.</p>

            <h1 className="explore"><u>Explore Packages</u></h1>

            <PackageList num="3" end="5" />
            
        </div>
    );


};

export default Auto;