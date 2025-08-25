import React, { useEffect, useState, useCallback, useMemo } from "react";
import "../Style/Navbar.css";
import companylogo from "../assets/companylogo.jpg";
import arrow_icon from "../assets/arrow-icon.png";
import { Link } from "react-router-dom";

type NavbarProps = {
  onMobileMenuToggle?: (isOpen: boolean) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMobileMenuToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const toggleCourses = useCallback(
    () => setIsCoursesOpen((prev) => !prev),
    []
  );

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesOpen(false);
    if (onMobileMenuToggle) onMobileMenuToggle(false);
  }, [onMobileMenuToggle]);

  const toggleMobileMenu = useCallback(() => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    if (onMobileMenuToggle) onMobileMenuToggle(newState);
  }, [isMobileMenuOpen, onMobileMenuToggle]);

  // Handle body overflow and reset on unmount
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = originalStyle;
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  // Memoized menu items to prevent unnecessary re-renders
  const menuItems = useMemo(
    () => (
      <>
        <li className="nav-item">
          <a
            className="nav-link nav-hover active"
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav-hover"
            href="#about"
            onClick={closeMobileMenu}
          >
            About Us
          </a>
        </li>
        <li className="nav-item position-relative">
          <div
            className="nav-link nav-hover d-flex align-items-center gap-1 p-0"
            role="button"
            onClick={toggleCourses}
          >
            <a href="#courses" className="nav-link nav-hover ">
              Courses
            </a>
            <img
              src={arrow_icon}
              alt="Arrow"
              className={`arrow-icon transition ${
                isCoursesOpen ? "rotate" : ""
              }`}
              width={14}
              height={14}
            />
          </div>

          {isCoursesOpen && (
            <ul className="custom-dropdown mt-2 p-3 position-absolute z-5">
              <li>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/courses/beginner"
                  onClick={closeMobileMenu}
                >
                  Beginner Chess Course
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/courses/intermediate"
                  onClick={closeMobileMenu}
                >
                  Intermediate Chess Course
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item custom-dropdown-item"
                  to="/courses/advanced"
                  onClick={closeMobileMenu}
                >
                  Advanced Chess Course
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav-hover"
            href="#blog"
            onClick={closeMobileMenu}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav-hover"
            href="#contact"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
        </li>
      </>
    ),
    [isCoursesOpen, toggleCourses, closeMobileMenu]
  );

  return (
    <>
      <div className="px-0">
        <nav className="navbar navbar-expand-lg  glass-navbar px-3 py-4">
          <div className="">
            <a
              className="navbar-brand  d-flex align-items-center text-white fw-bold "
              href="#Home"
              onClick={closeMobileMenu}
            >
              <img src={companylogo} alt="" className="company-logo" />
            </a>
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Open Menu"
            style={{ color: "#CEA82A" }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav gap-4">{menuItems}</ul>
          </div>

          <div className="d-none d-lg-block">
            <a
              href="#contact"
              className="hero-btn px-4 py-3"
              onClick={closeMobileMenu}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="d-flex justify-content-between align-items-center fs-4 px-3 pt-3">
          <span className="text-white fw-bold">
            Chakravyuha <br /> Chess Academy
          </span>
          <button
            className="btn fs-4 fw-bold"
            onClick={closeMobileMenu}
            aria-label="Close Menu"
            style={{ color: "#CEA82A" }}
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
