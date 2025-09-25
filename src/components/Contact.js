import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>📞 Get in Touch with Us!</h2>
      <p className="contact-subtitle">
        We'd love to hear from you. Reach out for orders, queries, or feedback!
      </p>

      <div className="contact-cards">
        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>
            <a
              href="https://www.google.com/maps?q=No+45,+Shop+no.1+Paragathi+Layout,+Halehalli+Road,+TC+Palya+KR+Puram,+Bangalore+-+560036"
              target="_blank"
              rel="noopener noreferrer"
            >
              No 45, Shop no.1 Paragathi Layout, Halehalli Road,  
              TC Palya KR Puram, Bangalore - 560036
            </a>
          </p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>
            <a href="tel:+918867006884">+91 8867006884</a>
          </p>
        </div>

        <div className="contact-card">
          <h3>✉️ Email</h3>
          <p>
            <a href="mailto:kinsfreshchicken@gmail.com">
              kinsfreshchicken@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="contact-map">
        <a
          href="https://www.google.com/maps?q=No+45,+Shop+no.1+Paragathi+Layout,+Halehalli+Road,+TC+Palya+KR+Puram,+Bangalore+-+560036"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            title="Kin's Fresh Chicken Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.518035518002!2d77.71005777460493!3d13.007208487304586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c7e4d8f1b3%3A0xXXXXXXXXXXXX!2sNo+45%2C+Shop+no.1+Paragathi+Layout%2C+Halehalli+Road%2C+TC+Palya+KR+Puram%2C+Bangalore-560036!5e0!3m2!1sen!2sin!4v1695240000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, pointerEvents: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </a>
      </div>
    </div>
  );
}

export default Contact;
