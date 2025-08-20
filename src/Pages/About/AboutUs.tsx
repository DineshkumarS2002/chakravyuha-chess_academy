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
              className="img-fluid w-100  about-image"
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
            Chakravyuha Chess Academy is one of the leading chess academies in
            Tamil Nadu. It was originally founded in 2012 in Ariyalur by
            International FIDE Rated Player Mr. S. Vijayabaskar and Mrs. Ananthi
            under the name Warriors Chess Academy. The academy was later renamed
            to Chakravyuha Chess Academy.
          </p>
          <p
            className="about-subtitles"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Since its inception, we have been dedicated to promoting chess by
            creating awareness in schools and organizing numerous district-level
            chess tournaments. Over the years, we have successfully trained and
            developed more than 40 FIDE rated players, as well as multiple state and
            district champions.
          </p>
          <p
            className="about-subtitles"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Our proud achievements include producing champions like Miss
            Priyanjana-National Gold Medalist, Miss Yuvanthika-state-level
            winner; and many other district-level champions.
          </p>
          <p
            className="about-subtitles"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            At Chakravyuha Chess Academy, we continue to nurture talent, instill
            discipline, and inspire a passion for the game of chess in players
            of all ages.
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
