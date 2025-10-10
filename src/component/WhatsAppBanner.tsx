import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./WhatsAppBanner.module.css";

import logo from "../assets/whatsapp/whatsapp1.png";
import whatsappIcon from "../assets/whatsapp/whatsapp3.png";
import illustration from "../assets/consultation/consultation1.png";

const WHATSAPP_NUMBER = "254796787207";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsAppBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleScroll = useCallback(() => {
    const current = window.scrollY;
    if (Math.abs(current - lastScrollY.current) < 8) {
      ticking.current = false;
      return;
    }

    setIsVisible(current <= 0 || current < lastScrollY.current);
    lastScrollY.current = current;
    ticking.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(handleScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <header
      className={`${styles.navbar} ${!isVisible ? styles.hidden : ""} ${
        prefersReducedMotion ? styles.reducedMotion : ""
      }`}
      role="banner"
      aria-hidden={!isVisible}
    >
      <div className={styles.container}>
        {/* Left Section (hidden on small screens) */}
        <div className={styles.leftSection}>
          <div className={styles.logoSection}>
            <img
              src={logo}
              alt="Bethelex Health Services logo"
              className={styles.logo}
              width={56}
              height={56}
              loading="eager"
              decoding="async"
            />
            <div className={styles.brandText}>
              <span className={styles.brandName}>BETHELEX HEALTH SERVICES</span>
              <span className={styles.tagline}>Comprehensive Focused Care</span>
            </div>
          </div>

          <div className={styles.textSection}>
            <span className={styles.yayText} aria-hidden>
              Yay!
            </span>
            <span className={styles.normalText}>Now you can</span>
            <div className={styles.ctaText}>
              <span className={styles.highlightText}>WHATSAPP</span>
              <span className={styles.toText}>TO</span>
              <span className={styles.highlightTextAlt}>ORDER</span>
            </div>
          </div>
        </div>

        {/* Action Button (always visible) */}
        <div className={styles.buttonSection}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Bethelex Health Services on WhatsApp"
            className={styles.whatsappButton}
          >
            <span className={styles.buttonText}>Chat with us on WhatsApp</span>
            <img
              src={whatsappIcon}
              alt=""
              aria-hidden
              className={styles.whatsappIcon}
              width={22}
              height={22}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        {/* Illustration (hidden on small screens) */}
        <div className={styles.illustration} aria-hidden>
          <img
            src={illustration}
            alt="Doctor consulting with patient illustration"
            className={styles.illustrationImage}
            loading="lazy"
            decoding="async"
            width={260}
            height={160}
          />
        </div>
      </div>
    </header>
  );
};

export default React.memo(WhatsAppBanner);
