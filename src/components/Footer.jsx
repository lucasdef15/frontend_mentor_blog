import React from "react";
import "../styles/Footer.css";
import { SiFrontendmentor } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer_section">
        <span className="separation" />
        <div className="footer_links_wrapper">
          <p>Made with ❤️ and ☕️ by Lucas F.</p>{" "}
          {/* ← added your signature here */}
          <section className="link_footer">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
