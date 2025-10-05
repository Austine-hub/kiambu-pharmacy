import React, { useEffect, useState } from "react";
import styles from "./WhatsAppBanner.module.css";

// images
import logo from "../assets/whatsapp/whatsapp1.png";
import whatsappIcon from "../assets/whatsapp/whatsapp3.png";
import illustration from "../assets/consultation/consultation1.png";

const WhatsAppBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide banner (except button) when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScrollY) {
        // scrolling up → hide content
        setIsVisible(true);
      } else {
        // scrolling down → show content
        setIsVisible(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${!isVisible ? styles.hidden : ""}`}>
      <div className={styles.container}>
        {/* Left Section — Logo + Text */}
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img src={logo} alt="Bethelex Health Services logo" className={styles.logo} />
            <div className={styles.brandText}>
              <span className={styles.brandName}>BETHELEX HEALTH SERVICES</span>
              <span className={styles.tagline}>COMPREHENSIVE FOCUSED CARE</span>
            </div>
          </div>

          <div className={styles.textSection}>
            <span className={styles.yayText}>Yay!</span>
            <span className={styles.normalText}>Now you can</span>
            <div className={styles.ctaText}>
              <span className={styles.whatsappText}>WHATSAPP</span>
              <span className={styles.toText}>TO</span>
              <span className={styles.orderText}>ORDER</span>
            </div>
          </div>
        </div>

        {/* Right Section — CTA Button */}
        <div className={styles.buttonSection}>
          <a
            href="https://wa.me/254796787207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className={styles.whatsappButton}
          >
            <span className={styles.buttonText}>Chat with us on WhatsApp</span>
            <img src={whatsappIcon} alt="WhatsApp icon" className={styles.whatsappIcon} />
          </a>
        </div>

        {/* Illustration */}
        <div className={styles.illustration}>
          <img
            src={illustration}
            alt="Doctor and patient illustration"
            className={styles.illustrationImage}
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
};

export default WhatsAppBanner;
