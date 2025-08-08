import "../Style/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className=" text-white py-4 ">
      <Container>
        {/* Main Content Row */}
        <Row className="mb-4 gap-4">
          {/* Academy Info Section */}
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h3">Chakravyuha Chess Academy</h3>
            <p className="mb-3" style={{ color: "#BDBDBD" }}>
              Offer online chess lessons and classes for kids, beginners, and
              intermediate players.
            </p>
            <ul className="list-unstyled" style={{ color: "#BDBDBD" }}>
              <li className="mb-2">+91 88702 21915</li>
              <li className="mb-2">chakravyuhachessacademy@gmail.com</li>
              <li>Coimbatore,Tamil Nadu</li>
            </ul>
          </Col>

          {/* Quick Links Section */}
          <Col lg={2} className="mb-4 mb-lg-0">
            <h2 className="h3 mb-3">Quick Links</h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className=" text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className=" text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Course Section */}
          <Col lg={2} className="mb-4 mb-lg-0">
            <h4 className="h3 mb-3">Chess Courses</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className=" text-decoration-none">
                  Beginner Course
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" text-decoration-none">
                  Intermediate Course
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Advanced Course
                </a>
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
              <a href="#" className="icon social-twitter me-3">
                <i className="fab fa-twitter"></i>
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
            <hr className=" my-3" />
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
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
