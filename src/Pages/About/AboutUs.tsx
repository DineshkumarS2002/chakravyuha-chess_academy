import aboutbg from "../../assets/Aboutimg.jpg";
import "../../Style/About.css";

const AboutUs = () => {
  const stats = [
    { value: 16, label: "Years Experienced" },
    { value: 2000, label: "Outstanding Members" },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div role="img" aria-label="Chess academy image">
            <img
              src={aboutbg}
              className="img-fluid w-100"
              alt="About Chakravyuha Chess Academy"
              style={{
                maxHeight: "80vh",
                objectFit: "cover",
                // borderRadius: "8px",
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6 px-4">
          {/* Heading */}
          <h3
            className="text-uppercase mb-3 fs-5 "
            style={{ color: "#CEA82A" }}
          >
            About Us
          </h3>

          {/* Main Title */}
          <p
            className="mb-4"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            We are one of the <br className="d-none d-md-block" />
            <span style={{ color: "#CEA82A" }}>Best Chess Academies</span>
          </p>

          {/* Description */}
          <p
            className="mb-4 text-muted"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1rem)",
              lineHeight: "1.8",
            }}
          >
            The Chakravyuha Chess Academy has trained chess players to National,
            State, and District levels. We've produced over 40 FIDE-rated
            players and numerous national and state champions.
          </p>

          {/* Statistics Section */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-start">
                <h2
                  className="fw-bold mb-1"
                  style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)" }}
                >
                  {stat.value}
                  <span style={{ color: "#CEA82A" }}>+</span>
                </h2>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            className="btn btn-warning px-4 py-2 fw-bold rounded-pill"
            aria-label="Learn more about Chakravyuha Chess Academy"
          >
            More Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
