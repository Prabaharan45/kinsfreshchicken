import React, { useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import heroImage from "../assets/chicken1.jpg";
import aboutImage from "../assets/logo.jpg";
import dish1 from "../assets/skinless.jpg";
import dish2 from "../assets/liver.jpg";
import dish3 from "../assets/drumstick.jpg";
import dish4 from "../assets/gizzard.jpg";

function Home() {
  const dishes = [
   
    { img: dish2, name: "Liver", price: "₹100 / kg" },
    { img: dish3, name: "Drumstick", price: "₹320 / kg" },
    { img: dish4, name: "Gizzard", price: "₹150 / kg" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "8867006884";
    const text = `Hello, I am ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleOrderNow = () => {
    const whatsappNumber = "8867006884";
    const text = "Hello, I want to order";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleBuyNow = (dish) => {
    const whatsappNumber = "8867006884";
    const text = `Hello, I want to order`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <div className="hero-buttons">
              <button onClick={handleOrderNow} className="btn btn-primary">
                Order Now
              </button>
              <a href="/menu" className="btn btn-secondary">
                View Menu
              </a>
              <a href="/deals" className="btn btn-highlight">
                Great Deals
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <motion.img
          src={aboutImage}
          alt="Kin's Fresh Chicken"
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Story</h2>
          <p>
            Kin’s Fresh Chicken delivers farm-fresh, hand-cut chicken directly
            from trusted farms to your plate. Hygiene, quality, and speed are
            our promises.
          </p>
          <div className="about-values">
            <div className="value-card">🍗 Hygiene</div>
            <div className="value-card">⚡ Fast Delivery</div>
            <div className="value-card">🥚 Fresh Quality</div>
            <div className="value-card">🌱 Local Sourcing</div>
          </div>
        </motion.div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview">
        <h2>Top Dishes</h2>
        <div className="menu-grid">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              className="menu-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={dish.img} alt={dish.name} />
              <div className="menu-info">
                <h3>{dish.name}</h3>
                <p>{dish.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleBuyNow(dish)}
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="menu-cta">
          <a href="/menu" className="btn btn-primary">
            View Full Menu
          </a>
          <a href="/deals" className="btn btn-highlight">
            Great Deals
          </a>
        </div>
      </section>

      {/* Why Choose Kin */}
      <section className="why-choose">
        <h2>Why Choose Kin?</h2>
        <div className="feature-grid">
          <div className="feature-card">🍗 Fresh Daily</div>
          <div className="feature-card">🧼 Hygienic Kitchens</div>
          <div className="feature-card">⚡ Fast Delivery</div>
          <div className="feature-card">⭐ 5-Star Reviews</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-map">
            <iframe
              title="Kin's Fresh Chicken Location"
              src="https://www.google.com/maps?q=No+45,+Shop+no.1+Paragathi+Layout,+Halehalli+Road,+TC+Palya+KR+Puram,+Bangalore+-+560036&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
