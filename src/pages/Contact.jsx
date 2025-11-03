import "../css/Contact.css";
import me from "../images/contactPhoto.jpeg";
import SplitImg from "../components/SplitImg";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main>
            <div id="contact" className="columns">
                <div className="six">
                    <SplitImg 
                    title="Isaac White" 
                    text="My name is Isaac White, and detailing has been a passion of mine since I was young. I first started detailing in high school, where I quickly discovered how much I enjoyed bringing out the best in every vehicle and boat I worked on. Over the years, I’ve built on that foundation by dedicating myself to learning the best techniques, tools, and practices to deliver top-quality results for my clients. Today, while attending the University of South Carolina, I continue to grow my detailing business with the same commitment to precision and care that sparked my passion in the beginning. Every project I take on is more than just a job—it’s an opportunity to combine hard work and attention to detail to create a result that speaks for itself."
                    path={me}
                    direction="left"
                    />
                </div>
                
                <div className="one">
                    <ContactInfo />
                </div>

            </div>

            <section id="contact-form">
                <ContactForm />
            </section>
        </main>
    );


};

export default Contact;