import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeHero.css";

const HomeHero = () => {
  return (
    <div 
      className="container hero-section py-5 position-relative"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: "url('/img/bg-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"
      }}
    >
      {/* Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Left Column - Text */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-white">
            <h1 className="display-4 fw-bold mb-4">Enjoy Our Delicious Meal</h1>
            <p className="lead mb-5">
              Tempor erat elit rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <Link 
              to="/book" 
              className="btn btn-primary btn-lg px-4 py-3 fw-bold text-uppercase custom-btn"
            >
              Book A Table
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 hero-header">
            <img 
              src="/img/10001.png"
              alt="Delicious meal presentation"
              className="img-fluid rounded shadow animated-image"
              style={{ 
                maxHeight: "650px", 
                width: "90%", 
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;