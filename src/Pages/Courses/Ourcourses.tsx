import img1 from "../../assets/Cardimg1.jpg";
import img2 from "../../assets/Cardimg2.jpg";
import img3 from "../../assets/Cardimg3.jpg";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Chess Course For Beginners",
    image: img1,
    sessions: 8,
    duration: "1 hour",
    classesPerWeek: "2 classes per week",
    rating: 4.9,
  },
  {
    title: "Intermediate Chess Course",
    image: img2,
    sessions: 8,
    duration: "1 hour",
    classesPerWeek: "2 classes per week",
    rating: 4.9,
    dark: true,
  },
  {
    title: "Advanced Chess Course",
    image: img3,
    sessions: 8,
    duration: "1 hour",
    classesPerWeek: "2 classes per week",
    rating: 4.9,
  },
];

const Ourcourses = () => {
  return (
    <div className="container py-5 px-3 px-md-5 py-5">
      {/* Section Title */}
      <div className="row mb-5 text-center">
        <div className="col">
          <h3 style={{ color: "#CEA82A" }} className="fw-semibold mb-2 fs-3">
            Our Courses
          </h3>
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", lineHeight: 1.3 }}
          >
            Best Courses & Learning
          </h2>
          <p className="fs-6 text-muted mb-0">
            You'll find the best chess courses, series, lectures, and{" "}
            <br className="d-none d-md-block" />
            classes here for all levels of players.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="row g-4 g-lg-5">
        {courses.map((course, index) => {
          // Determine the detail path
          let detailPath = "#";
          if (course.title.includes("Beginner"))
            detailPath = "/courses/beginner";
          else if (course.title.includes("Intermediate"))
            detailPath = "/courses/intermediate";
          else if (course.title.includes("Advanced"))
            detailPath = "/courses/advanced";

          return (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`card h-100 border-0 shadow-sm overflow-hidden ${
                  course.dark ? "bg-dark text-white" : ""
                }`}
              >
                {/* Course Image */}
                <div className="position-relative p-3">
                  <img
                    src={course.image}
                    className="w-100 rounded-3"
                    alt={course.title}
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                </div>

                {/* Course Body */}
                <div className="card-body px-4 py-3">
                  <p className="mb-2  medium">Sessions: {course.sessions}</p>
                  <h4 className="fw-bold mb-3 fs-4">{course.title}</h4>

                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2 medium fw-bold">
                    <p className="mb-2  me-3 d-flex align-items-center gap-2">
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
                      ></i>{" "}
                      Certification
                    </p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center flex-wrap medium">
                    <p className="mb-1">Number of Classes: 8</p>
                    <p className="mb-1">{course.classesPerWeek}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="card-footer bg-transparent border-0 px-4 pb-4 d-flex justify-content-between align-items-center">
                  <span className="fw-semibold small">
                    {course.rating}{" "}
                    <span style={{ color: "#FFA500" }}>★★★★★</span>
                  </span>
                  <Link
                    to={detailPath}
                    className="btn btn-sm fw-bold text-black px-3 py-2 fs-5"
                    style={{ backgroundColor: "#CEA82A" }}
                  >
                    Course Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Button */}
      {/* <div className="text-center mt-5">
        <a href="#" className="text-dark fw-semibold text-decoration-none fs-6">
          View More Courses <span>&rarr;</span>
        </a>
      </div> */}
    </div>
  );
};

export default Ourcourses;
