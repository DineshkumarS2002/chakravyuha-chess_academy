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
    title: "Chess – A Game that Enhances Intelligence",
    description:
      "Chess is not just a game; it is a workout for the brain. In our academy, children learn to think with focus, plan strategically, and develop a competitive spirit. With quality training, they excel not only in academics but also in life.",
    image: blogimg1,
  },
  {
    id: 2,
    title: "5 Secrets to Winning a Chess Match",
    description: (
      <ul className="mb-0">
        <li>Use your time wisely</li>
        <li>Think 3 moves ahead</li>
        <li>Observe your opponent’s weaknesses</li>
        <li>Learn from your losses</li>
        <li>Manage stress effectively</li>
      </ul>
    ),
    image: blogimg2,
  },
  {
    id: 3,
    title: "Recent Academy Achievements",
    description:
      "In last month’s district chess tournament, our students won 3 gold, 2 silver, and 1 bronze medals. 🏆 Best Player Award — Adithya (U14) 🥈 Second Place — Nandhini (U12) These victories are the result of our structured training and dedicated hard work.",
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
