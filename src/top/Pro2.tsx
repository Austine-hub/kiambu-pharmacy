import React from "react";
import styles from "./Pro2.module.css";

// Local Images
import pic1 from "./../assets/drugs/cardiac/amlodipine.png";
import pic2 from "./../assets/drugs/cardiac/atenolol.png";
import pic3 from "./../assets/drugs/cardiac/atorvastatin.png";
import pic4 from "./../assets/drugs/cardiac/carvedilol.png";
import pic5 from "./../assets/drugs/cardiac/clonidine.png";
import pic6 from "./../assets/drugs/cardiac/ezetimibe.png";
import pic7 from "./../assets/drugs/cardiac/fenofibrate.png";
import pic8 from "./../assets/drugs/cardiac/furosemide.png";
import pic9 from "./../assets/drugs/cardiac/hydrochlorothiazide.png";
import pic10 from "./../assets/drugs/cardiac/lisinopril.png";
import pic11 from "./../assets/drugs/cardiac/losartan_HCTZ.png";
import pic12 from "./../assets/drugs/cardiac/Metoprolol.png";
import pic13 from "./../assets/drugs/cardiac/potassium-chloride.png";
import pic14 from "./../assets/drugs/cardiac/propranolol.png";
import pic15 from "./../assets/drugs/cardiac/spironolactone.png";

// --- 1. Types ---
interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

// --- 2. Mock Data ---
const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Amlodipine", imageUrl: pic1 },
  { id: 2, name: "Atenolol", imageUrl: pic2 },
  { id: 3, name: "Atorvastatin", imageUrl: pic3 },
  { id: 4, name: "Carvedilol", imageUrl: pic4 },
  { id: 5, name: "Clonidine", imageUrl: pic5 },
  { id: 6, name: "Ezetimibe", imageUrl: pic6 },
  { id: 7, name: "Fenofibrate", imageUrl: pic7 },
  { id: 8, name: "Furosemide", imageUrl: pic8 },
  { id: 9, name: "Hydrochlorothiazide", imageUrl: pic9 },
  { id: 10, name: "Lisinopril", imageUrl: pic10 },
  { id: 11, name: "Losartan + HCTZ", imageUrl: pic11 },
  { id: 12, name: "Metoprolol", imageUrl: pic12 },
  { id: 13, name: "Potassium Chloride", imageUrl: pic13 },
  { id: 14, name: "Propranolol", imageUrl: pic14 },
  { id: 15, name: "Spironolactone", imageUrl: pic15 },
];

// --- 3. Components ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className={styles.productCard}>
      <img
        src={product.imageUrl}
        alt={`${product.name} medication`}
        className={styles.productImage}
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/200x200/cccccc/333333?text=No+Image";
        }}
      />
      <h3 className={styles.productName}>{product.name}</h3>

      <a
        href="https://wa.me/254796787207"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButton}
        aria-label={`Chat about ${product.name} on WhatsApp`}
      >
        💬 Order on WhatsApp
      </a>
    </article>
  );
};

const ProductGridFooter: React.FC = () => {
    let totalPages = 5;
    let currentPage = 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <footer className={styles.footer}>
      <nav aria-label="Product Pagination">
        <ul className={styles.pagination}>
          <li>
            <button
              className={styles.pageLink}
              aria-label="Previous Page"
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>

          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                className={`${styles.pageLink} ${
                  page === currentPage ? styles.active : ""
                }`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          ))}

          <li>
            <button
              className={styles.pageLink}
              aria-label="Next Page"
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.perPageSelector}>
        <label htmlFor="itemsPerPage" className={styles.perPageLabel}>
          Show
        </label>
        <select id="itemsPerPage" defaultValue="24" aria-label="Items per page">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
        <span>per page</span>
      </div>
    </footer>
  );
};

// --- 4. Main Component ---
const Pro2: React.FC = () => {
  return (
    <section
      className={styles.productGridContainer}
      aria-labelledby="cardiac-drugs"
    >
      <h2 id="cardiac-drugs" className={styles.sectionTitle}>
        Cardiac Medications
      </h2>

      <div className={styles.grid}>
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductGridFooter />
    </section>
  );
};

export default Pro2;
