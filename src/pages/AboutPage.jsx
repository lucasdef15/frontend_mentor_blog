import React from "react";
import "../styles/AboutPage.css";
import { SiFrontendmentor } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const heroLinks = useRef(null);

  useGSAP(() => {
    // Animate heading
    gsap.fromTo(
      titleRef.current,
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

    gsap.fromTo(
      ".about-p",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.25,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.25,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 100%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: true,
        },
      }
    );
  }, []);

  // Animation for buttons with stagger
  useGSAP(() => {
    gsap.fromTo(
      heroLinks.current.children,
      {
        y: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: heroLinks.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <main className="about_page_wrapper">
      <h2 ref={titleRef}>About Me</h2>
      <p className="about-p">
        Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
        creativity and problem-solving. That’s what led me to the world of
        front-end web development. There’s something magical about seeing an
        idea come to life in the browser—whether it’s a simple layout experiment
        or a complex interface for a bigger project.
      </p>
      <p className="about-p">
        When I’m not coding, I love getting lost in a good book. My taste is
        pretty eclectic: I’ll happily read everything from fantasy novels to
        biographies of tech pioneers. Reading helps me unwind and often sparks
        new ideas for my coding projects.
      </p>
      <p className="about-p">
        Another big passion of mine is the great outdoors. Hiking allows me to
        disconnect from the digital world and reconnect with nature. I love
        challenging hikes with rewarding views at the top. And if I’m not on the
        trails, you might catch me rock climbing. The combination of mental
        focus and physical endurance is a perfect parallel to tackling tough
        coding challenges!
      </p>
      <p className="about-p">Some of my favorite books:</p>
      <ul>
        <li>
          <strong>“The Pragmatic Programmer”</strong> by Andrew Hunt and David
          Thomas (for helpful insights into software development)
        </li>
        <li>
          <strong>“Ready Player One”</strong> by Ernest Cline (for some
          futuristic escapism)
        </li>
        <li>
          <strong>“The Hobbit”</strong> by J.R.R. Tolkien (for a bit of fantasy
          fun)
        </li>
        <li>
          <strong>“Educated”</strong> by Tara Westover (for incredible
          inspiration)
        </li>
      </ul>
      <p>
        I absolutely love my workspace as a place that inspires me to do my best
        work, so I thought I’d share it with you:
      </p>
      <img
        ref={imageRef}
        src="/assets/images/image-workspace-large.jpg"
        alt="workspace"
      />
      <p>
        I hope this blog not only documents my growth but also helps others see
        that coding can be for everyone. Thanks for joining me on this journey!
      </p>
      <section>
        <h3>Follow me</h3>
        <section ref={heroLinks} className="about_links_section">
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
    </main>
  );
};

export default AboutPage;
