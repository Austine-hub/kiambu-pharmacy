import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleMainMenu = () => setIsMainMenuOpen((prev) => !prev);
  const toggleCategoryMenu = () => setIsCategoryOpen((prev) => !prev);

  const mainLinks = [
    { label: "Buy Medicines", path: "/buy-medicines" },
    { label: "General Consultation", path: "/consult" },
    { label: "Lab Tests", path: "/lab" },
    { label: "Mother & Child Health", path: "/mother-child" },
    { label: "VCT Services", path: "/vct" },
    { label: "Radiological Services", path: "/radiology", badge: "New" },
    { label: "Reproductive Health", path: "/obgyn", badge: "New" },
  ];

  const categories = [
    "Her Health",
    "Baby Care",
    "Nutritional Drinks & Supplements",
    "Women Care",
    "Personal Care",
    "Mens Health",
    "Health Devices",
    "Home Essentials",
    "Health Condition",
  ];

  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.container}>
        {/* === Top Navigation === */}
        <div className={styles.topNav}>
          {/* Left Hamburger */}
          <button
            className={`${styles.menuToggle} ${styles.leftToggle}`}
            onClick={toggleMainMenu}
            aria-label="Toggle main menu"
            aria-expanded={isMainMenuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          {/* Main Navigation Links */}
          <ul
            className={`${styles.mainLinks} ${
              isMainMenuOpen ? styles.active : ""
            }`}
            role="menubar"
          >
            {mainLinks.map(({ label, path, badge }) => (
              <li key={label} className={styles.navItem} role="none">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                  role="menuitem"
                  onClick={() => setIsMainMenuOpen(false)}
                >
                  {label}
                  {badge && <span className={styles.badge}>{badge}</span>}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Hamburger for categories */}
          <button
            className={`${styles.menuToggle} ${styles.rightToggle}`}
            onClick={toggleCategoryMenu}
            aria-label="Toggle category menu"
            aria-expanded={isCategoryOpen}
          >
            ☰
          </button>
        </div>

        {/* === Bottom Navigation (Categories) === */}
        <div
          className={`${styles.bottomNav} ${
            isCategoryOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.categoryLinks} role="menubar">
            {categories.map((cat) => {
              const path = `/category/${cat
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
              return (
                <li key={cat} className={styles.bottomItem} role="none">
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${styles.bottomLink} ${isActive ? styles.active : ""}`
                    }
                    role="menuitem"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    {cat}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


