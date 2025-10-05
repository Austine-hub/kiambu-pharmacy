import React from 'react';
import styles from './ProductGrid.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Ferrous Bisglycinate with Zinc Folic Acid Methylcobalamin Tablet',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Cefpodoxime Proxetil 200',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Cefuroxime 250 mg',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Phenylephrine CPM with Paracetamol (Double Strength) Syrup',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Pantoprazole 40mg Injection',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'SUNSCREEN GEL SPF 50',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Fluticasone Eye Drops',
      image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=300&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Carboxymethylcellulose (1% w/v)',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Most Popular Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src={product.image} 
                alt={product.name}
                className={styles.image}
              />
              <div className={styles.watermark}>
                <span>WATERMARK</span>
                <span>WATERMARK</span>
                <span>WATERMARK</span>
              </div>
            </div>
            <h3 className={styles.productName}>{product.name}</h3>
            <button className={styles.button}>Get a Price/Quote</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;