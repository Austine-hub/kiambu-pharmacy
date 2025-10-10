// src/components/products/ProductsGrid.tsx
import React, { useRef, useCallback, memo } from "react";
import styles from "./ProductsGrid.module.css";

import image1 from "../assets/conditions/rhinitis.png";
import image2 from "../assets/conditions/cough.png";
import image3 from "../assets/conditions/sore-throat.png";
import image4 from "../assets/conditions/contraceptives.png";
import image5 from "../assets/conditions/headache.png";
import image6 from "../assets/conditions/fever.png";
import image7 from "../assets/conditions/myalgia.png";
import image8 from "../assets/conditions/chest-pain.png";
import image9 from "../assets/conditions/fatigue.png";

/**
 * NOTE:
 * - phoneNumber: from your previous message in this conversation: 0796787207 -> E.164: +254796787207
 * - exchangeRate: 129.23 (USD -> KSh) used for the conversion in this mock dataset.
 *   This is time-sensitive; double-check with your preferred FX provider in production.
 */
const PHONE_NUMBER_E164 = "254796787207"; // wa.me requires no +, no leading zeros

interface Product {
  id: number;
  image?: string;
  imageAlt: string;
  brand: string;
  description: string;
  priceKES: number;
  boxes: number;
  placeholderColor?: string;
}

const formatKES = (value: number) =>
  value.toLocaleString("en-KE", { style: "currency", currency: "KES", minimumFractionDigits: 0 });

/* Top-30-like product list (names sourced from recent prescription lists, used as display/descriptions).
   Prices here are example converted values (USD -> KSh @ ~129.23). Update with real costs where available.
*/
const mockProducts: Product[] = [
  { id: 1, image: image1, imageAlt: "Rhinitis product", brand: "Mylan", description: "Atorvastatin (Lipitor)", priceKES: 4887, boxes: 1, placeholderColor: "#e0f7fa" },
  { id: 2, image: image2, imageAlt: "Cough product", brand: "Halozyme", description: "Levothyroxine", priceKES: 42454, boxes: 1, placeholderColor: "#fce4ec" },
  { id: 3, image: image3, imageAlt: "Sore throat", brand: "B. Braun", description: "Metformin", priceKES: 14622, boxes: 1, placeholderColor: "#e8f5e9" },
  { id: 4, image: image4, imageAlt: "Contraceptives", brand: "Mylan", description: "Lisinopril", priceKES: 42154, boxes: 1, placeholderColor: "#fff3e0" },
  { id: 5, image: image5, imageAlt: "Headache", brand: "American Regent", description: "Amlodipine", priceKES: 4540, boxes: 1, placeholderColor: "#e3f2fd" },
  { id: 6, image: image6, imageAlt: "Fever", brand: "BD", description: "Metoprolol", priceKES: 20566, boxes: 1, placeholderColor: "#f3e5f5" },
  { id: 7, image: image7, imageAlt: "Myalgia", brand: "BD", description: "Gabapentin", priceKES: 20566, boxes: 1, placeholderColor: "#f3e5f5" },
  { id: 8, image: image8, imageAlt: "Chest pain", brand: "BD", description: "Losartan", priceKES: 20566, boxes: 1, placeholderColor: "#f3e5f5" },
  { id: 9, image: image9, imageAlt: "Fatigue", brand: "BD", description: "Omeprazole", priceKES: 20566, boxes: 1, placeholderColor: "#f3e5f5" },

  /* remaining (placeholder images) — replace `image` with per-product images when you have them */
  { id: 10, image: image1, imageAlt: "Product image", brand: "Generic", description: "Amoxicillin", priceKES: 6462, boxes: 1 },
  { id: 11, image: image2, imageAlt: "Product image", brand: "Generic", description: "Sertraline", priceKES: 3231, boxes: 1 },
  { id: 12, image: image3, imageAlt: "Product image", brand: "Generic", description: "Albuterol", priceKES: 1616, boxes: 1 },
  { id: 13, image: image4, imageAlt: "Product image", brand: "Generic", description: "Ibuprofen", priceKES: 1161, boxes: 1 },
  { id: 14, image: image5, imageAlt: "Product image", brand: "Generic", description: "Hydrocodone/Acetaminophen", priceKES: 646, boxes: 1 },
  { id: 15, image: image6, imageAlt: "Product image", brand: "Generic", description: "Levocetirizine / Allergy meds", priceKES: 2584, boxes: 1 },
  { id: 16, image: image7, imageAlt: "Product image", brand: "Generic", description: "Prednisone", priceKES: 5815, boxes: 1 },
  { id: 17, image: image8, imageAlt: "Product image", brand: "Generic", description: "Cetirizine", priceKES: 7754, boxes: 1 },
  { id: 18, image: image9, imageAlt: "Product image", brand: "Generic", description: "Pantoprazole", priceKES: 15508, boxes: 1 },
  { id: 19, image: image1, imageAlt: "Product image", brand: "Generic", description: "Prednisolone", priceKES: 1938, boxes: 1 },
  { id: 20, image: image2, imageAlt: "Product image", brand: "Generic", description: "Clopidogrel", priceKES: 1291, boxes: 1 },
  { id: 21, image: image3, imageAlt: "Product image", brand: "Generic", description: "Duloxetine", priceKES: 452, boxes: 1 },
  { id: 22, image: image4, imageAlt: "Product image", brand: "Generic", description: "Tramadol", priceKES: 323, boxes: 1 },
  { id: 23, image: image5, imageAlt: "Product image", brand: "Generic", description: "Prednisone (alt)", priceKES: 9692, boxes: 1 },
  { id: 24, image: image6, imageAlt: "Product image", brand: "Generic", description: "Empagliflozin", priceKES: 23261, boxes: 1 },
  { id: 25, image: image7, imageAlt: "Product image", brand: "Generic", description: "Carvedilol", priceKES: 1292, boxes: 1 },
  { id: 26, image: image8, imageAlt: "Product image", brand: "Generic", description: "Hydroxyzine", priceKES: 2843, boxes: 1 },
  { id: 27, image: image9, imageAlt: "Product image", brand: "Generic", description: "Famotidine", priceKES: 5169, boxes: 1 },
  { id: 28, image: image1, imageAlt: "Product image", brand: "Generic", description: "Insulin Glargine", priceKES: 10985, boxes: 1 },
  { id: 29, image: image2, imageAlt: "Product image", brand: "Generic", description: "Ibuprofen (alt)", priceKES: 25846, boxes: 1 },
  { id: 30, image: image3, imageAlt: "Product image", brand: "Generic", description: "Amoxicillin (alt)", priceKES: 3877, boxes: 1 },
];

