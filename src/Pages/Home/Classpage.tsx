import { Container, Button } from "react-bootstrap";
import "../../Style/Classpage.css";

const Classpage = () => {
  return (
    <div>
      <section className="classpage-hero d-flex align-items-center">
        <Container className="text-white classpage-content ms-5">
          <h1 className="classpage-title mb-3">
            Join Our Online & Offline Class <br />
            <span className="classpage-highlight display-3 fw-bold">
              Today!
            </span>
          </h1>
          <p className="classpage-subtitle mb-4 fs-5">
            Become a better chess player with online & Offline chess lessons
            from top coaches and masters. Get online Chess Coaching for kids &
            scholastic students of beginner, intermediate and advanced levels.
          </p>
          <Button className="classpage-button fs-5 text-black fw-semibold px-4 py-2">
            <a href="#courses" className="text-black text-decoration-none">Join Now </a>
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Classpage;
