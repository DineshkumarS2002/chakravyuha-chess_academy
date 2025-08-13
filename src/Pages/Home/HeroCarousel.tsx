import React, { useEffect, useState, useRef } from "react";
import image1 from "../../assets/Carousel 1.jpeg";
import image2 from "../../assets/Carousel2.jpeg";
import image3 from "../../assets/Carousel 3.jpeg";
import "../../Style/HeroCarousel.css";
import Navbar from "../../Components/Navbar";
import ChessFeatures from "./Features";
import AOS from "aos";
import "aos/dist/aos.css";

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
      if (window.innerWidth > 768) return;

      const currentScrollY = window.scrollY;

      if (isMobileMenuOpen) {
        setShowNavbar(true);
        return;
      }

      if (!isCarouselActive) {
        if (currentScrollY > lastScrollY.current) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowNavbar(true);
      } else {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isCarouselActive, isMobileMenuOpen]);

  // Fix viewport height
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

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  // Refresh AOS when slide changes
  useEffect(() => {
    AOS.refresh();
  }, [currentIndex]);

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

            {/* Dark overlay */}
            <div className="hero-overlay elementor-background-overlay"></div>

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
                    <div
                      data-aos="fade-right"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine"
                    >
                      <h4 className="mb-2">
                        Welcome to Chakravyuha Chess Academy
                      </h4>

                      <h1 className="fw-bold mb-3" style={{ lineHeight: 1.2 }}>
                        Think Like{" "}
                        <span className="text-warning">Grandmaster</span>
                      </h1>

                      <p
                        className="mb-4 mx-auto text-secondary "
                        style={{ maxWidth: "800px", lineHeight: 1.6 }}
                      >
                        Do you want to learn chess? Chakravyuha Chess Academy
                        offers customized chess training for Basic,
                        Intermediate, and Advanced level students.
                      </p>
                    </div>

                    <div
                      data-aos="fade-left"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                    >
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
