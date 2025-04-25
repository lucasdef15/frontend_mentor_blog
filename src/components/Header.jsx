import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";
import MobileNavBar from "./MobileNavBar";
import useMediaQuery from "../hooks/useMediaQuery";

import { gsap } from "gsap";
import FloatingMenu from "./FloatingMenu";
import DesktopNavBar from "./DesktopNavBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const device = useMediaQuery();

  useEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else if (!open && menuRef.current) {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
      });
    }
  }, [open]);

  return (
    <>
      <header className="header">
        {device === "mobile" ? (
          <MobileNavBar setOpen={setOpen} open={open} />
        ) : (
          <DesktopNavBar />
        )}
      </header>

      {/* mobile menu floating */}
      <FloatingMenu open={open} menuRef={menuRef} />
    </>
  );
};

export default Header;
