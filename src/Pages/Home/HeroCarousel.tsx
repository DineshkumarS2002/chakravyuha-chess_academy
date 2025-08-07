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
            <div className="row">
              <div className="col py-4 px-5 navhover">
                <Navbar />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="hero-content">
                  <button className="hero-btn">Join Now</button>
                  <h4>Welcome to Chakravyuha Chess Academy</h4>
                  <h1>
                    Think Like <span>Grandmaster</span>
                  </h1>
                  <p>
                    Do you want to learn chess? Chakravyuha Chess Academy offers
                    customized chess training for Basic, Intermediate and
                    Advanced level students.
                  </p>
                  <a href="#" className="hero-link ">
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
