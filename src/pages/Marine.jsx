import "../css/Marine.css"
import ImageBanner from "../components/ImageBanner";
import marinePic from "../images/marine.png";
import PackagePreview from "../components/PackagePreview";

const Marine = () => {
    return (
        <div id="marine">
            <ImageBanner title1="MARINE" title2="DETAILING" path={marinePic} />

            <p>Boats naturally accumulate dirt and wear when left on the water for extended periods, but that doesn’t mean they have to stay that way. While cleaning a vessel can be challenging and time-consuming for owners, at Iggy’s Detailing we take pride in restoring every boat to its best condition. From canopy to compartments, we ensure your boat is spotless, transforming it into a vessel that you and your family can fully enjoy on the water.</p>

            <h1 className="explore"><u>Explore Packages</u></h1>


            <PackagePreview />
        </div>
    );


};

export default Marine;