import React, { useState } from "react";
import "./ContectPage.css"; // Make sure to import your CSS file
import { Link } from 'react-router-dom';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        {/* Left Form Section */}
        <div className="form-section">
          <div className="circle-decoration one"></div>
          <div className="circle-decoration two"></div>
          <div className="form-content">
            <h2 className="form-title">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label className="input-label" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label className="input-label textarea-label" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Contact Info Section */}
      
<div className="contact-info-section">
  <h2 className="contact-info-title">Get in Touch</h2>
  <p className="contact-info-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex nec turpis vestibulum, ac laoreet tortor aliquet.
  </p>
  <div className="contact-info-detail">
    <i className="contact-info-icon fas fa-phone-alt"></i>
    <span>+1 234 567 890</span>
  </div>
  <div className="contact-info-detail">
    <i className="contact-info-icon fas fa-envelope"></i>
    <span>info@example.com</span>
  </div>
  <div className="contact-info-detail">
    <i className="contact-info-icon fas fa-map-marker-alt"></i>
    <span>123 Example Street, City, Country</span>
  </div>
  <div className="social-media-section">
    <p className="social-media-text">Follow us:</p>
    <div className="social-icons-container">
      <Link to="/" className="social-icon-link">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to="/" className="social-icon-link">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link to="/" className="social-icon-link">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link to="/" className="social-icon-link">
        <i className="fab fa-linkedin-in"></i>
      </Link>
    </div>
  </div>
</div>
      </div>

      {/* Background Decorations */}
      <div className="large-circle-decoration"></div>
      <div className="square-decoration"></div>
    </div>
  );
};

export default Contact;
