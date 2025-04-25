import { useEffect, useState } from "react";
import { format } from "date-fns";
import "../styles/ArticlesList.css";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        if (!response.ok) throw new Error("Network response was not ok");
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section>
      <h2 className="articles_list_title">Latest Articles</h2>
      <section className="articles_wrapper">
        {articles.slice(0, 5).map((article, index) => (
          <div key={index}>
            <h2
              style={{
                color: "#34302d",
                fontSize: "20px",
                marginBottom: ".5rem",
              }}
            >
              {article.title}
            </h2>
            <span
              style={{
                color: "#4a4846",
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              {format(new Date(`${article.publishedAt}`), "MMMM d, yyyy")}
            </span>
          </div>
        ))}
        {articles.length > 5 && (
          <button className="viewall_btn">View All Articles</button>
        )}
      </section>
    </section>
  );
};

export default ArticlesList;
