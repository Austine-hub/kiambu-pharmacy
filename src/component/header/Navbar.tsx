// src/components/header/Navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  path: string;
  badge?: string;
}

const mainLinks: NavItem[] = [
  { label: "Buy Medicines", path: "/buy-medicines" },
  { label: "General Consultation", path: "/consult" },
  { label: "Lab Tests", path: "/lab" },
  { label: "Mother & Child Health", path: "/mother-child" },
  { label: "VCT Services", path: "/vct" },
  { label: "Radiological Services", path: "/radiology", badge: "New" },
  { label: "Reproductive Health", path: "/obgyn", badge: "New" },
];
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <nav
        className={styles.container}
        aria-label="Main navigation"
        role="navigation"
      >
        {/* === Mobile Toggle === */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* === Logo or Brand (optional) === */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.brandLink} onClick={closeMenu}>
            SimplyMeds
          </NavLink>
        </div>

        {/* === Main Links === */}
        <ul
          id="main-navigation"
          className={`${styles.mainLinks} ${menuOpen ? styles.active : ""}`}
          role="menubar"
        >
          {mainLinks.map(({ label, path, badge }) => (
            <li key={label} role="none">
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                }
                role="menuitem"
              >
                {label}
                {badge && <span className={styles.badge}>{badge}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
