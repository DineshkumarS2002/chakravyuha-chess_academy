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
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
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

  const navigate = useNavigate();
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
      "https://script.google.com/macros/s/AKfycbyeOPzbvhVvXlUqROhG-ObYH-Roa3nCV2GYKrxzP_qb3RYERJUdU0n6DB8j4W6010kCyQ/exec",
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

        // ✅ Redirect after showing success message for 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => alert("Error: " + err))
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="container px-3 px-lg-5 mt-lg-5 contact-section py-5">
      <Container>
        <Row className="contact-wrapper">
          {/* Left Section */}
          <Col
            md={6}
            className="contact-left text-white d-flex flex-column justify-content-between p-4 p-lg-5"
          >
            <div>
              <h5 className="mb-2 fw-bold contact-heading ">Contact Us</h5>
              <h2 className="fw-bold mt-3 contact-title">Get in Touch</h2>
              <p className="mt-3 contact-desc">
                Are you interested in enrolling your child at Chakravyuha Chess
                Academy? Fill the form and we'll get in touch.
              </p>

              <div className="contact-info mt-4">
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <a href="tel:+918870221915">
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "#CEA82A" }}
                      ></i>
                    </a>
                    <a
                      href="tel:+918870221915"
                      className="fw-semibold text-decoration-none"
                      style={{ color: "#fff" }}
                    >
                      +91 88702 21915
                    </a>
                  </li>

                  <li className="mb-2 d-flex align-items-center gap-2">
                    <a href="mailto:chakravyuhachessacademy@gmail.com">
                      <i
                        className="fa-solid fa-envelope"
                        style={{ color: "#CEA82A" }}
                      ></i>
                    </a>
                    <a
                      href="mailto: ccachakravyuhachessacademy@gmail.com"
                      className="fw-semibold text-decoration-none"
                      style={{ color: "#fff" }}
                    >
                      ccachakravyuhachessacademy@gmail.com
                    </a>
                  </li>

                  <li className="d-flex align-items-center gap-2">
                    <a>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#CEA82A" }}
                      ></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="fw-semibold text-decoration-none"
                      style={{ color: "#fff" }}
                    >
                      Coimbatore, Tamil Nadu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          {/* Right Section */}
          <Col md={6} className="contact-form p-4 p-lg-5 bg-white">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Name <span className="required">*</span>
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

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Email <span className="required">*</span>
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

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Phone Number <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  className="input"
                  type="tel"
                  name="phonenumber"
                  placeholder="Your Phone Number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Comments / Questions <span className="required">*</span>
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
                className="text-black fs-5 fw-bold shadow px-4 py-3 mt-2 w-100 w-md-auto"
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
