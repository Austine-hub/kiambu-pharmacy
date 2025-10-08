
import React from "react";
import styles from "./DrugsWrapper.module.css";

// Import product-related components
import Pro2 from "../top/Pro2";
import ProductsGrid from "../top/ProductsGrid";
import PharmacyProductGrid from "../pages/PharmacyProductGrid";
import Products from "../products/Products";
import Resp from "./Resp";
import Renal from "./Renal";

const DrugsWrapper: React.FC = () => {
  const sections = [
    { title: "Heart Drugs", component: <Pro2 /> },
    { title: "Respiratory Drugs", component: <Resp /> },
    { title: "Gastrointestinal Drugs", component: <Resp /> }, // Replace with Gastro component when available
    { title: "Renal Drugs", component: <Renal /> },
    { title: "CNS Drugs", component: <Renal /> }, // Replace with CNS component when ready
  ];

  return (
    <div className={styles.container}>
      {sections.map(({ title, component }, idx) => (
        <section key={idx} className={styles.section}>
          <h2 className={styles.title}>{title}</h2>
          {component}
        </section>
      ))}

      <section className={styles.section}>
        <h2 className={styles.title}>Top Products</h2>
        <PharmacyProductGrid />
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Featured Product Grid</h2>
        <ProductsGrid />
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Single Product Preview</h2>
        <Products />
      </section>
    </div>
  );
};

export default DrugsWrapper;
