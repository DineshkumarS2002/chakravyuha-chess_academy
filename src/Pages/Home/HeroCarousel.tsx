import React, { useEffect, useState, useRef } from "react";
import image1 from "../../assets/Carousel 1.jpeg";
import image2 from "../../assets/Carousel2.jpeg";
import image3 from "../../assets/Carousel 3.jpeg";
import "../../Style/HeroCarousel.css";
import Navbar from "../../Components/Navbar";
import ChessFeatures from "./Features";

const HeroCarousel: React.FC = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Carousel cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Mark carousel as inactive after one full loop
    const totalTime = images.length * 5000;
    const timer = setTimeout(() => {
      setIsCarouselActive(false);
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [images.length]);

  // Auto-hide navbar on small devices
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; // Skip for larger screens

      const currentScrollY = window.scrollY;

      // Don't hide navbar if mobile menu is open
      if (isMobileMenuOpen) {
        setShowNavbar(true);
        return;
      }

      if (!isCarouselActive) {
        if (currentScrollY > lastScrollY.current) {
          setShowNavbar(false); // Scrolling down
        } else {
          setShowNavbar(true); // Scrolling up
        }
      }
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      // Always show navbar on larger screens
      if (window.innerWidth > 768) {
        setShowNavbar(true);
      } else {
        // Reset navbar state on resize to small screens
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isCarouselActive, isMobileMenuOpen]);

  // Fix for background image separation
  useEffect(() => {
    const updateCarouselHeight = () => {
      if (carouselRef.current) {
        const vh = window.innerHeight * 0.01;
        carouselRef.current.style.setProperty("--vh", `${vh}px`);
      }
    };

    updateCarouselHeight();
    window.addEventListener("resize", updateCarouselHeight);

    return () => {
      window.removeEventListener("resize", updateCarouselHeight);
    };
  }, []);

  return (
    <>
      <div className="hero-carousel" ref={carouselRef}>
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

            <div className="container position-relative z-3">
              {/* Navbar */}
              <div
                className={`row navbar-wrapper ${showNavbar ? "show" : "hide"}`}
              >
                <div className="col py-3 px-2 px-lg-5">
                  <Navbar onMobileMenuToggle={setIsMobileMenuOpen} />
                </div>
              </div>

              {/* Hero Content */}
              <div className="row">
                <div className="col py-4">
                  <div className="hero-content text-white">
                    <h4 className="mb-2">
                      Welcome to Chakravyuha Chess Academy
                    </h4>

                    <h1 className="fw-bold mb-3" style={{ lineHeight: 1.2 }}>
                      Think Like{" "}
                      <span className="text-warning">Grandmaster</span>
                    </h1>

                    <p
                      className="mb-4 mx-auto"
                      style={{ maxWidth: "800px", lineHeight: 1.6 }}
                    >
                      Do you want to learn chess? Chakravyuha Chess Academy
                      offers customized chess training for Basic, Intermediate,
                      and Advanced level students.
                    </p>
                    <button
                      className="hero-btn fw-bold mb-3"
                      style={{ padding: "0.5rem 1.25rem" }}
                    >
                      <a
                        href="#courses"
                        className="text-black text-decoration-none"
                      >
                        Join Now
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Features Below Carousel */}
      <div className="hero-carousel-features">
        <ChessFeatures />
      </div>
    </>
  );
};

export default HeroCarousel;
