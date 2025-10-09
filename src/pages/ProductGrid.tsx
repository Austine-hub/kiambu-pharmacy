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
import image10 from "../assets/conditions/nigh-sweats.png";
import image11 from "../assets/conditions/diarrhea.png";

interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductGrid: React.FC = () => {
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
    <section className={styles.container} aria-labelledby="popular-title">
      <h2 id="popular-title" className={styles.title}>
        Most Popular Presentations
      </h2>

      <div className={styles.grid} role="list">
        {products.map((product) => (
          <article key={product.id} role="listitem" className={styles.card}>
            <figure className={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="sr-only">{product.name}</figcaption>

              <div className={styles.watermark} aria-hidden="true">
                <span>Kiambu Pharmacy</span>
                <span>Healthcare</span>
                <span>Trusted Care</span>
              </div>
            </figure>

            <h3 className={styles.productName}>{product.name}</h3>

            <a
              href="https://wa.me/254796787207"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              aria-label={`Consult a professional about ${product.name} via WhatsApp`}
            >
              <span>Consult Us</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
