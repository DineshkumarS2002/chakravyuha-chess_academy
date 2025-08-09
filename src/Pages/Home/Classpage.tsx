import { Container, Button } from "react-bootstrap";
import "../../Style/Classpage.css";

const Classpage = () => {
  return (
    <section className="classpage-hero d-flex align-items-center">
      <Container className="text-white classpage-content">
        <h1 className="classpage-title mb-3">
          Join Our Online & Offline Class <br />
          <span className="classpage-highlight fw-bold">Today!</span>
        </h1>
        <p className="classpage-subtitle mb-4">
          Become a better chess player with online & offline chess lessons from
          top coaches and masters. Get online Chess Coaching for kids &
          scholastic students of beginner, intermediate and advanced levels.
        </p>
        <Button className="classpage-button">
          <a href="#contact" className="text-black text-decoration-none">
            Join Now
          </a>
        </Button>
      </Container>
    </section>
  );
};

export default Classpage;
