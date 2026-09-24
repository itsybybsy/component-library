import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa"; 
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
      <div className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {/* Getting Started Section */}
          <li>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("Getting Started")}
            >
              <span>Getting Started</span>
              {openSection === "Getting Started" ? (
                <FaChevronDown size={12}  className={styles.arrowMenu}/>
              ) : (
                <FaChevronRight size={12}  className={styles.arrowMenu}/>
              )}
            </button>

            {openSection === "Getting Started" && (
              <ul className={styles.submenu}>
                <li><NavLink to="overview">Overview</NavLink></li>
                <li><NavLink to="usage">Usage</NavLink></li>
              </ul>
            )}
          </li>

          {/* Foundations */}
          <li>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("foundations")}
            >
              <span>Foundations</span>
              {openSection === "foundations" ? (
                <FaChevronDown size={12} className={styles.arrowMenu}/>
              ) : (
                <FaChevronRight size={12} className={styles.arrowMenu}/>
              )}
            </button>

            {openSection === "foundations" && (
              <ul className={styles.submenu}>
                <li><NavLink to="typography">Typography</NavLink></li>
                <li><NavLink to="colors">Colors</NavLink></li>
              </ul>
            )}
          </li>

          {/* Components */}
          <li>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("components")}
            >
              <span>Components</span>
              {openSection === "components" ? (
                <FaChevronDown size={12}  className={styles.arrowMenu}/>
              ) : (
                <FaChevronRight size={12}  className={styles.arrowMenu}/>
              )}
            </button>

            {openSection === "components" && (
              <ul className={styles.submenu}>
                <li><NavLink to="box">Box</NavLink></li>
                <li><NavLink to="card">Card</NavLink></li>
                <li><NavLink to="menu">Menu</NavLink></li>
                <li><NavLink to="image">Image</NavLink></li>
              </ul>
            )}
          </li>

            {/* Layouts */}
            <li>
            <button
              className={styles.sectionHeader}
              onClick={() => toggleSection("layouts")}
            >
              <span>Layouts</span>
              {openSection === "layouts" ? (
                <FaChevronDown size={12}  className={styles.arrowMenu}/>
              ) : (
                <FaChevronRight size={12}  className={styles.arrowMenu}/>
              )}
            </button>

            {openSection === "layouts" && (
              <ul className={styles.submenu}>
                <li><NavLink to="appbar">Navigation</NavLink></li>
              </ul>
            )}
          </li>

        </ul>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
