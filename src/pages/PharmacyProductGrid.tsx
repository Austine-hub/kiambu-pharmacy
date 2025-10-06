import { useState, useMemo, memo, FC } from "react";
import styles from "./PharmacyProductGrid.module.css";

// Local Images (add more as needed)
import pic1 from "./../assets/system/cns.png";
import pic2 from "./../assets/system/resp.png";
import pic3 from "./../assets/system/cardiac.png";
import pic4 from "./../assets/system/git.png";
import pic5 from "./../assets/system/gut.png";
import pic6 from "./../assets/system/msk.png";
import pic7 from "./../assets/system/allergy.png";

// -----------------------------
// 🔹 Types
// -----------------------------
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image?: string;
  buyXGetY?: string;
}

interface ProductCardProps {
  product: Product;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// -----------------------------
// 🔹 ProductCard Component
// -----------------------------
const ProductCard: FC<ProductCardProps> = memo(({ product }) => {
  const discountPercent = useMemo(() => {
    const diff = product.originalPrice - product.price;
    return Math.max(0, Math.round((diff / product.originalPrice) * 100));
  }, [product.price, product.originalPrice]);

  return (
    <article className={styles.productCard} role="listitem">
      {/* Product Image */}
      <div className={styles.productImageContainer}>
        <img
          src={product.image ?? pic7} // fallback local image
          alt={product.name}
          className={styles.productImage}
          loading="lazy"
        />
        {product.buyXGetY && (
          <span className={styles.badgeBuyXGetY} aria-label="Special offer">
            {product.buyXGetY}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className={styles.productInfo}>
        <h3 className={styles.productName} title={product.name}>
          {product.name}
        </h3>

        <div className={styles.priceContainer}>
          <span className={styles.currentPrice} aria-label="Current price">
            ₹{product.price.toFixed(2)}
          </span>
          <span
            className={styles.originalPrice}
            aria-label={`Original price ₹${product.originalPrice.toFixed(2)}`}
          >
            MRP ₹{product.originalPrice.toFixed(2)}
          </span>
          {discountPercent > 0 && (
            <span
              className={styles.discount}
              aria-label={`${discountPercent}% discount`}
            >
              {discountPercent}% off
            </span>
          )}
        </div>

        <button
          type="button"
          className={styles.addButton}
          aria-label={`Add ${product.name} to cart`}
        >
          Add
        </button>
      </div>
    </article>
  );
});
ProductCard.displayName = "ProductCard";

// -----------------------------
// 🔹 Pagination Component
// -----------------------------
const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      pages.push(...[1, 2, 3, 4, 5], "…", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        "…",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "…",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "…",
        totalPages
      );
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <nav className={styles.pagination} aria-label="Pagination Navigation">
      <button
        className={styles.paginationArrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        ‹
      </button>

      {pageNumbers.map((page, idx) =>
        page === "…" ? (
          <span key={`ellipsis-${idx}`} className={styles.paginationEllipsis}>
            …
          </span>
        ) : (
          <button
            key={page}
            className={`${styles.paginationNumber} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => onPageChange(page as number)}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className={styles.paginationArrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        ›
      </button>
    </nav>
  );
};

// -----------------------------
// 🔹 Main Component
// -----------------------------
const PharmacyProductGrid: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const products: Product[] = [
    {
      id: 1,
      name: "Apollo Pharmacy Compressor Nebulizer, 1 Count",
      price: 1517.9,
      originalPrice: 2399.0,
      image: pic1,
      buyXGetY: "Buy 2 • Rs.1,990",
    },
    {
      id: 2,
      name: "Omron Blood Pressure Monitor HEM-7121-J, 1 Count",
      price: 1750.8,
      originalPrice: 2290.0,
      image: pic2,
    },
    { id: 3, name: "Digital Thermometer", price: 199.0, originalPrice: 399.0, image: pic3 },
    { id: 4, name: "First Aid Kit - 50 Items", price: 850.0, originalPrice: 1200.0, image: pic4 },
    { id: 5, name: "Hand Sanitizer (500ml)", price: 149.0, originalPrice: 250.0, image: pic5 },
    { id: 6, name: "Reusable Face Mask (Pack of 3)", price: 299.0, originalPrice: 450.0, image: pic6 },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.container} aria-labelledby="popular-products">
      <h2 id="popular-products" className={styles.title}>
        Most Popular Products
      </h2>

      <div className={styles.productGrid} role="list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={8}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default PharmacyProductGrid;
