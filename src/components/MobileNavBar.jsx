import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MobileNavBar = ({ open, setOpen }) => {
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
            className="mobile_nav_btn"
            onClick={() => setOpen(!open)}
          >
            <img
              src={`/assets/images/${
                open ? "icon-menu-close.svg" : "icon-menu.svg"
              }`}
              alt="menu mobile"
            />
          </button>
          <button className="toggle_dark">
            <img src="/assets/images/icon-moon.svg" alt="dark mode" />
          </button>
        </section>
      </section>
    </>
  );
};

export default MobileNavBar;
