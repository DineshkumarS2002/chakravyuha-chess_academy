import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../../Style/BeginnerCourse.css";
import courseImg from "../../assets/Beginnerimg.jpg";
import bgImage from "../../assets/Carousel2.jpeg";
import { Link } from "react-router-dom";
const BeginnerCourse = () => {
  return (
    <section className="course-section ">
      {/* hero */}
      <div
        className="hero-section d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="fw-bold hero-title mt-4 text-center">
          Beginner Chess Course
        </h1>

        <nav className="breadcrumb mt-3 text-center">
          <span className="breadcrumb-item fs-5">
            <Link to="/">Home</Link>
          </span>
          <span className="breadcrumb-item fs-5">
            <Link to="/">Courses</Link>
          </span>
          <span className="breadcrumb-item fs-5 ">Beginner Course Detail</span>
        </nav>
      </div>

      <Container>
        <Row>
          {/* Left Column */}
          <Col lg={8} md={12}>
            <h2 className="course-title mt-5">Course Details</h2>
            <p className="course-subtitle">
              This course is designed to help an absolute beginner learn the
              game in a structured manner.
            </p>
            <p>
              You can learn chess at any age – it's the world's most popular
              game! Beginners of all ages are welcome to enroll in this course
              to learn & master the fundamentals of the game of chess.
            </p>

            <div className="my-4">
              <img
                src={courseImg}
                alt="Chess Course"
                className="img-fluid rounded shadow"
              />
            </div>

            <h4 className="mt-4">Complete Chess Course for Beginners</h4>
            <p>
              Chess is a very intense and intellectual game. It’s played by two
              people on a board with 64 squares, and it takes an hour or more to
              finish a game. At the top level, chess masters consider chess to
              be more than just a mere board game: chess players call it “the
              sport of kings.”
            </p>
            <p>
              In beginners course, we will give you the best tips and tricks to
              help you improve your chess strategy. See all the details about
              the beginner chess course that can assist you in getting started.
            </p>
            <p>
              Looking for a chess course that is flexible enough to fit around
              your schedule? Join the VBS Chess Academy online chess course
              today and get lessons from our famous chess coaches & mentors from
              the comfort of your own home.
            </p>
            {/* What You'll Learn */}
            <h4 className="mt-5">What You'll Learn</h4>
            <Row className="learn-list">
              <p>
                Our chess course is designed to take you from the very basics
                all the way to mastering the game. Get ready to learn and play
                like a pro!
              </p>
              <Col sm={6}>
                <ul>
                  <li>Rules of the game</li>
                  <li>Getting a basic checkmate</li>
                  <li>How to make a stalemate</li>
                  <li>Opening patterns</li>
                </ul>
              </Col>
              <Col sm={6}>
                <ul>
                  <li>What the pieces are and how they move</li>
                  <li>How to use your minor pieces</li>
                  <li>Position and structure your pawns</li>
                  <li>Middlegame techniques</li>
                </ul>
              </Col>
            </Row>

            {/* Requirements */}
            <h4 className="mt-5">Requirements</h4>
            <ul>
              <li>No prior knowledge required</li>
              <li>Interest in learning</li>
              <li>Desire to become a grandmaster</li>
              <li>Chess board or app for practice</li>
            </ul>

            {/* Course Description */}
            <h4 className="mt-5">Course Description</h4>
            <Row>
              <p>THE RULE OF THE GAME AND A FEW BASICS</p>
              <Col md={6}>
                <ul>
                  <li>Introduction</li>
                  <li>The Board</li>
                  <li>Purpose of Game: Checkmate</li>
                  <li>The Pieces</li>
                  <li>Value of the Pieces</li>
                  <li>Attacking & Capturing</li>
                  <li>Moved Generally</li>
                  <li>Special Moves </li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
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
            {/*  */}
            <Row>
              <p>BASIC STRATEGY</p>
              <Col md={6}>
                <ul>
                  <li>6 The Opening</li>
                  <li>The Middle Game</li>
                  <li>The Profitable Exchange</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>Counting Attackers and Defenders</li>
                  <li>Trades</li>
                  <li>Other Middle Game Basics</li>
                </ul>
              </Col>
            </Row>
            {/*  */}
            <Row>
              <p>BASIC TACTICS</p>
              <Col md={6}>
                <ul>
                  <li>11 Forks</li>
                  <li>Pins</li>
                  <li>Skewers</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>Discovery</li>
                  <li>Overload</li>
                  <li>Mixed Tactics</li>
                </ul>
              </Col>
            </Row>
            {/*  */}
            <Row>
              <p>THE ENDGAME</p>
              <Col md={6}>
                <ul>
                  <li>22 Overview</li>
                  <li>More Checkmates</li>
                  <li>Endgame Concepts</li>
                  <li>Checkmate</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>Opposition</li>
                  <li>Pwan Promotion</li>
                  <li>The Square of the Pawn</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>Who this course is for:</p>
                <ul>
                  <li>Those who wish to learn how to play chess</li>
                  <li>Anyone who wants to improve their game</li>
                  <li>Players at the beginner and intermediate level</li>
                  <li>Those who just love this game!</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col lg={4} md={12}>
            {/* Pricing Card */}
            <Card className="pricing-card shadow-sm mb-4">
              <Card.Body>
                <p className="sessions"> 8 Sessions</p>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Mentor: FIDE Rated Chess Coach</li>
                  <li>Duration: 1 Hour | 2 Classes / Week</li>
                  <li>Level: Beginner</li>
                  <li>Award: Certification</li>
                  <li>Format: Offline / Online</li>
                </ul>
                <Button variant="warning" className="w-100 mb-2">
                  Join Now
                </Button>
                <Button
                  variant="success"
                  className="w-100"
                  style={{ backgroundColor: "#25D366" }}
                >
                  WhatsApp Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BeginnerCourse;
