import React from "react";
import "./Home.css";
import chickenDesktop from "../assets/chicken1.jpg";
import chickenMobile from "../assets/chicken.jpg";

function Home() {
  return (
    <div className="home">
      <div className="image-container">
        {/* Desktop image */}
        <img src={chickenDesktop} alt="Chicken Desktop" className="home-image desktop-image" />
        {/* Mobile image */}
        <img src={chickenMobile} alt="Chicken Mobile" className="home-image mobile-image" />
      </div>
    </div>
  );
}

export default Home;
