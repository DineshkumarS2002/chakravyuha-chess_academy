import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../../Style/BeginnerCourse.css";
import courseImg from "../../assets/Beginnerimg.jpg";
import bgImage from "../../assets/courseimg.jpg";
import { Link, useNavigate } from "react-router-dom";
import chess from "../../assets/chess-side.png";
const BeginnerCourse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact", { state: { scrollTo: "contact" } });
  };
  return (
    <section className="course-section ">
      {/* hero */}
      <div
        className="hero-section d-flex flex-column align-items-center justify-content-center px-3"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="fw-bold hero-title mt-4 text-center">
          Advanced Chess Course
        </h1>

        <nav className="breadcrumb mt-3 text-center">
          <span className="breadcrumb-item fs-5">
            <Link to="/">Home </Link>
          </span>
          <span className=" fs-5 mx-2">
            {" "}
            <i
              className="fa-solid fa-angle-right fs-6"
              style={{ color: "#CEA82A" }}
            ></i>{" "}
            Advanced Course Detail
          </span>
        </nav>
      </div>

      <Container className="py-5 px-3">
        <Row className="gap-5">
          {/* Left Column */}
          <Col lg={8} md={12}>
            <div className="text-center text-lg-start px-2 px-lg-0">
              <h2 className=" mt-5 display-5 fw-medium ">Course Details</h2>
              <p className="fw-semibold fs-5">
                This course is designed for those students who have already
                learned tactics and attacking ideas, this course offers an
                all-round approach to chess.
              </p>
              <p className="text-muted" style={{ fontSize: "18px" }}>
                The purpose of this course is to improve players' opening play
                in a way that is seldom presented in books. The course develops
                an understanding of typical Colle positions by going through
                positions that showcase typical ideas.
              </p>
            </div>
            <div className="my-4">
              <img
                src={courseImg}
                alt="Chess Course"
                className="img-fluid rounded shadow responsive-box"
              />
            </div>

            <h4 className="mt-4 fs-2 fw-semibold">
              Complete Chess Course for Intermediate Players
            </h4>
            <p className="text-muted" style={{ fontSize: "18px" }}>
              Players who plan to participate in state or national level FIDE
              Rated chess tournaments across India should take this chess
              course. It emphasizes Grandmaster (GM) techniques and advanced
              tactics spotting methods. FIDE Rated Chess Coaches carefully
              design the lessons to deliver the right kind of chess material.
              Students who are serious about chess should play tournaments
              competitively and strive for higher ratings. At this stage,
              patience and concentration will be the biggest differences.
            </p>
            <p className="text-muted" style={{ fontSize: "18px" }}>
              Our course is specifically designed for you if you have already
              been playing scholastic chess and are ready to move up into
              high-level tournament chess and succeed! Advanced Chess teaches
              you how to play any position on the chess board, including the
              essence of each major opening and its typical middle games.
            </p>

            {/* What You'll Learn */}
            <h4 className="mt-5 fs-1 fw-semibold ">What You'll Learn</h4>
            <Row className="learn-list border-bottom">
              <Col sm={6}>
                <ul style={{ fontSize: "18px" }}>
                  <li>Advanced chess strategies, openings, and endgames</li>
                  <li>Playing positions and strategizing in the middlegame</li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul style={{ fontSize: "18px" }}>
                  <li>Analysis of games through online practice sessions</li>
                  <li>
                    Achieving excellence in all areas of the game and raising
                    the level of chess
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col lg={3} md={12}>
            {/* Pricing Card */}
            <Row>
              <Card className="pricing-card shadow-sm mb-4">
                <Card.Body>
                  <ul className="list-unstyled text-secondary  mt-3 mb-4">
                    <li className="mt-2">
                      <i
                        className="fa-solid fa-user "
                        style={{ color: "#CEA82A" }}
                      ></i>{" "}
                      Mentor: FIDE Rated Chess Coach
                    </li>
                    <li className="mt-3">
                      <i
                        className="fa-solid fa-clock "
                        style={{ color: "#CEA82A" }}
                      ></i>{" "}
                      Duration: 1 Hour
                    </li>
                    <li className="mt-3">
                      <i
                        className="fa-solid fa-arrow-up-short-wide"
                        style={{ color: "#CEA82A" }}
                      ></i>
                      Level: Advanced
                    </li>
                    <li className="mt-3">
                      <i
                        className="fa-solid fa-award "
                        style={{ color: "#CEA82A" }}
                      ></i>{" "}
                      Award: Certification
                    </li>
                    <li className="mt-3">
                      <i
                        className="fa-solid fa-eye "
                        style={{ color: "#CEA82A" }}
                      ></i>{" "}
                      Format: Offline / Online
                    </li>
                  </ul>
                  <div className="d-flex flex-column align-items-center">
                    <Button
                      style={{ backgroundColor: "#CEA82A" }}
                      className="w-100 mb-2 p-3 fs-5 fw-bold text-black"
                      onClick={handleClick}
                    >
                      Join Now
                    </Button>

                    <Button
                      className="w-100 fs-5 p-3 fw-bold mt-3"
                      style={{ backgroundColor: "#25D366", color: "white" }}
                      href="https://wa.me/916381830479?text=Hello%21%20I%20am%20interested%20in%20your%20chess%20academy.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Now{" "}
                      <i className="fa-brands fa-whatsapp ms-2"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Row>
            <Row>
              <Col md={12}>
                <h1 className="text-center text-lg-start px-2 px-lg-0">
                  Join Our Online Class{" "}
                  <span style={{ color: "#CEA82A" }}> Today!</span>
                </h1>
                <img src={chess} alt=" " className="w-100" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BeginnerCourse;
