// Resp.tsx
import React, { useMemo, useState, useCallback } from "react";
import styles from "./Resp.module.css";

// --- 1. Local Images (unchanged imports) ---
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

// --- 2. Types ---
interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

// --- 3. Product list (kept local imports) ---
const RESPIRATORY_DRUGS: Product[] = [
  { id: 1, name: "Albuterol (Ventolin, ProAir)", imageUrl: pic1 },
  { id: 2, name: "Fluticasone (Flovent, Arnuity)", imageUrl: pic2 },
  { id: 3, name: "Montelukast (Singulair)", imageUrl: pic3 },
  { id: 4, name: "Budesonide/Formoterol (Symbicort)", imageUrl: pic4 },
  { id: 5, name: "Tiotropium (Spiriva)", imageUrl: pic5 },
  { id: 6, name: "Ipratropium (Atrovent)", imageUrl: pic6 },
  { id: 7, name: "Salmeterol/Fluticasone (Advair)", imageUrl: pic7 },
  { id: 8, name: "Theophylline", imageUrl: pic8 },
  { id: 9, name: "Prednisone", imageUrl: pic9 },
  { id: 10, name: "Mometasone (Asmanex)", imageUrl: pic10 },
  { id: 11, name: "Formoterol", imageUrl: pic11 },
  { id: 12, name: "Cromolyn Sodium", imageUrl: pic12 },
  { id: 13, name: "Omalizumab (Xolair)", imageUrl: pic13 },
  { id: 14, name: "Levalbuterol (Xopenex)", imageUrl: pic14 },
  { id: 15, name: "Roflumilast (Daliresp)", imageUrl: pic15 },
];

// --- 4. Helpers ---
const PHONE_INTERNATIONAL = "254796787207"; // 0796787207 -> +254796787207

const buildWhatsAppHref = (productName: string) => {
  const text = `Hello, I would like to order: ${productName}. Please advise on availability and price. - Kiambu Pharmacy`;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${PHONE_INTERNATIONAL}?text=${encoded}`;
};

// --- 5. Product Card ---
const ProductCard: React.FC<{ product: Product }> = React.memo(({ product }) => {
  const href = useMemo(() => buildWhatsAppHref(product.name), [product.name]);

  return (
    <article className={styles.productCard} aria-labelledby={`drug-${product.id}`}>
      <figure className={styles.figure}>
        <img
          src={product.imageUrl}
          alt={`${product.name} packaging`}
          className={styles.productImage}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/300x200/eee/777?text=No+Image";
          }}
        />
        <figcaption className={styles.srOnly}>{product.name}</figcaption>
      </figure>

      <h3 id={`drug-${product.id}`} className={styles.productName} title={product.name}>
        {product.name}
      </h3>

      <a
        className={styles.orderButton}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Order ${product.name} via WhatsApp`}
      >
        <span aria-hidden>📱</span>
        <span>Order via WhatsApp</span>
      </a>
    </article>
  );
});

// --- 6. Grid Footer (pagination + per-page) ---
const ProductGridFooter: React.FC<{
  totalItems: number;
  currentPage: number;
  perPage: number;
  onPageChange: (p: number) => void;
  onPerPageChange: (n: number) => void;
}> = ({ totalItems, currentPage, perPage, onPageChange, onPerPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.footer} aria-label="Pagination Navigation">
      <ul className={styles.pagination}>
        <li>
          <button
            className={`${styles.pageLink} ${styles.navArrow}`}
            aria-label="Previous Page"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`${styles.pageLink} ${page === currentPage ? styles.active : ""}`}
              aria-current={page === currentPage ? "page" : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className={`${styles.pageLink} ${styles.navArrow}`}
            aria-label="Next Page"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </li>
      </ul>

      <div className={styles.perPageSelector}>
        <label htmlFor="itemsPerPage" className={styles.srOnly}>
          Items per page
        </label>
        <span>Show</span>
        <select
          id="itemsPerPage"
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          aria-label="Items per page"
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
        <span>per page</span>
      </div>
    </nav>
  );
};

// --- 7. Main Component ---
const Resp: React.FC = () => {
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESPIRATORY_DRUGS;
    return RESPIRATORY_DRUGS.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const totalItems = filtered.length;
  const start = (currentPage - 1) * perPage;
  const paged = useMemo(() => filtered.slice(start, start + perPage), [filtered, start, perPage]);

  const handlePerPageChange = useCallback((n: number) => {
    setPerPage(n);
    setCurrentPage(1);
  }, []);

  return (
    <section className={styles.productGridContainer} aria-labelledby="respiratory-heading">
      <header className={styles.headerRow}>
        <h2 id="respiratory-heading" className={styles.sectionTitle}>
          Top Respiratory Medications
        </h2>

        <div className={styles.tools}>
          <label htmlFor="search" className={styles.srOnly}>
            Search medications
          </label>
          <input
            id="search"
            className={styles.searchInput}
            type="search"
            placeholder="Search medication..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search medications"
          />

          <div aria-live="polite" className={styles.count}>
            {totalItems} result{totalItems !== 1 ? "s" : ""}
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        {paged.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductGridFooter
        totalItems={totalItems}
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={setCurrentPage}
        onPerPageChange={handlePerPageChange}
      />
    </section>
  );
};

export default Resp;
