import { useState, useMemo, memo } from "react";
import type { FC } from "react";
import styles from "./PharmacyProductGrid.module.css";



// -----------------------------
// 🔹 Types
// -----------------------------
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
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
  const discountPercent = useMemo(
    () =>
      Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      ),
    [product.price, product.originalPrice]
  );

  return (
    <article className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
          loading="lazy"
        />
        {product.buyXGetY && (
          <span className={styles.badgeBuyXGetY}>{product.buyXGetY}</span>
        )}
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName} title={product.name}>
          {product.name}
        </h3>

        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>₹{product.price.toFixed(2)}</span>
          <span className={styles.originalPrice}>
            MRP ₹{product.originalPrice.toFixed(2)}
          </span>
          <span className={styles.discount}>{discountPercent}% off</span>
        </div>

        <button type="button" className={styles.addButton}>
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
      pages.push(...[1, 2, 3, 4, 5], "...", totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <button
        className={styles.paginationArrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        ‹
      </button>

      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span key={`ellipsis-${idx}`} className={styles.paginationEllipsis}>
            ...
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

  // ⚡ Simulated product data (would come from API in real app)
  const products: Product[] = [
    {
      id: 1,
      name: "Apollo Pharmacy Compressor Nebulizer, 1 Count",
      price: 1517.9,
      originalPrice: 2399.0,
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=300&fit=crop",
      buyXGetY: "Buy 2 • Rs.1,990",
    },
    {
      id: 2,
      name: "Omron Blood Pressure Monitor HEM-7121-J, 1 Count",
      price: 1750.8,
      originalPrice: 2290.0,
      image:
        "https://images.unsplash.com/photo-1615486511262-2fec7c9e5d9e?w=300&h=300&fit=crop",
    },
    // ... rest of your product list
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.productGrid}>
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
