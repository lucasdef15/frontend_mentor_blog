import React, { useContext, useEffect, useRef } from "react";
import "../styles/Home.css";
import ArticlesList from "../components/ArticlesList";
import DataContext from "../context/DataContext";
import { SiFrontendmentor } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const { darkMode } = useContext(DataContext);

  const heroTitle = useRef(null);
  const heroApresentation = useRef(null);
  const articleRef = useRef([]);
  const heroLinks = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      heroTitle.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.1,
      }
    );
  }, []);

  // Animation for hero_apresentation
  useGSAP(() => {
    gsap.from(heroApresentation.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  // Animation for buttons with stagger
  useGSAP(() => {
    gsap.to(heroLinks.current.children, {
      opacity: 1,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.25,
      delay: 0.8,
    });
  }, []);

  return (
    <article className="hero_section">
      <section className="hero_apresentation_wrapper">
        <h1
          ref={heroTitle}
          style={{ color: darkMode ? "#FEFEFE" : "", opacity: 1 }}
        >
          Hi, I’m Paulina <span className="wave">👋</span>
        </h1>
        <section ref={heroApresentation} className="hero_apresentation">
          <p>
            I’m on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I’m not at my desk, you’ll
            find me reading, hiking through the mountains, or challenging myself
            on rock-climbing walls.
          </p>
          <p>
            I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who’s learning to
            code. Welcome to my corner of the internet, and thanks for stopping
            by!
          </p>
        </section>
        <section ref={heroLinks} className="hero_links_section">
          <button>
            <BsTwitterX />
          </button>
          <button>
            <FaGithub />
          </button>
          <button>
            <ImLinkedin2 />
          </button>
          <button>
            <SiFrontendmentor />
          </button>
        </section>
      </section>
      <section className="dynamic_articles_section">
        <ArticlesList articleRef={articleRef} />
      </section>
    </article>
  );
};

export default Home;
