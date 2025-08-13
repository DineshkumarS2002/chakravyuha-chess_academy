import { useEffect, useState, useRef } from "react";
import aboutbg from "../../assets/Aboutimg.jpg";
import "../../Style/About.css";

const CountUpNumber = ({
  end,
  duration = 1200,
  startWhenVisible = false,
}: {
  end: number;
  duration?: number;
  startWhenVisible?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(!startWhenVisible);
  const ref = useRef<HTMLHeadingElement>(null);

  // Watch for visibility to start counting
  useEffect(() => {
    if (!startWhenVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startWhenVisible]);

  // Count-up animation
  useEffect(() => {
    if (!start) return;
    const beginTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - beginTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return (
    <h2
      ref={ref}
      className="fw-bold mb-1 about-stat-number"
      style={{ minWidth: "4ch" }}
    >
      {count}
      <span className="about-highlight">+</span>
    </h2>
  );
};

const AboutUs = () => {
  const stats = [
    { value: 16, label: "Years Experienced" },
    { value: 2000, label: "Outstanding Members" },
  ];

  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        {/* Left: Image */}
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

        {/* Right: Content */}
        <div className="col-12 col-lg-6 px-4">
          <h3 className="about-section-title">About Us</h3>

          <p
            className="about-title"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            We are one of the <br className="d-none d-md-block" />
            <span className="about-highlight">Best Chess Academies</span>
          </p>

          <p
            className="about-subtitle"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            The Chakravyuha Chess Academy has trained chess players to National,
            State, and District levels. We've produced over 40 FIDE-rated
            players and numerous national and state champions.
          </p>

          {/* Stats with staggered animation */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-start"
                data-aos="fade-up"
                data-aos-easing="ease-out"
                data-aos-duration="800"
                data-aos-delay={index * 300}
              >
                <CountUpNumber
                  end={stat.value}
                  startWhenVisible={true}
                  duration={1200}
                />
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
