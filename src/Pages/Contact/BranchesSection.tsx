import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BranchesSection: React.FC = () => {
  return (
    <section className="py-5 text-center mt-2 mt-lg-5">
      <Container>
        <p className="fs-5 fw-medium" style={{ color: "#CEA82A" }}>
          Move in Silence Only Speak With it's Time to say{" "}
          <span className="fw-bold fs-5"> Checkmate!</span>
        </p>
        <h1 className="display-5 fw-semibold">
          Chakravyuha Chess Academy Branches
        </h1>
        <p className="text-muted mb-5">
          Explore Our Chakravyuha Chess Academy Branches Across Tamil Nadu
        </p>

        <Row className="text-center gy-4">
          <Col md={6} lg={4}>
            <h5 className="fw-semibold">Ariyalur Branch</h5>
            <p>
              36/C6,Rajaji Nagar,2nd Cross,Hotel Laya Inn Back
              Side,Ariyalur-621-713. <br />
              Ph.No:8870221915
            </p>
          </Col>

          <Col md={6} lg={4}>
            <h5 className="fw-semibold">Jayankondam Branch</h5>
            <p>
              17/6,South Vellar Street,Jayankondam-621-802. <br />
              Ph.No:8870221915
            </p>
          </Col>

          <Col md={6} lg={4}>
            <h5 className="fw-semibold">Coimbatore Branch</h5>
            <p>
              Sitra,Coimbatore-641-014. <br /> Ph.No:8870221915
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BranchesSection;
