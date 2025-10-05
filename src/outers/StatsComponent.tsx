import React from "react";
import styles from "./StatsComponent.module.css";

const StatsComponent: React.FC = () => {
  const stats = [
    { label: "Present in", value: "6+", description: "Countries" },
    { label: "Over", value: "650+", description: "Clients" },
    { label: "Close to", value: "18+", description: "Manufacturing Areas" },
    { label: "Close to", value: "20+", description: "R&D Sites" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleHighlight}>ERNST</span> in the World
        </h1>
      </header>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statDescription}>{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
