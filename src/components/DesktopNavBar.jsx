import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavBar = () => {
  return (
    <>
      <section className="desktop_navbar">
        <img
          className="avatar"
          src="/assets/images/image-avatar.jpg"
          alt="avatar"
        />

        <div className="desktop_wrapper_links">
          <section>
            <nav className="desktop_nav_links">
              <NavLink to="/" end className="desktop_nav_link">
                Home
              </NavLink>
              <NavLink to="/blog" className="desktop_nav_link">
                Blog
              </NavLink>
              <NavLink to="/about" className="desktop_nav_link">
                About
              </NavLink>
              <NavLink to="/newsletter" className="desktop_nav_link">
                Newsletter
              </NavLink>
            </nav>
          </section>

          <section>
            <button className="toggle_dark">
              <img src="/assets/images/icon-moon.svg" alt="dark mode" />
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default DesktopNavBar;
