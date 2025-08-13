import {  Button } from "react-bootstrap";
import "../../Style/Classpage.css";

const Classpage = () => {
  return (
    <section className="classpage-hero d-flex  ">
      <div  className="container-fluid text-white classpage-content ">
        {/* Title */}
        <h1
          className="classpage-title mb-3"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-duration="800"
          data-aos-delay="0"
          data-aos-easing="ease-in-sine"
        >
          Join Our Online & Offline Class <br />
          <span className="classpage-highlight fw-bold">Today!</span>
        </h1>

        {/* Subtitle */}
        <p
          className="classpage-subtitle mb-4"
          data-aos="fade-left"
          data-aos-offset="275"
          data-aos-duration="800"
          data-aos-delay="275"
          data-aos-easing="ease-in-sine"
        >
          Become a better chess player with online & offline chess lessons from
          top coaches and masters. Get online Chess Coaching for kids &
          scholastic students of beginner, intermediate and advanced levels.
        </p>

        {/* Button */}
        <Button
          className="classpage-button"
          data-aos="fade-right"
          data-aos-offset="250"
          data-aos-duration="800"
          data-aos-delay="250"
          data-aos-easing="ease-in-sine"
        >
          <a href="#contact" className="text-black text-decoration-none">
            Join Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Classpage;
