import React from 'react';
import styles from './ShopByCategories.module.css';

interface Category {
  id: string;
  name: string;
  image: string;
}

const ShopByCategories: React.FC = () => {
  const categories: Category[] = [
    {
      id: '1',
      name: 'Must haves',
      image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=150&h=150&fit=crop'
    },
    {
      id: '2',
      name: 'Skin care',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=150&h=150&fit=crop'
    },
    {
      id: '3',
      name: 'Heart care',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=150&h=150&fit=crop'
    },
    {
      id: '4',
      name: 'Vitamins & supplements',
      image: 'https://images.unsplash.com/photo-1550572017-4a6f6857e80e?w=150&h=150&fit=crop'
    },
    {
      id: '5',
      name: 'Homeopathy care',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=150&h=150&fit=crop'
    },
    {
      id: '6',
      name: 'Ayurvedic care',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981c6d3c94?w=150&h=150&fit=crop'
    },
    {
      id: '7',
      name: 'Sports nutrition',
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=150&h=150&fit=crop'
    },
    {
      id: '8',
      name: 'Health food and drinks',
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shop by Categories</h2>
      
      <div className={styles.categoriesWrapper}>
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={styles.categoryImage}
                />
              </div>
              <p className={styles.categoryName}>{category.name}</p>
            </div>
          ))}
        </div>
        
        <button className={styles.scrollButton} aria-label="Scroll right">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ShopByCategories;