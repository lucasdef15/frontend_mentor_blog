import React, { useContext, useRef } from "react";
import "../styles/BlogPage.css";
import DataContext from "../context/DataContext";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const { articles, darkMode } = useContext(DataContext);

  const headingRef = useRef([]);
  const paragraphRef = useRef();
  const articlesRef = useRef([]);
  const articlesWrapperRef = useRef();

  useGSAP(() => {
    // Animate heading (<h2>) first
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.out" }
    );

    // Animate paragraph (<p>) after the heading with a delay
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
        delay: 0.5,
      }
    );
  }, []);

  useGSAP(() => {
    if (!articles?.length) return; // no articles, don't animate yet

    const elements = articlesRef.current;

    if (!elements.length) return; // still no elements, skip

    gsap.fromTo(
      elements,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: articlesWrapperRef.current,
          start: "top 100%",
          end: "bottom 40%",
          scrub: 0.5,
          toggleActions: "play reverse play reverse",
          once: false,
        },
      }
    );
  }, [articles]);
  return (
    <div className="blog_page_container">
      <section ref={headingRef} className="blog_heading">
        <h2>My Articles</h2>
        <p ref={paragraphRef}>
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </section>
      <section ref={articlesWrapperRef} className="articles_wrapper">
        {articles?.map((article, index) => (
          <div key={index} ref={(el) => (articlesRef.current[index] = el)}>
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
