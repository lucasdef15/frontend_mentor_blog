import { useContext, useEffect, useRef } from "react";
import { format } from "date-fns";
import "../styles/ArticlesList.css";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import gsap from "gsap"; // Import gsap for animations
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ArticlesList = ({ articleRef }) => {
  const { articles, darkMode } = useContext(DataContext);

  useGSAP(() => {
    gsap.fromTo(
      ".articles_list_title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      articleRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: articleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
          toggleActions: "play reverse play reverse",
          once: false,
        },
      }
    );
  }, [articles]);

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
          <div
            key={index}
            ref={(el) => {
              articleRef.current[index] = el;
            }}
          >
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
                color: darkMode ? "#C0BFBF" : "#34302d",
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
