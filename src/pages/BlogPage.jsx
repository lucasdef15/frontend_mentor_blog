import React, { useContext } from "react";
import "../styles/BlogPage.css";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { articles, darkMode } = useContext(DataContext);

  return (
    <div className="blog_page_container">
      <section className="blog_heading">
        <h2>My Articles</h2>
        <p>
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </section>
      <section className="articles_wrapper">
        {articles?.map((article, index) => (
          <div key={index}>
            <Link to={`/blog/${article.slug}`}>
              <h2
                style={{
                  color: `${darkMode ? "#fefefe" : "#34302d"}`,
                  fontSize: "20px",
                  marginBottom: ".5rem",
                }}
              >
                {article.title}
              </h2>
            </Link>
            <span
              style={{
                color: `${darkMode ? "#c0bfbf" : "#4a4846"}`,
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              {format(new Date(`${article.publishedAt}`), "MMMM d, yyyy")}
            </span>
            <div
              style={{
                color: `${darkMode ? "#c0bfbf" : "#4a4846"}`,
                fontSize: "18px",
              }}
            >
              {article.description}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
