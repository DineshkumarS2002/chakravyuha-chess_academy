import React, { useEffect, useState } from "react";
import "../Style/Navbar.css";
import companylogo from "../assets/companylogo.jpg";
import arrow_icon from "../assets/arrow-icon.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCourses = () => setIsCoursesOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const menuItems = (
    <>
      <li className="nav-item">
        <a className="nav-link nav-hover active" href="#hero">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-hover" href="#about">
          About Us
        </a>
      </li>
      <li className="nav-item position-relative">
        <div
          className="nav-link nav-hover d-flex align-items-center gap-1"
          role="button"
          onClick={toggleCourses}
        >
          <span>Courses</span>
          <img
            src={arrow_icon}
            alt="Arrow"
            className={`arrow-icon transition ${isCoursesOpen ? "rotate" : ""}`}
            width={14}
            height={14}
          />
        </div>
        {isCoursesOpen && (
          <ul className="custom-dropdown bg-dark p-2 rounded mt-2 position-absolute z-5">
            <li>
              <a className="dropdown-item custom-dropdown-item" href="#courses">
                Beginner Chess Course
              </a>
            </li>
            <li>
              <a className="dropdown-item custom-dropdown-item" href="#courses">
                Intermediate Chess Course
              </a>
            </li>
            <li>
              <a className="dropdown-item custom-dropdown-item" href="#courses">
                Advanced Chess Course
              </a>
            </li>
          </ul>
        )}
      </li>
      <li className="nav-item">
        <a className="nav-link nav-hover" href="#blog">
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-hover" href="#contact">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className="px-0">
        <nav className="navbar navbar-expand-lg glass-navbar px-3 py-4">
          <div className="">
            <a
              className="navbar-brand  d-flex align-items-center text-white fw-bold lh-sm"
              href="#Home"
            >
              <img src={companylogo} alt="" className="company-logo" />
            </a>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4">{menuItems}</ul>
          </div>

          <div className="d-none d-lg-block">
            <a href="#contact" className="hero-btn px-4 py-3">
              Get Started
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center px-3 pt-3">
          <span className="text-white fw-bold">
            Chakravyuha <br /> Chess Academy
          </span>
          <button
            className="btn text-white fs-6"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            &times;
          </button>
        </div>

        <ul className="nav flex-column mt-4 px-3">{menuItems}</ul>
      </div>
    </>
  );
};

export default Navbar;
