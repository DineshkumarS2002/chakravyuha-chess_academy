import React, { type JSX } from "react";
import "../../Style/Blog.css";
import blogimg1 from "../../assets/Blogimg1.png";
import blogimg2 from "../../assets/Blogimg2.jpg";
import blogimg3 from "../../assets/Blogimg3.jpg";

interface BlogPost {
  id: number;
  title: string;
  description: string | JSX.Element;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tournament Triumphs",
    description:
      " Our players brought home multiple trophies, medals, and certificates, proving their skill and dedication.",
    image: blogimg1,
  },
  {
    id: 2,
    title: "State & National Glory",
    description:
      " Several students represented our academy at the 67th National School Games – Chess Championship, showcasing exceptional strategic play.",
    image: blogimg2,
  },
  {
    id: 3,
    title: "Skills Beyond the Board",
    description:
      "Alongside the accolades, our players gained invaluable skills in focus, decision-making, and sportsmanship.",
    image: blogimg3,
  },
];

const Blog: React.FC = () => {
  return (
    <section className="latest-blog-section py-5">
      <div className="container">
        {/* Heading */}
        <p className="section-subtitle text-center fs-4">
          Exploring Tactics, Games, and the Joy of Chess
        </p>
        <h2
          className="section-title text-center mb-3 display-4"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
        >
          Latest Blog
        </h2>
        <p
          className="section-desc text-center mb-5 text-secondary"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          Check out our newest chess blogs filled with tips, strategies, and
          insights to enhance your game!
        </p>

        {/* Blog Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-4 px-md-5">
          {blogPosts.map((post, index) => {
            // Animation settings for each card
            let aosProps = {};
            if (index % 3 === 0) {
              aosProps = {
                "data-aos": "fade-left",
                "data-aos-duration": "1200",
                "data-aos-delay": index * 150,
              };
            } else if (index % 3 === 1) {
              aosProps = {
                "data-aos": "fade-up",
                "data-aos-duration": "1200",
                "data-aos-delay": index * 150,
              };
            } else {
              aosProps = {
                "data-aos": "fade-right",
                "data-aos-duration": "1200",
                "data-aos-delay": index * 150,
              };
            }

            return (
              <div key={post.id} className="col" {...aosProps}>
                <div className="card blog-card h-100 shadow-sm p-4">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />
                  <div className="card-body p-3">
                    <h5 className="blog-title mt-2">{post.title}</h5>
                    <p className="blog-description">{post.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
