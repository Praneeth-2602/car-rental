import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@carrental.com", "support@carrental.com"]
    },
    {
      icon: "📍",
      title: "Location",
      details: ["123 Car Street", "New York, NY 10001"]
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Let us know how we can help.</p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="info-container">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <div className="info-icon">
                  <span className="icon-text">{info.icon}</span>
                </div>
                <div className="info-text">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-image">
            {/* <img src="" alt="Contact Us" /> */}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;