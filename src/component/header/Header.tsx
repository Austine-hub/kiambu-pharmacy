import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  phoneNumber?: string;
}

const Header: React.FC<HeaderProps> = ({ phoneNumber = "0796787207" }) => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    console.log("Search query:", query);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* === Top Section === */}
        <div className={styles.top}>
          <div className={styles.logoGroup}>
            <div className={styles.logoIcon}>
              <svg
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M20 5L15 15L5 20L15 25L20 35L25 25L35 20L25 15L20 5Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
              <span className={styles.logoBadge}>BETHELEX</span>
            </div>
            <h1 className={styles.logoText}>BETHELEX HEALTHCARE</h1>
          </div>

          <div className={styles.contact}>
            <span className={styles.label}>Talk to us </span>
            <strong>CALL</strong>{" "}
            <a href={`tel:${phoneNumber}`} className={styles.value}>
              {phoneNumber}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* === Navigation & Search === */}
        <nav
          id="main-navigation"
          className={`${styles.navbar} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main Navigation"
        >
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <form className={styles.search} onSubmit={handleSearch} role="search">
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12.5 12.5L17 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Header;

