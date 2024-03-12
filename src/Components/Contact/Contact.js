import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Contact/Contact.css";
import Title from "../Title/Title"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d8282182-bb44-4d42-9ecb-0f47f76382c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <Navbar />
      <Title title="Get In Touch" />
      <div className="container">
        {/* <div className="contact-details">
          <div className="address">
            <FaAddressBook className="add" />
            <div className="address-text">
              <h2>Address</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                optio saepe at, veritatis vel ducimus!
              </p>
            </div>
          </div>
          <div className="email">
            <TfiEmail className="mail" />
            <div className="email-text">
              <h2>Email</h2>
              <p>MeenakshiScraps@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <FaPhoneSquareAlt className="call" />
            <div className="phone-text">
              <h2>Phone</h2>
              <p>+91 7675763722</p>
            </div>
          </div>
        </div> */}
        <div className="send-message">
          <form onSubmit={onSubmit}>
            <label htmlFor="">
              Full Name <span>*</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label htmlFor="">
              Email <span>*</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </label>
            <label htmlFor="">
              Phone Number <span>*</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your mobile number"
                required
              />
            </label>
            <label>
              Message <span>*</span>
              <textarea
                name="message"
                rows="3"
                placeholder="Enter your message"
                required
              ></textarea>
            </label>
            <button className="btn-outline">Send Inquiry</button>
          </form>
        </div>
        <span className="result">{result}</span>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
