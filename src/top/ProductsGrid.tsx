// src/components/products/ProductsGrid.tsx
import React, { useRef, useCallback } from "react";
import styles from "./ProductsGrid.module.css";

// Import images (ensure these paths match your project)
import image1 from "../assets/conditions/rhinitis.png";
import image2 from "../assets/conditions/cough.png";
import image3 from "../assets/conditions/sore-throat.png";
import image4 from "../assets/conditions/contraceptives.png";
import image5 from "../assets/conditions/headache.png";
import image6 from "../assets/conditions/fever.png";
import image7 from "../assets/conditions/myalgia.png";
import image8 from "../assets/conditions/chest-pain.png";
import image9 from "../assets/conditions/fatigue.png";

interface Product {
  id: number;
  image: string;
  imageAlt: string;
  brand: string;
  description: string;
  price: number;
  placeholderColor?: string;
  placeholderHeight?: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    image: image1,
    imageAlt: "Rhinitis treatment product",
    brand: "Mylan",
    description:
      "Magnesium Chloride Injection 200 mg/mL, Multiple-Dose Vial 50 mL, Each",
    price: 37.84,
    placeholderColor: "#e0f7fa",
    placeholderHeight: "84%",
  },
  {
    id: 2,
    image: image2,
    imageAlt: "Cough relief product",
    brand: "Halozyme",
    description:
      "Hylenex Recombinant Hyaluronidase Human Injection 150 Unit/mL, Single-Dose Vial 1 mL",
    price: 328.44,
    placeholderColor: "#fce4ec",
    placeholderHeight: "78%",
  },
  {
    id: 3,
    image: image3,
    imageAlt: "Sore throat remedy",
    brand: "B. Braun",
    description:
      "0.9% Sodium Chloride IV Solution Injection, 500 mL, ExcelfR Bag, Latex/PVC/DEHP Free",
    price: 113.17,
    placeholderColor: "#e8f5e9",
    placeholderHeight: "70%",
  },
  {
    id: 4,
    image: image4,
    imageAlt: "Contraceptives product",
    brand: "Mylan",
    description:
      "Vitamin D Complex 100 Injection (with Dexpanthenol), Multiple-Dose Vial 30 mL, Each",
    price: 326.39,
    placeholderColor: "#fff3e0",
    placeholderHeight: "86%",
  },
  {
    id: 5,
    image: image5,
    imageAlt: "Headache medicine",
    brand: "American Regent",
    description:
      "10% Calcium Chloride Injection 100 mg/mL, Single-Dose Vial 10 mL, Each",
    price: 35.17,
    placeholderColor: "#e3f2fd",
    placeholderHeight: "74%",
  },
  {
    id: 6,
    image: image6,
    imageAlt: "Fever care product",
    brand: "BD",
    description:
      'Insyte Autoguard Blood Control Peripheral IV Catheter, 22G x 1" Blue Straight Hub',
    price: 159.2,
    placeholderColor: "#f3e5f5",
    placeholderHeight: "66%",
  },
  {
    id: 7,
    image: image7,
    imageAlt: "Myalgia relief",
    brand: "BD",
    description:
      'Insyte Autoguard Blood Control Peripheral IV Catheter, 22G x 1" Blue Straight Hub',
    price: 159.2,
    placeholderColor: "#f3e5f5",
    placeholderHeight: "66%",
  },
  {
    id: 8,
    image: image8,
    imageAlt: "Chest pain care product",
    brand: "BD",
    description:
      'Insyte Autoguard Blood Control Peripheral IV Catheter, 22G x 1" Blue Straight Hub',
    price: 159.2,
    placeholderColor: "#f3e5f5",
    placeholderHeight: "66%",
  },
  {
    id: 9,
    image: image9,
    imageAlt: "Fatigue support product",
    brand: "BD",
    description:
      'Insyte Autoguard Blood Control Peripheral IV Catheter, 22G x 1" Blue Straight Hub',
    price: 159.2,
    placeholderColor: "#f3e5f5",
    placeholderHeight: "66%",
  },
];

const ProductsCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className={styles.card} aria-labelledby={`product-${product.id}-title`}>
      <div
        className={styles.imageContainer}
        style={{ backgroundColor: product.placeholderColor ?? "transparent" }}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          className={styles.productImage}
          loading="lazy"
          decoding="async"
          width={300}
          height={420}
        />
      </div>

      <div className={styles.productInfo}>
        <span className={styles.brandName}>{product.brand}</span>
        <h3 id={`product-${product.id}-title`} className={styles.productDescription}>
          {product.description}
        </h3>
        <div className={styles.metaRow}>
          <span className={styles.productPrice}>${product.price.toFixed(2)}</span>

          <button
            type="button"
            className={styles.addToCartButton}
            aria-label={`Add ${product.brand} to cart`}
          >
            <span aria-hidden>🛒</span> <span className={styles.buttonText}>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductsGrid: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = Math.max(el.clientWidth * 0.6, 300);
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.appContainer} aria-labelledby="bestsellers-heading">
      <header className={styles.header}>
        <h2 id="bestsellers-heading" className={styles.title}>
          Bestsellers
        </h2>

        <div className={styles.navArrows} role="toolbar" aria-label="Scroll products">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={styles.arrowButton}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={styles.arrowButton}
          >
            ›
          </button>
        </div>
      </header>

      <div
        className={styles.cardWrapper}
        ref={scrollerRef}
        role="list"
        aria-label="Product list"
        tabIndex={0}
      >
        {mockProducts.map((product) => (
          <div role="listitem" key={product.id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
