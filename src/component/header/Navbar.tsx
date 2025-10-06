import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleMainMenu = () => setIsMainMenuOpen((prev) => !prev);
  const toggleCategoryMenu = () => setIsCategoryOpen((prev) => !prev);

  const mainLinks = [
    { label: "Buy Medicines", href: "#buy-medicines", active: true },
    { label: "General Consultation", href: "#find-doctors" },
    { label: "Lab Tests", href: "#lab-tests" },
    { label: "Mother & Child Health", href: "#circle-membership" },
    { label: "VCT Services", href: "#health-records" },
    { label: "Radiological Services", href: "#radiology", badge: "New" },
    { label: "Reproductive Health", href: "#buy-insurance", badge: "New" },
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

          <ul
            className={`${styles.mainLinks} ${
              isMainMenuOpen ? styles.active : ""
            }`}
          >
            {mainLinks.map(({ label, href, badge, active }) => (
              <li
                key={label}
                className={`${styles.navItem} ${active ? styles.active : ""}`}
              >
                <a href={href}>
                  {label}
                  {badge && <span className={styles.badge}>{badge}</span>}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.menuToggle} ${styles.rightToggle}`}
            onClick={toggleCategoryMenu}
            aria-label="Toggle category menu"
            aria-expanded={isCategoryOpen}
          >
            ☰
          </button>
        </div>

        {/* === Bottom Navigation === */}
        <div className={`${styles.bottomNav} ${isCategoryOpen ? styles.active : ""}`}>
          <ul className={styles.categoryLinks}>
            {categories.map((cat) => (
              <li key={cat} className={styles.bottomItem}>
                <a href={`#${cat.toLowerCase().replace(/\s+/g, "-")}`}>{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

