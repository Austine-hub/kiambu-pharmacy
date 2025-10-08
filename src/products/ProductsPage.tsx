// src/components/ProductsPage.tsx
import { memo } from "react";
import styles from "./ProductsPage.module.css";

// Import existing product-related components
import Pro2 from "../top/Pro2";
import ProductsGrid from "../top/ProductsGrid";
import PharmacyProductGrid from "../pages/PharmacyProductGrid";
import Products from "./Products";
import TherapeuticUseSection from "./TherapeuticUseSection";

const ProductsPage = () => {
  return (
    <main className={styles.container}>
      {/* Best Selling Section */}
      <section aria-labelledby="best-selling" className={styles.section}>
        <h2 id="best-selling" className={styles.title}>
          Best Selling Products
        </h2>
        <Pro2 />
      </section>

      {/* Therapeutic Use Section */}
      <section
        aria-labelledby="therapeutic-use"
        className={styles.sectionAlt}
      >
        <h2 id="therapeutic-use" className={styles.title}>
          Browse by Therapeutic Use
        </h2>
        <TherapeuticUseSection />
      </section>

      {/* Top Products Section */}
      <section aria-labelledby="top-products" className={styles.section}>
        <h2 id="top-products" className={styles.title}>
          Top Products
        </h2>
        <PharmacyProductGrid />
      </section>

      {/* Featured Grid Section */}
      <section aria-labelledby="featured-grid" className={styles.sectionAlt}>
        <h2 id="featured-grid" className={styles.title}>
          Featured Product Grid
        </h2>
        <ProductsGrid />
      </section>

      {/* Single Product Section */}
      <section aria-labelledby="single-product" className={styles.section}>
        <h2 id="single-product" className={styles.title}>
          Single Product Preview
        </h2>
        <Products />
      </section>
    </main>
  );
};

export default memo(ProductsPage);
