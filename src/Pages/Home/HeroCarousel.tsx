import React, { useEffect, useState } from "react";
import image1 from "../../assets/Carousel 1.jpeg";
import image2 from "../../assets/Carousel 2.jpeg";
import image3 from "../../assets/Carousel 3.jpeg";
import "../../Style/HeroCarousel.css";
import Navbar from "../../Components/Navbar";

const HeroCarousel: React.FC = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
        >
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>

          <div className="hero-overlay elementor-background-overlay" />
          <div className="container">
            {/* Navbar */}
            <div className="row">
              <div className="col py-3 px-5 z-3">
                <Navbar />
              </div>
            </div>

            {/* Content */}
            <div className="row ">
              <div className="col  py-4">
                <div className="hero-content">
                  <button
                    className="hero-btn fw-bold mb-3"
                    style={{
                      fontSize: "clamp(14px, 2.5vw, 18px)",
                      padding: "0.5rem 1.25rem",
                    }}
                  >
                    Join Now
                  </button>

                  <h4
                    className="mb-2"
                    style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
                  >
                    Welcome to Chakravyuha Chess Academy
                  </h4>

                  <h1
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "clamp(28px, 6vw, 60px)",
                      lineHeight: 1.2,
                    }}
                  >
                    Think Like <span className="text-warning">Grandmaster</span>
                  </h1>

                  <p
                    className="mb-4 mx-auto"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      maxWidth: "800px",
                      lineHeight: 1.6,
                    }}
                  >
                    Do you want to learn chess? Chakravyuha Chess Academy offers
                    customized chess training for Basic, Intermediate, and
                    Advanced level students.
                  </p>

                  <a
                    href="#"
                    className="hero-link text-decoration-none"
                    style={{
                      fontSize: "clamp(14px, 2vw, 16px)",
                      fontWeight: "500",
                      color: "#fff",
                    }}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
