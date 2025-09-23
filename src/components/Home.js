import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source src="/chicken1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
