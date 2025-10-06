import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // modern icons
import styles from "./ShopByCategories.module.css";


// Local Images (add more as needed)
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

const ShopByCategories: React.FC = () => {
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
