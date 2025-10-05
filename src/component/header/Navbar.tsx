import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSubMenu = () => setIsSubMenuOpen((prev) => !prev);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
      <div className={styles.container}>
        {/* === Top Navigation === */}
        <div className={styles.topNav}>
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMenu}
            aria-label="Toggle main menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          <ul className={`${styles.topLinks} ${isMenuOpen ? styles.active : ""}`}>
            {[
              { label: "Buy Medicines", href: "#buy-medicines", active: true },
              { label: "General Consultation", href: "#find-doctors" },
              { label: "Lab Tests", href: "#lab-tests" },
              { label: "Mother And Child Health Care", href: "#circle-membership" },
              { label: "VCT Services", href: "#health-records" },
              { label: "Radiological Services", href: "#radiology", badge: "New" },
              { label: "Reproductive Health", href: "#buy-insurance", badge: "New" },
            ].map(({ label, href, badge, active }) => (
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
        </div>

        {/* === Bottom Navigation === */}
        <div className={styles.bottomNav}>
          <button
            className={styles.mobileSubToggle}
            onClick={toggleSubMenu}
            aria-label="Toggle categories"
            aria-expanded={isSubMenuOpen}
          >
            ☰ Categories
          </button>

          <ul
            className={`${styles.bottomLinks} ${
              isSubMenuOpen ? styles.active : ""
            }`}
          >
            {[
              "Her Health",
              "Baby Care",
              "Nutritional Drinks & Supplements",
              "Women Care",
              "Personal Care",
              "Mens Health",
              "Health Devices",
              "Home Essentials",
              "Health Condition",
            ].map((item) => (
              <li key={item} className={styles.bottomItem}>
                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
