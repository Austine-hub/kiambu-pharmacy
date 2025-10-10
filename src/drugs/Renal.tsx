import React, { useMemo, useState } from "react";
import styles from "./Renal.module.css";

// --- Local Images (kept as-is) ---
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

// --- 2. Mock Data (Renal Drugs) ---
const RENAL_PRODUCTS: Product[] = [
  { id: 1, name: "Furosemide", imageUrl: pic8 },
  { id: 2, name: "Bumetanide", imageUrl: pic1 },
  { id: 3, name: "Torsemide", imageUrl: pic2 },
  { id: 4, name: "Hydrochlorothiazide", imageUrl: pic9 },
  { id: 5, name: "Spironolactone", imageUrl: pic15 },
  { id: 6, name: "Eplerenone", imageUrl: pic3 },
  { id: 7, name: "Lisinopril", imageUrl: pic10 },
  { id: 8, name: "Losartan", imageUrl: pic11 },
  { id: 9, name: "Irbesartan", imageUrl: pic12 },
  { id: 10, name: "Valsartan", imageUrl: pic4 },
  { id: 11, name: "Dapagliflozin (Farxiga)", imageUrl: pic5 },
  { id: 12, name: "Empagliflozin (Jardiance)", imageUrl: pic6 },
  { id: 13, name: "Sevelamer Carbonate (Renvela)", imageUrl: pic7 },
  { id: 14, name: "Sodium Bicarbonate", imageUrl: pic13 },
  { id: 15, name: "Calcitriol", imageUrl: pic14 },
];

// --- Utility: normalize Kenyan phone to international (basic) ---
const normalizeKenyaPhone = (raw: string) => {
  const digits = raw.replace(/\D/g, "");
  // if starts with 0 -> replace with 254
  if (digits.length === 10 && digits.startsWith("0")) {
    return `254${digits.slice(1)}`;
  }
  // already international
  return digits;
};

// --- Product Card ---
const ProductCard: React.FC<{ product: Product; whatsappPhone: string }> = React.memo(
  ({ product, whatsappPhone }) => {
    const handleWhatsAppOrder = () => {
      const message = `Hello, I'd like to order ${product.name}. Please advise price & availability.`;
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
        message
      )}`;
      // open in a safe new tab, avoid opener vulnerability
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
      <article className={styles.productCard} aria-labelledby={`p-${product.id}`}>
        <div className={styles.imageWrap}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className={styles.productImage}
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/300x200/cccccc/555?text=No+Image";
            }}
          />
        </div>

        <h3 id={`p-${product.id}`} className={styles.productName}>
          {product.name}
        </h3>

        <div className={styles.cardActions}>
          <button
            type="button"
            className={styles.orderButton}
            onClick={handleWhatsAppOrder}
            aria-label={`Order ${product.name} via WhatsApp`}
          >
            Order via WhatsApp
          </button>
        </div>
      </article>
    );
  }
);
ProductCard.displayName = "ProductCard";

// --- Footer: Pagination + Selector (stateful & accessible) ---
const ProductGridFooter: React.FC<{
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (n: number) => void;
}> = ({ totalItems, itemsPerPage, currentPage, onPageChange, onItemsPerPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const pageNumbers = useMemo(() => {
    // simple windowed pagination: show up to 5 pages centered around current
    const windowSize = 5;
    const start = Math.max(1, currentPage - Math.floor(windowSize / 2));
    const end = Math.min(totalPages, start + windowSize - 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [totalPages, currentPage]);

  return (
    <footer className={styles.footer} aria-label="Products navigation">
      <nav aria-label="Pagination">
        <ul className={styles.pagination}>
          <li>
            <button
              type="button"
              className={styles.pageLink}
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ‹
            </button>
          </li>

          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                type="button"
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
              type="button"
              className={styles.pageLink}
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              ›
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.perPageSelector}>
        <label htmlFor="itemsPerPage" className={styles.srOnly}>
          Items per page
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          aria-label="Items per page"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
      </div>
    </footer>
  );
};

// --- Main Component ---
const Renal: React.FC = () => {
  // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Normalize the user's WhatsApp phone (input given: 0796787207)
  const whatsappPhone = normalizeKenyaPhone("0796787207");

  const totalItems = RENAL_PRODUCTS.length;

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return RENAL_PRODUCTS.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  // If itemsPerPage changes, reset to first page to avoid empty pages
  const handleItemsPerPageChange = (n: number) => {
    setItemsPerPage(n);
    setCurrentPage(1);
  };

  return (
    <section className={styles.productGridContainer} aria-labelledby="renal-title">
      <h2
        id="renal-title"
        className={`${styles.title} ${styles.center}`}
        tabIndex={0}
        aria-level={2}
      >
        Top Prescribed Renal Medications in the U.S.
      </h2>

      <p className={styles.lead} id="renal-intro">
        Quick list of commonly prescribed medications used in renal and cardiorenal care. Use the
        "Order via WhatsApp" button on any product to contact our pharmacy directly.
      </p>

      <div className={styles.grid} role="list" aria-labelledby="renal-title">
        {pagedProducts.map((product) => (
          <div role="listitem" key={product.id}>
            <ProductCard product={product} whatsappPhone={whatsappPhone} />
          </div>
        ))}
      </div>

      <ProductGridFooter
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </section>
  );
};

export default Renal;
