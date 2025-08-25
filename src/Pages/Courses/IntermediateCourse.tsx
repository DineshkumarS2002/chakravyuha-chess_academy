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
    <section className="course-section  ">
      {/* hero */}
      <div
        className="hero-section d-flex flex-column align-items-center justify-content-center px-3"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="fw-bold hero-title mt-4 text-center">
          Intermediate Chess Course
        </h1>

        <nav className=" mt-3 text-center">
          <span className="breadcrumb-item fs-5 ">
            <Link to="/">Home </Link>
          </span>
          <span className=" fs-5 mx-2">
            {" "}
            <i
              className="fa-solid fa-angle-right fs-6"
              style={{ color: "#CEA82A" }}
            ></i>{" "}
            Intermediate Course Detail
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
                Intermediate chess course is ideal for those who want to improve
                their strategic and tactical chess skills.
              </p>
              <p className="text-muted" style={{ fontSize: "18px" }}>
                Designed for late-beginners to intermediate chess players, this
                chess course teaches the fundamentals of chess. In this course,
                you will learn the fundamentals of chess strategy.
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
              In this course, students who are already familiar with the pieces
              and how to use them will learn how to use force to win material
              and checkmate their opponent. The first segment takes you through
              the tactical devices and the attacking themes that every good
              player should know, while the second segment takes you through the
              factors that make up a position so the student has an
              understanding of which factors to aim for and which to avoid.
            </p>
            <p className="text-muted" style={{ fontSize: "18px" }}>
              As part of this course, students develop concentration, logic,
              decision-making, planning, and self-discipline, which is designed
              for those who already understand chess rules and some tactical and
              strategic concepts.
            </p>

            {/* What You'll Learn */}
            <h4 className="mt-5 fs-1 fw-semibold ">What You'll Learn</h4>
            <Row className="learn-list border-bottom">
              <Col sm={6}>
                <ul style={{ fontSize: "18px" }}>
                  <li>Understand the Chess game rules</li>
                  <li>
                    Play chess with ease against beginner and intermediate
                    players (1000-1400 ELO)
                  </li>
                  <li>
                    Understand Chess Game Phases (Opening, Middlegame, Endgame)
                  </li>
                  <li>
                    Learn Chess Strategy concepts and Chess tactics motifs
                  </li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul style={{ fontSize: "18px" }}>
                  <li>Learn Basic Chess Endgames</li>
                  <li>
                    Learn some main chess opening lines and how to build your
                    opening repertoire
                  </li>
                  <li>
                    Have the fundamentals, tips and tools to continue the chess
                    development in the future
                  </li>
                </ul>
              </Col>
            </Row>

            {/* Requirements */}
            <div>
              <div className="border-bottom">
                <h4 className="mt-5 fs-3 fw-semibold ">Requirements</h4>
                <ul className="ms-4 text-muted" style={{ fontSize: "18px" }}>
                  <li>Anyone interested in learning chess, step-by-step</li>
                  <li>
                    Those who wish to advance from Novice to Beginner to
                    Intermediate Chess
                  </li>
                  <li>Parents who wish to help their children learn chess</li>
                  <li>
                    Learn the tools and methodology to improve your Chess skills
                  </li>
                </ul>
              </div>
              {/* Course Description */}
              <div className="border-bottom">
                <h4 className="mt-5 fs-3 fw-semibold">Course Description</h4>

                {/* RULES */}
                <Row className="gy-3">
                  <Col xs={12}>
                    <p className="fw-semibold text-muted">
                      THE RULE OF THE GAME AND A FEW BASICS
                    </p>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>Introduction</li>
                      <li>The Board</li>
                      <li>Purpose of Game: Checkmate</li>
                      <li>The Pieces</li>
                      <li>Value of the Pieces</li>
                      <li>Attacking & Capturing</li>
                      <li>Moved Generally</li>
                      <li>Special Moves</li>
                    </ul>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>Defending an Attacked Piece</li>
                      <li>Check</li>
                      <li>Checkmate</li>
                      <li>Stalemate</li>
                      <li>Other Draws in addition to Stalemate</li>
                      <li>Another Special Move: en passant</li>
                      <li>Etiquette</li>
                      <li>Touch move</li>
                    </ul>
                  </Col>
                </Row>

                {/* BASIC STRATEGY */}
                <Row className="gy-3 mt-3">
                  <Col xs={12}>
                    <p className="fs-5 fw-semibold">BASIC STRATEGY</p>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>6 The Opening</li>
                      <li>The Middle Game</li>
                      <li>The Profitable Exchange</li>
                    </ul>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>Counting Attackers and Defenders</li>
                      <li>Trades</li>
                      <li>Other Middle Game Basics</li>
                    </ul>
                  </Col>
                </Row>

                {/* BASIC TACTICS */}
                <Row className="gy-3 mt-3">
                  <Col xs={12}>
                    <p className="fs-5 fw-semibold">BASIC TACTICS</p>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>11 Forks</li>
                      <li>Pins</li>
                      <li>Skewers</li>
                    </ul>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>Discovery</li>
                      <li>Overload</li>
                      <li>Mixed Tactics</li>
                    </ul>
                  </Col>
                </Row>

                {/* ENDGAME */}
                <Row className="gy-3 mt-3">
                  <Col xs={12}>
                    <p className="fs-5 fw-semibold">THE ENDGAME</p>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>22 Overview</li>
                      <li>More Checkmates</li>
                      <li>Endgame Concepts</li>
                      <li>Checkmate</li>
                    </ul>
                  </Col>
                  <Col xs={12} md={6}>
                    <ul
                      className="ms-4 ps-3 text-muted"
                      style={{ fontSize: "18px" }}
                    >
                      <li>Opposition</li>
                      <li>Pawn Promotion</li>
                      <li>The Square of the Pawn</li>
                    </ul>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col className="mt-4">
                  <p className="fs-5 fw-semibold">Who this course is for:</p>
                  <ul className="text-muted ms-4" style={{ fontSize: "18px" }}>
                    <li>Those who wish to learn how to play chess</li>
                    <li>Anyone who wants to improve their game</li>
                    <li>Players at the beginner and intermediate level</li>
                    <li>Those who just love this game!</li>
                  </ul>
                </Col>
              </Row>
            </div>
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
                      Level: Intermediate
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
                      href="https://wa.me/918870221915?text=Hello%21%20I%20am%20interested%20in%20your%20chess%20academy.%20Please%20share%20more%20details."
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
