import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import DataContext from "../context/DataContext";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const MobileNavBar = ({ open, setOpen }) => {
  const { handleDarkModeClick, darkMode } = useContext(DataContext);

  const menuBtnRef = useRef(null);

  useEffect(() => {
    if (menuBtnRef.current) {
      gsap.to(menuBtnRef.current, {
        backgroundColor: open ? "#333" : "",
        scale: open ? 1.05 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [open]);

  return (
    <>
      <section className="mobile_nav">
        <img
          className="avatar"
          src="/assets/images/image-avatar.jpg"
          alt="avatar"
        />
        <section className="mobile_nav_btns">
          <button
            ref={menuBtnRef}
            className={`${
              open && darkMode ? "mobile_nav_btn open" : "mobile_nav_btn"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <MdOutlineClose
                style={{ color: darkMode ? "#201e1d" : "#fefefe" }}
              />
            ) : (
              <MdOutlineMenu />
            )}
          </button>
          <section>
            <button
              type="button"
              className="toggle_dark"
              onClick={handleDarkModeClick}
            >
              <img
                src={`/assets/images/${
                  darkMode ? "icon-sun.svg" : "icon-moon.svg"
                }`}
                alt="dark mode"
              />
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default MobileNavBar;
