import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "../../Style/IntermediateCourse.css";

const IntermediateCourse = () => {
  return (
    <div className="course-detail-wrapper">
      <Container className="mt-5">
        <Row>
          {/* LEFT CONTENT */}
          <Col lg={8} md={12}>
            <section className="course-info mb-4">
              <h3 className="section-heading">Course Details</h3>
              <div className="course-level d-flex align-items-center mb-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Level"
                  className="rounded-circle me-3"
                />
                <div>
                  <p className="mb-1 fw-bold">Chess Level: Intermediate</p>
                  <span className="rating">4.9 ★★★★★</span>
                </div>
              </div>
              <p>
                Intermediate chess course is ideal for those who want to improve
                their strategic and tactical chess skills. Designed for
                late-beginners to intermediate chess players, this course
                teaches the fundamentals of chess strategy.
              </p>
              <img
                src="https://via.placeholder.com/700x400"
                alt="Chess"
                className="img-fluid rounded my-4"
              />
            </section>

            <section className="course-description mb-5">
              <h4 className="section-heading">
                Complete Chess Course for Intermediate Players
              </h4>
              <p>
                In this course, students who are already familiar with the
                pieces and how to use them will learn how to use force to win
                material and checkmate their opponent...
              </p>
            </section>

            <section className="what-you-learn mb-5">
              <h4 className="section-heading">What You'll Learn</h4>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li>
                      <FaCheck className="check-icon" /> Understand the Chess
                      game rules
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Play with ease against
                      beginner/intermediate players
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Understand Chess Game
                      Phases
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Learn Chess Strategy &
                      Tactics
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li>
                      <FaCheck className="check-icon" /> Learn Basic Chess
                      Endgames
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Learn openings & build
                      repertoire
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Have tools to continue
                      improvement
                    </li>
                  </ul>
                </Col>
              </Row>
            </section>

            <section className="requirements mb-5">
              <h4 className="section-heading">Requirements</h4>
              <ul>
                <li>Anyone interested in learning chess step-by-step</li>
                <li>Those who wish to advance from Novice to Intermediate</li>
                <li>Parents who wish to help their children learn chess</li>
              </ul>
            </section>

            <section className="course-outline">
              <h4 className="section-heading">Course Description</h4>
              <p>
                [Here goes the detailed course description list like in
                screenshot]
              </p>
            </section>
          </Col>

          {/* SIDEBAR */}
          <Col lg={4} md={12}>
            <div className="sidebar-card shadow p-4 mb-4">
              <h3 className="price">
                ₹7000 <span>/ 8 Sessions</span>
              </h3>
              <ul className="sidebar-list">
                <li>Mentor: FIDE Rated Chess Coach</li>
                <li>Duration: 45 min | 2 Classes/week</li>
                <li>Level: Intermediate</li>
                <li>Award: Certification</li>
                <li>Format: Online / Offline</li>
              </ul>
              <Button variant="warning" className="w-100 mb-2">
                Join Now
              </Button>
              <Button variant="success" className="w-100">
                WhatsApp Now
              </Button>
            </div>

            <div className="sidebar-card shadow p-4">
              <h5>View More Courses</h5>
              <p>Students of all levels are welcome...</p>
              <Button variant="dark">View More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntermediateCourse;
