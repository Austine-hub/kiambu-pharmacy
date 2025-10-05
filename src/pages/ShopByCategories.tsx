import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // modern icons
import styles from "./ShopByCategories.module.css";

interface Category {
  id: string;
  name: string;
  image: string;
}

const ShopByCategories: React.FC = () => {
  const categories: Category[] = [
    { id: "1", name: "Must haves", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&h=200&fit=crop" },
    { id: "2", name: "Skin care", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop" },
    { id: "3", name: "Heart care", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop" },
    { id: "4", name: "Vitamins & supplements", image: "https://images.unsplash.com/photo-1550572017-4a6f6857e80e?w=200&h=200&fit=crop" },
    { id: "5", name: "Homeopathy care", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=200&h=200&fit=crop" },
    { id: "6", name: "Ayurvedic care", image: "https://images.unsplash.com/photo-1609840114035-3c981c6d3c94?w=200&h=200&fit=crop" },
    { id: "7", name: "Sports nutrition", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&h=200&fit=crop" },
    { id: "8", name: "Health food & drinks", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&h=200&fit=crop" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll every 8 seconds
  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;
    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    }, 8000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const scroll = (direction: "left" | "right") => {
    setAutoScroll(false);
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -250 : 250;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container} aria-labelledby="shop-by-categories">
      <h2 id="shop-by-categories" className={styles.title}>
        Shop by Categories
      </h2>

      <div className={styles.carousel}>
        <button
          className={styles.arrowButton}
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>

        <div ref={scrollRef} className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard} tabIndex={0}>
              <div className={styles.imageWrapper}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.categoryImage}
                  loading="lazy"
                />
              </div>
              <p className={styles.categoryName}>{category.name}</p>
            </div>
          ))}
        </div>

        <button
          className={styles.arrowButton}
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ShopByCategories;
