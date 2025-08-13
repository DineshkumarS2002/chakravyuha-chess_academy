import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BranchesSection: React.FC = () => {
  return (
    <section className="py-5 text-center mt-2 mt-lg-5">
      <Container>
        <p className="fs-5 fw-medium" style={{ color: "#CEA82A" }}>
          Move in Silence Only Speak When it's Time to say{" "}
          <span className="fw-bold fs-5">Checkmate!</span>
        </p>

        <h1
          className="display-5 fw-semibold"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          Chakravyuha Chess Academy Branches
        </h1>

        <p
          className="text-muted mb-5"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          Explore Our Chakravyuha Chess Academy Branches Across Tamil Nadu
        </p>

        <Row className="text-center gy-4">
          {/* Left Card */}
          <Col
            md={6}
            lg={4}
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h5 className="fw-semibold">Ariyalur Branch</h5>
            <p>
              36/C6, Rajaji Nagar, 2nd Cross, Hotel Laya Inn Back Side,
              Ariyalur-621-713. <br />
              Ph.No: 8870221915
            </p>
          </Col>

          {/* Center Card */}
          <Col
            md={6}
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h5 className="fw-semibold">Jayankondam Branch</h5>
            <p>
              17/6, South Vellar Street, Jayankondam-621-802. <br />
              Ph.No: 8870221915
            </p>
          </Col>

          {/* Right Card */}
          <Col
            md={6}
            lg={4}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h5 className="fw-semibold">Coimbatore Branch</h5>
            <p>
              Sitra, Coimbatore-641-014. <br /> Ph.No: 8870221915
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BranchesSection;
