import React from 'react'
import "./footer.css"
import logo from "../assets/img/logo.svg"
import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaPinterest
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import backgroundImage from "../assets/img/footerimg.svg"

const Footer = () => {
  let circleClasses = "inline-block p-4 rounded-full";
  let iconStyles = { color: "white", fontSize: "1.2em" };
  return (
    <footer
      className="footer bg-contain bg-no-repeat w-full min-h-72 flex flex-col justify-center pt-10  items-center mt-20 mb-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="footer-content">
        <div className=" footer-logo">
          <img src={logo} alt="Fynd Academy" />
        </div>
        <p className="footer-description">
          Fynd Academy is an accelerated learning program for freshers and experienced professionals to build their skills and meaningfully contribute at work from day one.
        </p>
        <div className="footer-social-icons">
          <a href="#" className="social-icon"><span style={{ background: "#3B5998" }} className={circleClasses}>
            <FaFacebookF style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"> <span style={{ background: "black" }} className={circleClasses}>
            <BsTwitterX style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"><span style={{ background: "black" }} className={circleClasses}>
            <FaInstagram style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"><span style={{ background: "#BD081C" }} className={circleClasses}>
            <FaPinterest style={iconStyles} />
          </span></a>
        </div>
      </div>
      <div className="footer-links">
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Knowledge Base</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Caution Notice</a>
        <a href="#">Terms Of Use</a>
        <a href="#">Contact us</a>
      </div>
      <div className="footer-bottom">
        <p>#MadeInIndia | &copy; 2024 Shopsense Retail Technologies Limited</p>
      </div>
    </footer>
  )
}

export default Footer