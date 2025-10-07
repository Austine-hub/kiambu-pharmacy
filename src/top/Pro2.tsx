import React from "react";
import styles from "./Pro2.module.css";

// --- 1. Types ---
interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

// --- 2. Mock Data ---
const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "Dr. Jill's Arch Snapper (3/4\" Arch Support)", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+1" },
  { id: 2, name: "Dr. Jill's Suede Adjustable Crest Pads (4pk)", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+2" },
  { id: 3, name: "Dr. Jill's Premier All Gel Heel Cups", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+3" },
  { id: 4, name: "Dr. Jill's Gel Dancer's Pads", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+4" },
  { id: 5, name: "Dr. Jill's Tailor's Bunion Pad", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+5" },
  { id: 6, name: "Dr. Jill's Gel Crest Pads", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+6" },
  { id: 7, name: "Dr. Jill's Gel Bunion w/loop", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+7" },
  { id: 8, name: "Dr. Jill's Poron Blue Met Pad", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+8" },
  { id: 9, name: "Dr. Jill's Premier Gel Bunion Pads w/loop (3pk)", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+9" },
  { id: 10, name: "Dr. Jill's Premier Gel Hourglass Tapered Toe Separator (Extra Wide) (4pk)", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+10" },
  { id: 11, name: "Dr. Jill's Premier Gel Adjustable Metatarsal Cushion/Crest Pad, P-6", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+11" },
  { id: 12, name: "Darco All Purpose Boot", imageUrl: "https://placehold.co/150x150/ffffff/000?text=Product+12" },
];

// --- 3. Components ---
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const handleOrderClick = () => {
    console.log(`Ordering: ${product.name}`);
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.productImage}
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://placehold.co/150x150/ccc/333?text=No+Image";
        }}
      />
      <h3 className={styles.productName}>{product.name}</h3>
      <button className={styles.orderButton} onClick={handleOrderClick}>
        Log In To Order
      </button>
    </div>
  );
};

const ProductGridFooter: React.FC = () => {
  const totalPages = 5;
  const currentPage = 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.footer}>
      <ul className={styles.pagination}>
        <li>
          <button className={`${styles.pageLink} ${styles.navArrow}`} aria-label="Previous Page">
            &lt;
          </button>
        </li>

        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`${styles.pageLink} ${page === currentPage ? styles.active : ""}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button className={`${styles.pageLink} ${styles.navArrow}`} aria-label="Next Page">
            &gt;
          </button>
        </li>
      </ul>

      <div className={styles.perPageSelector}>
        <span>Show</span>
        <select defaultValue="24" aria-label="Items per page">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
        <span>per page</span>
      </div>
    </div>
  );
};

// --- 4. Main Component ---
const Pro2: React.FC = () => {
  return (
    <section className={styles.productGridContainer}>
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
