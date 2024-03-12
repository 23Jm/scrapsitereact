import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaAddressBook } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import "../Location/Location.css";
import Footer from "../Footer/Footer";

const Location = () => {
  return (
    <div className="location">
      <Navbar />
      <Title title="Contact Us" />
      <div className="container">
        <div className="contact-details">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
