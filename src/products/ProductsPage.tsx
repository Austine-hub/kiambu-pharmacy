// src/components/ProductsPage.tsx
import React from "react";
import styles from "./ProductsPage.module.css"

// Import your existing product-related components
import Pro2 from "../top/Pro2";
import ProductsGrid from "../top/ProductsGrid";
import PharmacyProductGrid from "../pages/PharmacyProductGrid";
import Products from "./Products";
import TherapeuticUseSection from "./TherapeuticUseSection";
import ProductGrid from "../pages/ProductGrid";

const ProductsPage: React.FC = () => {
  return (
    <div>
      <section>
        <h2 className={styles.title}>Best Selling Products</h2>
        <Pro2 />
      </section>

      <section>
        <TherapeuticUseSection />
      </section>

      <section>
        <h2>Top Products</h2>
        <PharmacyProductGrid />
      </section>

      <section>
        <h2>Featured Product Grid</h2>
        <ProductsGrid />
      </section>

     <section>
        <h2>Single Product Preview</h2>
        <Products />
      </section>
    </div>
  );
};

export default ProductsPage;
