import React, { useState } from "react";
import styles from "./Products.module.css";

// ✅ Import images (ensure your paths match)
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
  name: string;
  image: string;
}

const Products: React.FC = () => {
  const [sortBy, setSortBy] = useState("default");

  const products: Product[] = [
    { id: 1, name: "Azuchim Cream", image: image1 },
    { id: 2, name: "Azuchim Cream", image: image2 },
    { id: 3, name: "Albendazole Tablets", image: image3 },
    { id: 4, name: "Albendazole Cream", image: image4 },
    { id: 5, name: "Alcoswift Lotion", image: image5 },
    { id: 6, name: "Amipan Vedova Energy Drink", image: image7 },
    { id: 7, name: "Amlodipine Hydrochloride", image: image8 },
    { id: 8, name: "Amlodipine Norplne Tablets", image: image9 },
    { id: 9, name: "Amox Acid Syrup", image: image1 },
    { id: 10, name: "Amen-Acet & Lutes", image: image2 },
    { id: 11, name: "Aspirin Tablet", image: image3 },
    { id: 12, name: "Astyrin Tablets", image: image4 },
    { id: 13, name: "Alendryl Tablets 250 mg 6", image: image5 },
    { id: 14, name: "Altacarzine", image: image6 },
    { id: 15, name: "Baby Laza Coco Water", image: image8 },
    { id: 16, name: "Baclofen Ointment", image: image9 },
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <main className={styles.container}>
      {/* --- Header --- */}
      <header className={styles.header}>
        <h1>All Products</h1>
      </header>

      {/* --- Filter + Sort Section --- */}
      <section className={styles.controls} aria-label="Product filters and sorting">
        <div className={styles.searchInfo}>
          <span aria-hidden="true" className={styles.searchIcon}>🔍</span>
          <span className={styles.searchText}>Showing 1–16 of 131 results</span>
        </div>

        <div className={styles.sortWrapper}>
          <label htmlFor="sort" className={styles.visuallyHidden}>
            Sort Products
          </label>
          <select
            id="sort"
            className={styles.sortSelect}
            value={sortBy}
            onChange={handleSortChange}
            aria-label="Sort products by"
          >
            <option value="default">Default sorting</option>
            <option value="name">Sort by name</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </section>

      {/* --- Product Grid --- */}
      <section className={styles.grid} aria-label="Product list">
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <figure className={styles.image}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className={styles.productImage}
              />
            </figure>
            <h3 className={styles.name}>{product.name}</h3>
            <button className={styles.btn} aria-label={`Read more about ${product.name}`}>
              Read more
            </button>
          </article>
        ))}
      </section>

      {/* --- Pagination --- */}
      <nav
        className={styles.pagination}
        aria-label="Product pagination navigation"
      >
        <button className={styles.pageBtn} aria-current="page">1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>4</button>
        <button className={styles.pageBtn} aria-label="Next page">
          →
        </button>
      </nav>
    </main>
  );
};

export default Products;
