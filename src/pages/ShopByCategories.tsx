import React, { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import styles from "./ShopByCategories.module.css";

// Local Images
import pic1 from "./../assets/system/cns.png";
import pic2 from "./../assets/system/resp.png";
import pic3 from "./../assets/system/cardiac.png";
import pic4 from "./../assets/system/git.png";
import pic5 from "./../assets/system/gut.png";
import pic6 from "./../assets/system/msk.png";
import pic7 from "./../assets/system/allergy.png";
import pic8 from "./../assets/system/skin.png";
import pic9 from "./../assets/system/heartburn.png";
import pic10 from "./../assets/system/cough.png";
import pic11 from "./../assets/system/vitamins.png";
import pic12 from "./../assets/system/stomach-ache.png";
import pic13 from "./../assets/system/supplements.png";

interface Category {
  id: string;
  name: string;
  image: string;
}

const DEFAULT_AUTOSCROLL_MS = 8000;
const SCROLL_STEP = 260; // pixels per click/auto step

const categories: Category[] = [
  { id: "1", name: "Headache", image: pic1 },
  { id: "2", name: "Breathing Problem", image: pic2 },
  { id: "3", name: "Pain Medication", image: pic3 },
  { id: "4", name: "IBS", image: pic12 },
  { id: "5", name: "Heartburn", image: pic9 },
  { id: "6", name: "Skin Care", image: pic8 },
  { id: "7", name: "UTI treatment", image: pic5 },
  { id: "8", name: "Body Pain", image: pic6 },
  { id: "9", name: "Allergy Drugs", image: pic7 },
  { id: "10", name: "Cough", image: pic10 },
  { id: "11", name: "Vitamins", image: pic11 },
  { id: "12", name: "Supplements", image: pic13 },
  { id: "13", name: "Digestive Issues", image: pic4 },
];

const ShopByCategories: React.FC = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const autoScrollTimer = useRef<number | null>(null);
  const resumeTimer = useRef<number | null>(null);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  // helper: scroll by amount
  const scrollBy = useCallback((amount: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  // left/right controls
  const handleScroll = useCallback((dir: "left" | "right") => {
    setIsAutoScrollEnabled(false);
    scrollBy(dir === "left" ? -SCROLL_STEP : SCROLL_STEP);
    // resume auto-scroll after short inactivity (5s)
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsAutoScrollEnabled(true), 5000);
  }, [scrollBy]);

  // auto-scroll effect (respects prefers-reduced-motion)
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (!isAutoScrollEnabled || !scrollRef.current) return;
    autoScrollTimer.current = window.setInterval(() => {
      // if reached end, scroll back to start smoothly
      const container = scrollRef.current!;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (Math.abs(container.scrollLeft - maxScrollLeft) < 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollBy(SCROLL_STEP);
      }
    }, DEFAULT_AUTOSCROLL_MS);

    return () => {
      if (autoScrollTimer.current) window.clearInterval(autoScrollTimer.current);
    };
  }, [isAutoScrollEnabled, scrollBy]);

  // pause/resume on pointer and focus interactions
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handlePointerEnter = () => setIsAutoScrollEnabled(false);
    const handlePointerLeave = () => {
      // resume after 3s of no interaction
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
      resumeTimer.current = window.setTimeout(() => setIsAutoScrollEnabled(true), 3000);
    };

    const handleFocusIn = () => setIsAutoScrollEnabled(false);
    const handleFocusOut = () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
      resumeTimer.current = window.setTimeout(() => setIsAutoScrollEnabled(true), 3000);
    };

    el.addEventListener("pointerenter", handlePointerEnter);
    el.addEventListener("pointerleave", handlePointerLeave);
    el.addEventListener("focusin", handleFocusIn);
    el.addEventListener("focusout", handleFocusOut);

    return () => {
      el.removeEventListener("pointerenter", handlePointerEnter);
      el.removeEventListener("pointerleave", handlePointerLeave);
      el.removeEventListener("focusin", handleFocusIn);
      el.removeEventListener("focusout", handleFocusOut);
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  // keyboard: allow left/right arrow to scroll when carousel itself or items focused
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement;
      // only handle if focus is inside the carousel
      if (!scrollRef.current || !scrollRef.current.contains(active)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handleScroll("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleScroll("right");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleScroll]);

  return (
    <section className={styles.container} aria-labelledby="shop-by-categories-title">
      <div className={styles.header}>
        <h2 id="shop-by-categories-title" className={styles.title}>
          Shop by Categories
        </h2>

        {/* Small note for assistive tech */}
        <p className={styles.hint} aria-hidden="true">
          Tap or use arrow keys to navigate
        </p>
      </div>

      <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Product categories carousel">
        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => handleScroll("left")}
          aria-label="Scroll categories left"
        >
          <ChevronLeft aria-hidden />
        </button>

        <ul
          ref={scrollRef}
          className={styles.categoriesGrid}
          role="list"
          tabIndex={0}
          aria-live="polite"
        >
          {categories.map((category) => (
            <li key={category.id} role="listitem" className={styles.categoryCardWrapper}>
              <article
                className={styles.categoryCard}
                tabIndex={0}
                aria-label={`${category.name} category`}
              >
                <figure className={styles.imageWrapper}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className={styles.categoryImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className={styles.srOnly}>{category.name}</figcaption>
                </figure>

                <div className={styles.cardBody}>
                  <p className={styles.categoryName}>{category.name}</p>

                  <a
                    className={styles.whatsappButton}
                    href="https://wa.me/254796787207"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat about ${category.name} on WhatsApp`}
                  >
                    <MessageSquare aria-hidden />
                    <span className={styles.buttonText}>Chat a medic </span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.arrowButton}
          onClick={() => handleScroll("right")}
          aria-label="Scroll categories right"
        >
          <ChevronRight aria-hidden />
        </button>
      </div>
    </section>
  );
};

export default ShopByCategories;
