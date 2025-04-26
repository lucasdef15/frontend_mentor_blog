import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import "../styles/SingleBlogPage.css";
import MarkdownRenderer from "../components/MarkdownRenderer";

const SingleBlogPage = () => {
  const { articles, darkMode } = useContext(DataContext);
  const { slug } = useParams();

  const article = articles.find((article) => article.slug.toString() === slug);

  return (
    <main className="single_blog_page_container">
      <article>
        {article && (
          <>
            <section className="single_blog_page_heading">
              <h2>{article.title}</h2>
              <p>
                {format(new Date(`${article.publishedAt}`), "MMMM d, yyyy")}
              </p>
            </section>
            <section className="single_blog_page_display_content">
              <MarkdownRenderer content={article.content} darkMode={darkMode} />
            </section>
          </>
        )}
      </article>
    </main>
  );
};

export default SingleBlogPage;
