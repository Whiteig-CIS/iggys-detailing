import "../css/Home.css";
import HomeImage from "../components/HomeImage";
import Icons from "../components/Icons";
import SplitDiv from "../components/SplitDiv";
import Divider from "../components/Divider";

const Home = () => {
    return (
        <div id="home">
            <div className="columns">
                <HomeImage />
                <div id="text-holder" >
                    <div id="border">
                        <h1>Columbia and Charlotte Detailing</h1>
                    </div>
                    <p>At Iggy’s Detailing, we take pride in delivering professional marine and automotive detailing services that leave your vehicle or boat looking its absolute best. What started as a passion project in high school in Fort Mill, SC, has grown into a trusted detailing company known for quality results at an affordable price. Over the years, we’ve built a reputation for attention to detail, reliable service, and a commitment to customer satisfaction. Whether you need your car refreshed or your boat restored to showroom shine, Iggy’s Detailing is here to provide top-notch care that protects your investment and keeps it looking sharp.</p>
                </div>
            </div>

            <Icons />

            <SplitDiv
                title="Marine"
                text="Our marine detailing services are designed to keep your boat looking pristine while protecting it from the harsh elements of sun, salt, and water. At Iggy’s Detailing, we specialize in everything from full exterior washes and waxes to oxidation removal, gelcoat restoration, and interior cleaning, ensuring every inch of your vessel shines like new. We use professional-grade products and proven techniques to preserve your boat’s finish, extend its longevity, and enhance your time on the water. Whether you own a fishing boat, pontoon, or luxury yacht, our goal is to deliver a flawless detail that not only improves appearance but also safeguards your investment."
                videoURL={"Y5Hz4gzJ5ZQ"}
                direction={""}
            />

            <Divider />

            <SplitDiv
                title="Auto"
                text="Our automotive detailing services are built to restore, protect, and maintain your vehicle’s appearance inside and out. At Iggy’s Detailing, we go beyond a standard car wash, offering deep interior cleaning, paint correction, waxing, and ceramic protection that bring out a showroom-quality finish. From daily drivers to high-performance vehicles, we treat every car with precision and care, using professional products and techniques to enhance shine, protect against wear, and preserve long-term value. Whether you’re preparing for a special occasion, improving resale value, or simply want your car to look its best, we deliver results that exceed expectations at an affordable price."
                videoURL={"LO1oL_xkFQg"}
                direction={"left"}
            />



        </div>
    );


};

export default Home;