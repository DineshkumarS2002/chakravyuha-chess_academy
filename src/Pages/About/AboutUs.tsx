import { useEffect, useState } from "react";
import aboutbg from "../../assets/Aboutimg.jpg";
import "../../Style/About.css";

// ⏱ Optimized CountUp Component
const CountUpNumber = ({
  end,
  duration = 1200,
}: {
  end: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <h2 className="fw-bold mb-1 about-stat-number">
      {count}
      <span className="about-highlight">+</span>
    </h2>
  );
};

// 🧠 Main AboutUs Component
const AboutUs = () => {
  const stats = [
    { value: 16, label: "Years Experienced" },
    { value: 2000, label: "Outstanding Members" },
  ];

  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        {/* 🖼 Image Section */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div role="img" aria-label="Chess academy image">
            <img
              src={aboutbg}
              className="img-fluid w-100 about-image"
              alt="About Chakravyuha Chess Academy"
              loading="lazy"
            />
          </div>
        </div>

        {/* 📝 Content Section */}
        <div className="col-12 col-lg-6 px-4">
          <h3 className="about-section-title">About Us</h3>

          <p className="about-title">
            We are one of the <br className="d-none d-md-block" />
            <span className="about-highlight">Best Chess Academies</span>
          </p>

          <p className="about-subtitle">
            The Chakravyuha Chess Academy has trained chess players to National,
            State, and District levels. We've produced over 40 FIDE-rated
            players and numerous national and state champions.
          </p>

          {/* 🔢 Stats Section */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-start">
                <CountUpNumber end={stat.value} />
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* 🟡 CTA Button */}
          {/* <button
            className="btn btn-warning px-4 py-2 rounded-pill"
            aria-label="Learn more about Chakravyuha Chess Academy"
          >
            More Details →
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
