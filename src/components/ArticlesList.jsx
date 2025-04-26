import { useContext } from "react";
import { format } from "date-fns";
import "../styles/ArticlesList.css";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const { articles, darkMode } = useContext(DataContext);

  return (
    <section>
      <h2
        className="articles_list_title"
        style={{ color: darkMode ? "#FEFEFE" : "" }}
      >
        Latest Articles
      </h2>
      <section className="articles_wrapper">
        {articles?.slice(0, 5)?.map((article, index) => (
          <div key={index}>
            <Link to={`/blog/${article.slug}`}>
              <h2
                style={{
                  color: darkMode ? "#fefefe" : "#34302d",
                  fontSize: "20px",
                  marginBottom: ".5rem",
                }}
              >
                {article.title}
              </h2>
            </Link>
            <span
              style={{
                color: darkMode ? "#fefefed5" : "#34302d",
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              {format(new Date(`${article.publishedAt}`), "MMMM d, yyyy")}
            </span>
          </div>
        ))}
        {articles?.length > 5 && (
          <button className="viewall_btn">
            <Link style={{ textDecoration: "none", color: "unset" }} to="/blog">
              View All Articles
            </Link>
          </button>
        )}
      </section>
    </section>
  );
};

export default ArticlesList;
