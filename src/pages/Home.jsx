import React, { useContext } from "react";
import "../styles/Home.css";
import ArticlesList from "../components/ArticlesList";
import DataContext from "../context/DataContext";
import { SiFrontendmentor } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useContext(DataContext);
  return (
    <article className="hero_section">
      <section className="hero_apresentation_wrapper">
        <h1 style={{ color: darkMode ? "#FEFEFE" : "" }}>
          Hi, I’m Paulina <span className="wave">👋</span>
        </h1>
        <section className="hero_apresentation">
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
        <section className="hero_links_section">
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
        <ArticlesList />
      </section>
    </article>
  );
};

export default Home;
