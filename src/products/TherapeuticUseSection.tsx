import React from "react";
import styles from "./TherapeuticUseSection.module.css";

// Import icons locally
import diabetesIcon from "../assets/conditions/chest-pain.png";
import feverInfectionIcon from "../assets/conditions/fever.png";
import vitaminsIcon from "../assets/system/vitamins.png";
import boneHealthIcon from "../assets/system/msk.png";
import womenCareIcon from "../assets/conditions/contraceptives.png";
import heartIcon from  "../assets/system/cardiac.png";

const TherapeuticUseSection: React.FC = () => {
  const categories = [
    { name: "Diabetes", icon: diabetesIcon, label: "Anti-Diabetics" },
    { name: "Fever & Infection", icon: feverInfectionIcon, label: "Anti-Infectives" },
    { name: "Vitamins", icon: vitaminsIcon, label: "Multivitamins" },
    { name: "Bone Health", icon: boneHealthIcon, label: "Pain Management" },
    { name: "Women Care", icon: womenCareIcon, label: "Feminine Care" },
    { name: "Heart", icon: heartIcon, label: "Cardiovascular" },
  ];

  const backgroundColors = [
    "var(--blue-bg)",
    "var(--yellow-bg)",
    "var(--green-bg)",
    "var(--brown-bg)",
    "var(--pink-bg)",
    "var(--red-bg)",
  ];

  return (
    <section
      className={styles.therapeuticUseSection}
      aria-labelledby="therapeutic-heading"
    >
      <h2 id="therapeutic-heading" className={styles.sectionTitle}>
        Shop by Therapeutic Use
      </h2>

      <div className={styles.categoriesGrid} role="list">
        {categories.map((category, index) => (
          <article
            key={category.name}
            className={styles.categoryCard}
            style={{ backgroundColor: backgroundColors[index] }}
            role="listitem"
            tabIndex={0}
            aria-label={category.name}
          >
            <h3 className={styles.categoryName}>{category.name}</h3>
            <div className={styles.categoryIconContainer}>
              <img
                src={category.icon}
                alt={`${category.name} icon`}
                className={styles.categoryIcon}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.categoryButtons}>
        {categories.map((category) => (
          <button
            key={category.label}
            className={styles.categoryButton}
            type="button"
            aria-label={`View ${category.label} products`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TherapeuticUseSection;
