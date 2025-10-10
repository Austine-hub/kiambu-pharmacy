// src/components/header/Navbar.tsx
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

interface NavItem {
  label: string;
  path: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
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
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Shrink navbar on scroll (modern UX enhancement)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <nav
        className={styles.container}
        aria-label="Main navigation"
        role="navigation"
      >
        {/* === Brand === */}
        <div className={styles.brand}>
          <NavLink to="/" className={styles.brandLink} onClick={closeMenu}>
            <span className={styles.brandAccent}>Simply</span> <p className={styles.brand1}>BethelexMeds</p>
          </NavLink>
        </div>

        {/* === Mobile Toggle === */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* === Main Navigation === */}
        <ul
          id="main-navigation"
          className={`${styles.mainLinks} ${menuOpen ? styles.active : ""}`}
          role="menubar"
        >
          {NAV_ITEMS.map(({ label, path, badge }) => (
            <li key={label} role="none">
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeLink : ""}`
                }
                role="menuitem"
              >
                <span>{label}</span>
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