type ProductsCardProps = {
  product: Product;
};

const ProductsCard: React.FC<ProductsCardProps> = memo(({ product }) => {
  const handleWhatsAppOrder = () => {
    const msg = `Hello, I'd like to order: ${product.description} (Product ID: ${product.id}). Qty (boxes): ${product.boxes}. Please confirm availability and total price (${formatKES(
      product.priceKES
    )}).`;
    const url = `https://wa.me/${PHONE_NUMBER_E164}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className={styles.card}
      aria-labelledby={`product-${product.id}-title`}
      tabIndex={0}
    >
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
          <div>
            <div className={styles.productPrice} aria-hidden>
              {formatKES(product.priceKES)}
            </div>
            <div className={styles.boxesLabel}>Boxes: {product.boxes}</div>
          </div>

          <button
            type="button"
            className={styles.whatsappButton}
            onClick={handleWhatsAppOrder}
            aria-label={`Order ${product.description} via WhatsApp`}
            title="Order via WhatsApp"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M... (svg path omitted for brevity)" fill="currentColor" />
            </svg>
            <span className={styles.buttonText}>Order</span>
          </button>
        </div>
      </div>
    </article>
  );
});

ProductsCard.displayName = "ProductsCard";

const ProductsGrid: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const distance = Math.max(el.clientWidth * 0.6, 300);
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
    // Move focus to the container for better keyboard UX
    el.focus();
  }, []);

  return (
    <section className={styles.appContainer} aria-labelledby="bestsellers-heading">
      <header className={styles.header}>
        <h2 id="bestsellers-heading" className={styles.title}>
          Top Prescribed — 30 Products
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
        {mockProducts.map((p) => (
          <div role="listitem" key={p.id}>
            <ProductsCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
