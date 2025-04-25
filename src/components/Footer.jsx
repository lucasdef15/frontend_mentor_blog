import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer_section">
      <p>Made with ❤️ and ☕️</p>
      <section className="link_footer">
        <button>
          <img src="/assets/images/logo-x.svg" alt="twitter" />
        </button>
        <button>
          <img src="/assets/images/logo-github.svg" alt="twitter" />
        </button>
        <button>
          <img src="/assets/images/logo-linkedin.svg" alt="twitter" />
        </button>
        <button>
          <img src="/assets/images/logo-frontend-mentor.svg" alt="twitter" />
        </button>
      </section>
    </footer>
  );
};

export default Footer;
