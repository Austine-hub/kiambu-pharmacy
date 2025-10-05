import React from 'react';
import styles from './HealthConditions.module.css';

interface HealthCondition {
  id: number;
  title: string;
  bgColor: string;
}

const HealthConditions: React.FC = () => {
  const conditions: HealthCondition[] = [
    {
      id: 1,
      title: 'Type 2 Diabetes',
      bgColor: '#2B7A8F'
    },
    {
      id: 2,
      title: 'Inflammatory Bowel Disease',
      bgColor: '#1F6B5E'
    },
    {
      id: 3,
      title: 'Multiple Sclerosis',
      bgColor: '#5BA3B5'
    },
    {
      id: 4,
      title: 'Breast Cancer',
      bgColor: '#E88A8A'
    },
    {
      id: 5,
      title: 'Rheumatoid Arthritis',
      bgColor: '#2B7A8F'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>HEALTH CONDITIONS</h2>
          <button className={styles.viewAllBtn}>
            VIEW ALL
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M7.5 5L12.5 10L7.5 15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        <div className={styles.grid}>
          {conditions.map((condition) => (
            <div key={condition.id} className={styles.card}>
              <div 
                className={styles.cardImage} 
                style={{ backgroundColor: condition.bgColor }}
              >
                <div className={styles.imageOverlay}></div>
              </div>
              <h3 className={styles.cardTitle}>{condition.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthConditions;