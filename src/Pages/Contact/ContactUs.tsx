import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../Style/Contactsection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    fetch(
      "https://script.google.com/macros/s/AKfycbxCTD6s5kaOCBLpuUT79743C8vNu-lKBEZ4F6tbRBM7cHSh5wiYuKiEKNsQxptOJE5C/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          message: "",
        });
        setSubmitted(true);
      })
      .catch((err) => alert("Error: " + err))
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="container px-3 px-lg-5 contact-section">
      <Container>
        <Row className="contact-wrapper">
          {/* Left Section */}
          <Col
            md={6}
            className="contact-left text-white d-flex flex-column justify-content-between p-4 p-lg-5"
          >
            <div>
              <h5 className="mb-2 fs-4 fs-lg-3" style={{ color: "#CEA82A" }}>
                Contact Us
              </h5>
              <h2 className="fw-bold mt-3 fs-3 fs-lg-1">Get in Touch</h2>
              <p className="mt-3 fs-6 fs-lg-5">
                Are you interested in enrolling your child at Chakravyuha Chess
                Academy? Fill the form and we'll get in touch.
              </p>

              <div className="contact-info mt-4">
                <p className="fs-6 fs-lg-5">
                  <FaPhone className="me-2" style={{ color: "#CEA82A" }} />
                  +91 88702 21915
                </p>
                <p className="fs-6 fs-lg-5">
                  <FaEnvelope className="me-2" style={{ color: "#CEA82A" }} />
                  chakravyuhachessacademy@gmail.com
                </p>
                <p className="fs-6 fs-lg-5">
                  <FaMapMarkerAlt
                    className="me-2"
                    style={{ color: "#CEA82A" }}
                  />
                  Main Branch: 36/C6, Rajaji Nagar, 2nd Cross, Hotel Laya Inn
                  Back Side, Ariyalur-621-713.
                </p>
              </div>
            </div>

            <div className="d-flex mt-4">
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

          {/* Right Section */}
          <Col md={6} className="contact-form p-4 p-lg-5 bg-white">
            <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-6 fs-lg-5 fw-semibold">
                  Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-6 fs-lg-5 fw-semibold">
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Phone */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-6 fs-lg-5 fw-semibold">
                  Phone Number <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="input"
                  type="tel"
                  name="phonenumber" // ✅ match Apps Script key
                  placeholder="Your Phone Number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Message */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-6 fs-lg-5 fw-semibold">
                  Comments / Questions <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  className="input"
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Messages or questions"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="text-black fw-semibold fs-5 shadow px-4 py-3 mt-2"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              {submitted && (
                <Alert variant="success" className="mt-3">
                  Thank you! Your message has been submitted.
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
