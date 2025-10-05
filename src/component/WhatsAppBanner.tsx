import React from "react";
import styles from "./WhatsAppBanner.module.css";

const WhatsAppBanner: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img
            src="https://images.unsplash.com/photo-1580281657521-6f91a6f8c671?w=100&h=100&fit=crop"
            alt="Kiambu Pharmacy Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}>
            Kiambu <br />
            <span className={styles.pharmacyText}>PHARMACY</span>
          </span>
        </div>

        {/* Text Section */}
        <div className={styles.textSection}>
          <span className={styles.yayText}>Yay!</span>
          <span className={styles.normalText}>Now you can</span>
          <div className={styles.ctaText}>
            <span className={styles.whatsappText}>WHATSAPP</span>
            <span className={styles.toText}>TO</span>
            <span className={styles.orderText}>ORDER</span>
          </div>
        </div>

        {/* Button Section */}
        <div className={styles.buttonSection}>
          <a
            href="https://wa.me/254700000000" // replace with real number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order via WhatsApp"
            className={styles.whatsappButton}
          >
            <span className={styles.buttonText}>Chat with us on WhatsApp</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className={styles.whatsappIcon}
            />
          </a>
        </div>

        {/* Illustration Section */}
        <div className={styles.illustration}>
          <img
            src="https://images.unsplash.com/photo-1626774369644-1ffbd9a6d7bf?w=400&h=200&fit=crop"
            alt="Doctor and patient illustration"
            className={styles.illustrationImage}
          />
        </div>
      </div>
    </nav>
  );
};

export default WhatsAppBanner;
