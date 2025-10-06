import React from "react";
import styles from "./ProductGrid.module.css";

// Import images
import image1 from "../assets/conditions/rhinitis.png";
import image2 from "../assets/conditions/cough.png";
import image3 from "../assets/conditions/sore-throat.png";
import image4 from "../assets/conditions/contraceptives.png";
import image5 from "../assets/conditions/headache.png";
import image6 from "../assets/conditions/fever.png";
import image7 from "../assets/conditions/myalgia.png";
import image8 from "../assets/conditions/chest-pain.png";
import image9 from "../assets/conditions/fatigue.png";
//import image9 from "../assets/whatsapp/whatsapp1.png";
import image10 from "../assets/conditions/nigh-sweats.png";
import image11 from "../assets/conditions/diarrhea.png";
//import consultation1 from "../assets/consultation/consultation1.png";
//import whatsapp1 from "../assets/whatsapp/whatsapp1.png";
//import whatsapp3 from "../assets/whatsapp/whatsapp3.png";
//import consultation1 from "../assets/consultation/consultation1.png";
//import whatsapp1 from "../assets/whatsapp/whatsapp1.png";
//import whatsapp3 from "../assets/whatsapp/whatsapp3.png";
//import consultation1 from "../assets/consultation/consultation1.png";


// Define the product type
interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductGrid: React.FC = () => {
  // Reuse existing images — avoids unnecessary imports
  const products: Product[] = [
    { id: 1, name: "Runny nose / Nasal congestion", image: image1 },
    { id: 2, name: "Cough", image: image2 },
    { id: 3, name: "Sore Throat Medicine", image: image3 },
    { id: 4, name: "Contraceptives", image: image4 },
    { id: 5, name: "Headache / Head pain", image: image5 },
    { id: 6, name: "Fever / Hotness of the Body", image: image6 },
    { id: 7, name: "Muscle / Body aches (Myalgia)", image: image7 },
    { id: 8, name: "Chest pain", image: image8 },
    { id: 9, name: "Fatigue / Lack of energy", image: image9 },
    { id: 10, name: "Night sweats / Chills", image: image10 },
    { id: 11, name: "Diarrhea", image: image11 },
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
