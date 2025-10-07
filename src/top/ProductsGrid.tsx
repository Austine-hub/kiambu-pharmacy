import React from "react";
import styles from "./ProductsGrid.module.css";

interface Product {
  id: number;
  imageAlt: string;
  brand: string;
  description: string;
  price: number;
  placeholderColor: string;
  placeholderHeight: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    imageAlt: "Magnesium Chloride Injection Vial",
    brand: "Mylan",
    description: "Magnesium Chloride Injection 200 mg/mL, Multiple-Dose Vial 50 mL, Each",
    price: 37.84,
    placeholderColor: "#e0f7fa",
    placeholderHeight: "80%",
  },
  {
    id: 2,
    imageAlt: "Hylenex Recombinant Vial",
    brand: "Halozyme",
    description: "Hylenex Recombinant Hyaluronidase Human Injection 150 Unit/mL, Single-Dose Vial 1 mL",
    price: 328.44,
    placeholderColor: "#fce4ec",
    placeholderHeight: "75%",
  },
  {
    id: 3,
    imageAlt: "Sodium Chloride IV Solution Bag",
    brand: "B. Braun",
    description: "0.9% Sodium Chloride IV Solution Injection, 500 mL, ExcelfR Bag, Latex/PVC/DEHP Free",
    price: 113.17,
    placeholderColor: "#e8f5e9",
    placeholderHeight: "60%",
  },
  {
    id: 4,
    imageAlt: "Vitamin B-Complex Injection Bottle",
    brand: "Mylan",
    description: "Vitamin D Complex 100 Injection (with Dexpanthenol), Multiple-Dose Vial 30 mL, Each",
    price: 326.39,
    placeholderColor: "#fff3e0",
    placeholderHeight: "85%",
  },
  {
    id: 5,
    imageAlt: "Calcium Chloride Injection Vial",
    brand: "American Regent",
    description: "10% Calcium Chloride Injection 100 mg/mL, Single-Dose Vial 10 mL, Each",
    price: 35.17,
    placeholderColor: "#e3f2fd",
    placeholderHeight: "70%",
  },
  {
    id: 6,
    imageAlt: "Blood Control Peripheral IV Catheter",
    brand: "BD",
    description: "Insyte Autoguard Blood Control Peripheral IV Catheter, 22G x 1\" Blue Straight Hub",
    price: 159.2,
    placeholderColor: "#f3e5f5",
    placeholderHeight: "50%",
  },
];

const ProductsCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <div
        className={styles.productImage}
        style={{
          backgroundColor: product.placeholderColor,
          height: product.placeholderHeight,
          width: "auto",
          aspectRatio: "1 / 1.5",
          border: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          color: "#333",
          padding: "0.5rem",
        }}
      >
        {product.imageAlt}
      </div>
    </div>

    <div className={styles.productInfo}>
      <span className={styles.brandName}>{product.brand}</span>
      <p className={styles.productDescription}>{product.description}</p>
      <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
    </div>

    <button className={styles.addToCartButton} aria-label={`Add ${product.brand} to cart`}>
      🛒 Add to Cart
    </button>
  </div>
);

const ProductsGrid: React.FC = () => (
  <div className={styles.appContainer}>
    <header className={styles.header}>
      <h2 className={styles.title}>Bestsellers</h2>
      <div className={styles.navArrows}>
        <button aria-label="Scroll left">‹</button>
        <button aria-label="Scroll right">›</button>
      </div>
    </header>

    <div className={styles.cardWrapper}>
      {mockProducts.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductsGrid;

