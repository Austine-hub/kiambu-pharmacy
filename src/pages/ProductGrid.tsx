import React from "react";
import styles from "./ProductGrid.module.css";

// Import images
import whatsapp1 from "../assets/whatsapp/whatsapp1.png";
import whatsapp3 from "../assets/whatsapp/whatsapp3.png";
import consultation1 from "../assets/consultation/consultation1.png";

// Define the product type
interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductGrid: React.FC = () => {
  // Reuse existing images — avoids unnecessary imports
  const products: Product[] = [
    { id: 1, name: "Runny nose / Nasal congestion", image: whatsapp1 },
    { id: 2, name: "Cough", image: whatsapp3 },
    { id: 3, name: "Sore Throat Medicine", image: consultation1 },
    { id: 4, name: "Contraceptives", image: whatsapp1 },
    { id: 5, name: "Headache / Head pain", image: whatsapp3 },
    { id: 6, name: "Fever / Hotness of the Body", image: consultation1 },
    { id: 7, name: "Muscle / Body aches (Myalgia)", image: whatsapp1 },
    { id: 8, name: "Chest pain", image: whatsapp3 },
    { id: 9, name: "Fatigue / Lack of energy", image: consultation1 },
    { id: 10, name: "Night sweats / Chills", image: whatsapp3 },
    { id: 11, name: "Diarrhea", image: consultation1 },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Most Popular Products</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.watermark}>
                <span>WATERMARK</span>
                <span>WATERMARK</span>
                <span>WATERMARK</span>
              </div>
            </div>

            <h3 className={styles.productName}>{product.name}</h3>
            <button className={styles.button} aria-label={`Get quote for ${product.name}`}>
              Get a Price / Quote
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
