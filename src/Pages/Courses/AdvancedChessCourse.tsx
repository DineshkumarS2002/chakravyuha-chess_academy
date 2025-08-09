import { Container, Row, Col, Button, Card, Breadcrumb } from "react-bootstrap";
import "../../Style/AdvancedChessCourse.css";

export default function AdvancedChessCourse() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-light d-flex align-items-center">
        <Container>
          <h1 className="fw-bold hero-title">Advanced Chess Course</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Courses</Breadcrumb.Item>
            <Breadcrumb.Item active>Advanced Course Detail</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="my-5">
        <Row>
          {/* Left Column */}
          <Col lg={8}>
            <h2 className="section-title">Course Details</h2>
            <p className="lead">
              This course is designed for those students who have already
              learned tactics and attacking ideas, this course offers an
              all-round approach to chess.
            </p>
            <p>
              The purpose of this course is to improve players' opening play in
              a way that is seldom presented in books. The course develops an
              understanding of typical Colle positions by going through
              positions that showcase typical ideas.
            </p>

            <img
              src="/chess-action.jpg" // Replace with your image
              alt="Chess Action"
              className="img-fluid rounded shadow my-4"
            />

            <h3 className="section-title">Course Description</h3>
            <p>
              Players who plan to participate in state or national level FIDE
              Rated chess tournaments across India should take this chess
              course. It emphasizes Grandmaster (GM) techniques and advanced
              tactics spotting methods.
            </p>
            <p>
              Our course is specifically designed for you if you have already
              been playing scholastic chess and are ready to move up into
              high-level tournament chess and succeed.
            </p>

            <h4 className="section-title mt-4">What You'll Learn</h4>
            <ul className="custom-list">
              <li>Advanced chess strategies, openings, and endgames</li>
              <li>Playing positions and strategizing in the middlegame</li>
              <li>Analysis of games through online practice sessions</li>
              <li>Achieving excellence in all areas of the game</li>
            </ul>
          </Col>

          {/* Right Column */}
          <Col lg={4} className="mt-4 mt-lg-0">
            <Card className="p-3 shadow-sm price-card">
              <h3 className="price-text">₹8000 / 8 Sessions</h3>
              <ul className="list-unstyled mt-3">
                <li>Mentor: FIDE Rated Chess Coach</li>
                <li>Duration: 45 min | 2 Classes per Week</li>
                <li>Level: Advanced</li>
                <li>Award: Certification</li>
                <li>Format: Offline / Online</li>
              </ul>
              <Button className="w-100 mb-2 join-btn">Join Now</Button>
              <Button variant="success" className="w-100 fw-bold">
                WhatsApp Now
              </Button>
            </Card>

            <Card className="mt-4 p-3 text-center text-light more-courses-card">
              <h5>View More Courses</h5>
              <p className="small">
                Students of all levels of chess are welcome at VBS Chess
                Academy.
              </p>
              <Button className="view-more-btn">View More</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
