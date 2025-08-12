import "../Style/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-4 ">
      <Container>
        {/* Main Content Row */}
        <Row className="mb-4 gap-4">
          {/* Academy Info Section */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h3 ">Chakravyuha Chess Academy</h3>
            <p className="mb-3" style={{ color: "#BDBDBD" }}>
              Offer online chess lessons and classes for kids, beginners, and
              intermediate players.
            </p>
            <ul className="list-unstyled" style={{ color: "#BDBDBD" }}>
              <li className="mb-2 d-flex align-items-center gap-2">
                <a href="tel:+918870221915">
                  {" "}
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "#CEA82A" }}
                  ></i>
                </a>
                <a
                  href="tel:+918870221915"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#BDBDBD" }}
                >
                  +91 88702 21915
                </a>
              </li>

              <li className="mb-2 d-flex align-items-center gap-2">
                <a href="mailto:chakravyuhachessacademy@gmail.com">
                  {" "}
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#CEA82A" }}
                  ></i>
                </a>
                <a
                  href="mailto:chakravyuhachessacademy@gmail.com"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#BDBDBD" }}
                >
                  chakravyuhachessacademy@gmail.com
                </a>
              </li>

              <li className="d-flex align-items-center gap-2">
                <a href="https://www.google.com/maps?q=Coimbatore,+Tamil+Nadu">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#CEA82A" }}
                  ></i>
                </a>
                <a
                  href="https://www.google.com/maps?q=Coimbatore,+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fw-semibold text-decoration-none"
                  style={{ color: "#BDBDBD" }}
                >
                  Coimbatore, Tamil Nadu
                </a>
              </li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col lg={2} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-3">Quick Links</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#courses" className="text-decoration-none">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Course Section */}
          <Col lg={2}>
            <h4 className="h3">Chess Courses</h4>
            <ul className=" bg-transparent list-unstyled">
              <li>
                <Link
                  className="mt-2"
                  to="/courses/beginner"
                  style={{ color: "#BDBDBD" }}
                >
                  Beginner Chess Course
                </Link>
              </li>
              <li>
                <Link to="/courses/intermediate" style={{ color: "#BDBDBD" }}>
                  Intermediate Chess Course
                </Link>
              </li>
              <li>
                <Link to="/courses/advanced" style={{ color: "#BDBDBD" }}>
                  Advanced Chess Course
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col lg={3}>
            <h4 className="h3 mb-3">Our Social Media</h4>
            <div className="d-flex">
              <a href="#" className="icon social-facebook me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="icon social-x me-3 box-shadow"
                aria-label="X (Twitter)"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>

              <a href="#" className="icon social-instagram me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="icon social-youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row>
          <Col>
            <hr className="my-3" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
              <p className="mb-2 mb-md-0" style={{ color: "#333333" }}>
                Chakravyuha Chess Academy, Coimbatore, Tamil Nadu
              </p>
              <p className="mb-0" style={{ color: "#333333" }}>
                Copyright © 2025 All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
