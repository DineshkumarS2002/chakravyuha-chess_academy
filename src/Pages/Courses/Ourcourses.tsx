import img1 from "../../assets/Cardimg1.jpg";
import img2 from "../../assets/Cardimg2.jpg";
import img3 from "../../assets/Cardimg3.jpg";
import { Link } from "react-router-dom";
import "../../Style/Ourcourses.css";

const courses = [
  {
    title: "Chess Course For Beginners",
    image: img1,
    sessions: 8,
    duration: "1 hour",
  },
  {
    title: "Intermediate Chess Course",
    image: img2,
    sessions: 8,
    duration: "1 hour",

    dark: true,
  },
  {
    title: "Advanced Chess Course",
    image: img3,
    sessions: 8,
    duration: "1 hour",
  },
];

const Ourcourses = () => {
  return (
    <div className="container py-5 px-3 px-md-5">
      {/* Section Title */}
      <div className="row mb-5 text-center">
        <div className="col">
          <h3 className="fw-semibold mb-2 section-subtitle fs-2">
            Our Courses
          </h3>
          <h2
            className="fw-bold mb-3 section-title"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Best Courses & Learning
          </h2>
          <p
            className="section-description fs-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            You'll find the best chess courses, series, lectures, and
            <br className="d-none d-md-block" />
            classes here for all levels of players.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="row g-4 g-lg-5">
        {courses.map((course, index) => {
          let detailPath = "#";
          if (course.title.includes("Beginner"))
            detailPath = "/courses/beginner";
          else if (course.title.includes("Intermediate"))
            detailPath = "/courses/intermediate";
          else if (course.title.includes("Advanced"))
            detailPath = "/courses/advanced";

          // Determine animation direction based on column position
          let aosProps = {};
          if (index % 3 === 0) {
            // Left column
            aosProps = {
              "data-aos": "fade-left",
              "data-aos-duration": "1500",
            };
          } else if (index % 3 === 1) {
            // Center column
            aosProps = {
              "data-aos": "fade-up",
              "data-aos-duration": "1500",
            };
          } else {
            // Right column
            aosProps = {
              "data-aos": "fade-right",
              "data-aos-duration": "1500",
            };
          }

          return (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4"
              {...aosProps}
            >
              <div
                className={`card h-100 border-0 shadow-sm overflow-hidden d-flex flex-column ${
                  course.dark ? "bg-dark text-white" : ""
                }`}
              >
                {/* Course Image */}
                <div className="position-relative p-3">
                  <img
                    src={course.image}
                    loading="lazy"
                    className="img-fluid w-100 rounded-3"
                    alt={course.title}
                    style={{ objectFit: "cover", height: "230px" }}
                  />
                </div>

                {/* Course Body */}
                <div className="card-body px-4 py-3 flex-grow-1">
                  <h4 className="fw-bold mb-3 course-title">{course.title}</h4>

                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2 fw-bold course-meta">
                    <p className="mb-2 me-3 d-flex align-items-center gap-2">
                      <i
                        className="fa-solid fa-clock fa-spin"
                        style={{ color: "#CEA82A" }}
                      ></i>
                      Duration: {course.duration}
                    </p>
                    <p className="mb-2 d-flex align-items-center gap-2">
                      <i
                        className="fa-solid fa-award"
                        style={{ color: "#CEA82A" }}
                      ></i>
                      Certification
                    </p>
                  </div>

                  <div className="d-flex  justify-content-between align-items-center flex-wrap course-meta">
                    <p className="mb-1 fw-semibold">
                      Number of Classes: <span> 8/10/12 & Customized</span>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer bg-transparent border-0 px-4 pb-4 d-flex justify-content-between align-items-center">
                  <Link
                    to={detailPath}
                    className="btn btn-sm fw-bold text-black px-3 py-2 w-100"
                    style={{
                      backgroundColor: "#CEA82A",
                      fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                    }}
                  >
                    Course Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ourcourses;
