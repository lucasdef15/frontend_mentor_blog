import { NavLink } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";

const FloatingMenu = ({ open, menuRef, setOpen }) => {
  const device = useMediaQuery();

  useEffect(() => {
    if (["tablet", "desktop"].includes(device) && setOpen) {
      setOpen(false);
    }
  }, [device, setOpen]);

  return (
    <section
      className="floating_paper"
      ref={menuRef}
      style={{ display: open ? "flex" : "none" }}
    >
      <nav className="navbar_mobile_links">
        <NavLink to="/" end className="nav-link" onClick={() => setOpen(!open)}>
          Home
        </NavLink>
        <NavLink to="/blog" className="nav-link" onClick={() => setOpen(!open)}>
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          About
        </NavLink>
        <NavLink
          to="/newsletter"
          className="nav-link"
          onClick={() => setOpen(!open)}
        >
          Newsletter
        </NavLink>
      </nav>
    </section>
  );
};

export default FloatingMenu;
