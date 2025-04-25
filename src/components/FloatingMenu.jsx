import { NavLink } from "react-router-dom";

const FloatingMenu = ({ open, menuRef }) => {
  return (
    <section
      className="floating_paper"
      ref={menuRef}
      style={{ display: open ? "flex" : "none" }}
    >
      <nav className="navbar_mobile_links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          Blog
        </NavLink>
        <NavLink to="/articles" className="nav-link">
          About
        </NavLink>
        <NavLink to="/articles" className="nav-link">
          Newsletter
        </NavLink>
      </nav>
    </section>
  );
};

export default FloatingMenu;
