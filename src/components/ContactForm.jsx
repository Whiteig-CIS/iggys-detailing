import '../css/ContactForm.css';
import { useState } from 'react';

const ContactForm = () => {
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ead7ce0c-6566-41e7-bd92-a26fe96b6587");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
        <section id="contact-form" className="columns">
            <div id="name-email" className="one">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div id="message-div" className="three">
                <textarea name="message" placeholder="Message" required></textarea>
            </div>

            <div id="submit-div" className="one">
            <button type="submit">Submit Form</button>
            </div>
        </section>
      <span>{result}</span>
    </form>
  );
};

export default ContactForm;