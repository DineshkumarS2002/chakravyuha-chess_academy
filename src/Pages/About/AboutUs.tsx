import aboutbg from "../../assets/Aboutimg.jpg";
import "../../Style/About.css";

const AboutUs = () => {
  const stats = [
    { value: 16, label: "Years Experienced" },
    { value: 2000, label: "Outstanding Members" },
  ];

  return (
    <div className="container-fluid py-3 py-sm-4 py-lg-5">
      <div className="row align-items-center justify-content-center ">
        {/* Image Section */}
        <div className="col-12 col-lg-6 ">
          <div role="img" aria-label="Chess academy image">
            <img src={aboutbg} className="img-fluid" alt="..." style={{height:"80vh",width:"100%"}}></img>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-12 col-lg-6  px-sm-4 px-lg-5 order-2 order-lg-2">
          {/* Heading */}
          <h3 className="mb-2 mb-sm-3 fs-5 fs-sm-4 fs-lg-3">About Us</h3>

          {/* Main Title */}
          <p
            className="mb-3 mb-sm-4"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 600,
              lineHeight: "1.2",
            }}
          >
            We are one of the <br className="d-none d-sm-block" />
            <span className="d-sm-none"> </span>Best Chess Academy
          </p>

          {/* Description */}
          <p
            className="mb-3 mb-sm-4"
            style={{
              fontSize: "clamp(14px, 2.5vw, 16px)",
              color: "#787878",
              lineHeight: "1.6",
            }}
          >
            The Chakravyuha Chess Academy has trained chess players to National,
            State and District levels, and we have trained more than 40
            FIDE-rated players and many National players, State Champions and
            State top players.
          </p>

          {/* Statistics Section */}
          <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 gap-lg-5 align-items-start mb-3 mb-sm-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-sm-start">
                <p className="mb-0" style={{ color: "#787878" }}>
                  <span
                    style={{
                      fontSize: "clamp(2rem, 5vw, 2.5rem)",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="fw-bold ms-1"
                    style={{
                      color: "#CEA82A",
                      fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                    }}
                  >
                    +
                  </span>
                  <br />
                  <span style={{ fontSize: "clamp(14px, 2.5vw, 16px)" }}>
                    {stat.label}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            className="px-3 px-sm-4 py-2 fw-bold"
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
