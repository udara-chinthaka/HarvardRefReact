import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="">
      <a href="www.chinthakaoficial.com" className="footer_logo">
        UDARA CHINTHAKA
      </a>

      <div className="footer_socials">
        <a href="https://www.facebook.com/udarachinthaka135/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/uc.chinthaka/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/udarachinthaka/">
          <FaLinkedinIn />
        </a>
        <a href="https://twitter.com/udara0c">
          <FaTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; chinthakaofficial. All right reverved 2023.</small>
      </div>
    </footer>
  );
};

export default Footer;
