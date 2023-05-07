import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="footer__about">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nibh ac nisl imperdiet efficitur.
          </p>
          <p>
            Nulla facilisi. Sed semper dui eu sem aliquet fermentum. Proin vel
            fringilla mauris, ut tristique nisi. Proin consequat tortor libero,
            vitae sodales nisi consequat a. Etiam in semper enim. Sed aliquet
            felis in arcu convallis, at blandit magna euismod.
          </p>
        </div>
        <div className="footer__social">
          <h3>Connect With Me</h3>
          <div className="footer__social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer__contact">
          <h3>Contact Me</h3>
          <form className="footer__contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <p>&copy; 2023 Chanel Best. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
