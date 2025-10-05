import React, { useState } from "react";
import styles from "./Products.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
}

const Products: React.FC = () => {
  const [sortBy, setSortBy] = useState("default");

  const products: Product[] = [
    { id: 1, name: "Azuchim Cream", image: "🧴" },
    { id: 2, name: "Azuchim Cream", image: "🧴" },
    { id: 3, name: "Albendazole Tablets", image: "💊" },
    { id: 4, name: "Albendazole cream", image: "🧴" },
    { id: 5, name: "Alcoswift Lotion", image: "🧴" },
    { id: 6, name: "Amipan Vedova Energy Drink", image: "🥤" },
    { id: 7, name: "Amlodipine Hydrochloride", image: "💊" },
    { id: 8, name: "Amlodipine Norplne Tablets", image: "💊" },
    { id: 9, name: "Amox Acid Syrup", image: "🧴" },
    { id: 10, name: "Amen-Acet & Lutes", image: "💊" },
    { id: 11, name: "Asprin Tablet", image: "💊" },
    { id: 12, name: "Astyrin Tablets", image: "💊" },
    { id: 13, name: "Alendryl Tablets 250 mg 6", image: "💊" },
    { id: 14, name: "Altacarzine", image: "💊" },
    { id: 15, name: "Baby Laza Coco Water", image: "🍼" },
    { id: 16, name: "Baclofen Ointment", image: "🧴" },
  ];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>All Products</h1>
      </header>

      <section className={styles.controls}>
        <div className={styles.searchInfo}>
          <span className={styles.searchIcon}>🔍</span>
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
          >
            <option value="default">Default sorting</option>
            <option value="name">Sort by name</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </section>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.image}>
              <span className={styles.icon}>{product.image}</span>
            </div>
            <h3 className={styles.name}>{product.name}</h3>
            <button className={styles.btn}>Read more</button>
          </div>
        ))}
      </div>

      <nav className={styles.pagination}>
        <button className={styles.pageBtn}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>4</button>
        <button className={styles.pageBtn}>→</button>
      </nav>
    </div>
  );
};

export default Products;
