import { useState, useMemo, memo } from "react";
import type { ReactElement } from "react";
import styles from "./WomenCare.module.css";

// -----------------------------
// 🔹 Types
// -----------------------------
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  badge?: string;
}

// -----------------------------
// 🔹 Main Component
// -----------------------------
const WomenCare = memo((): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 31;

  // ⚡ Example data (replace with API later)
  const products: Product[] = [
    {
      id: 1,
      name: "Fertisure F Tablet 10's",
      description: "Intas Pharmaceuticals Ltd",
      price: 285.5,
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Centrum Women Multivitamin, 50 Tablets",
      description: "Pfizer Ltd",
      price: 685,
      image:
        "https://images.unsplash.com/photo-1550572017-4b2a94b6e5d9?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Apollo Life Multivitamin for Women, 30 Tablets",
      description: "Apollo Pharmacy",
      price: 177.6,
      originalPrice: 192,
      discount: 8,
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=200&fit=crop",
    },
    {
      id: 4,
      name: "VWash Expert Intimate Hygiene Wash, 100 ml",
      description: "Bactolac Pharmaceutical",
      price: 170,
      originalPrice: 189,
      discount: 10,
      badge: "Buy 3, Get 5% OFF",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=200&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Stayfree Secure Cottony Soft Cover Pads XL, 7 Count",
      description: "Johnson & Johnson",
      price: 250.3,
      originalPrice: 278.11,
      discount: 10,
      badge: "Buy 2, Get 5% OFF",
      image:
        "https://images.unsplash.com/photo-1563620116-b1b0e83d8733?w=200&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Carefree Sanitary Pads Large, 10 Count",
      description: "Johnson & Johnson",
      price: 135,
      originalPrice: 150,
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1582274528667-1e8a10ded835?w=200&h=200&fit=crop",
    },
    {
      id: 7,
      name: "Pre PE Vanilla Mother's Nutrition Drink Powder, 200 gm",
      description: "Danone India",
      price: 618,
      image:
        "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=200&h=200&fit=crop",
    },
    {
      id: 8,
      name: "Horlicks Women's Plus Caramel Drink, 400 gm",
      description: "GlaxoSmithKline",
      price: 452.2,
      originalPrice: 503.55,
      discount: 10,
      badge: "Buy 3, Get 10% OFF",
      image:
        "https://images.unsplash.com/photo-1517093602405-2f18d2d880a4?w=200&h=200&fit=crop",
    },
  ];

  const handlePageChange = (page: number) => setCurrentPage(page);

  // -----------------------------
  // 🔹 Pagination Logic
  // -----------------------------
  const pagination = useMemo(() => {
    const buttons: ReactElement[] = [];
    const maxVisible = 7;
    const half = Math.floor(maxVisible / 2);

    const createButton = (page: number, label?: string) => (
      <button
        key={label || page}
        className={`${styles.paginationButton} ${
          currentPage === page ? styles.active : ""
        }`}
        onClick={() => handlePageChange(page)}
        aria-label={`Go to page ${page}`}
      >
        {label || page}
      </button>
    );

    if (currentPage > 1) buttons.push(createButton(currentPage - 1, "‹"));

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start + 1 < maxVisible) {
      if (start === 1) end = Math.min(totalPages, start + maxVisible - 1);
      else if (end === totalPages) start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      buttons.push(createButton(1));
      if (start > 2)
        buttons.push(
          <span key="dots-start" className={styles.dots}>
            …
          </span>
        );
    }

    for (let i = start; i <= end; i++) buttons.push(createButton(i));

    if (end < totalPages) {
      if (end < totalPages - 1)
        buttons.push(
          <span key="dots-end" className={styles.dots}>
            …
          </span>
        );
      buttons.push(createButton(totalPages));
    }

    if (currentPage < totalPages) buttons.push(createButton(currentPage + 1, "›"));

    return buttons;
  }, [currentPage, totalPages]);

  // -----------------------------
  // 🔹 Render
  // -----------------------------
  return (
    <section className={styles.container}>
      <div className={styles.productGrid}>
        {products.map(
          ({
            id,
            name,
            description,
            price,
            originalPrice,
            discount,
            image,
            badge,
          }) => (
            <article key={id} className={styles.productCard}>
              {badge && <span className={styles.badge}>{badge}</span>}
              <figure className={styles.imageWrapper}>
                <img
                  src={image}
                  alt={name}
                  className={styles.productImage}
                  loading="lazy"
                />
              </figure>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{name}</h3>
                <p className={styles.productDescription}>{description}</p>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>₹{price.toFixed(2)}</span>
                  {originalPrice && (
                    <>
                      <span className={styles.originalPrice}>
                        MRP ₹{originalPrice.toFixed(2)}
                      </span>
                      {discount && (
                        <span className={styles.discount}>{discount}% off</span>
                      )}
                    </>
                  )}
                </div>
                <button
                  className={styles.addButton}
                  aria-label={`Add ${name} to cart`}
                >
                  Add
                </button>
              </div>
            </article>
          )
        )}
      </div>
      <nav className={styles.pagination} aria-label="Pagination Navigation">
        {pagination}
      </nav>
    </section>
  );
});

WomenCare.displayName = "WomenCare";

export default WomenCare;
