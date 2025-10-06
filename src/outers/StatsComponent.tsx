import React from "react";
import styles from "./StatsComponent.module.css";

interface Stat {
  label: string;
  value: string;
  description: string;
}

const StatsComponent: React.FC = () => {
  const stats: Stat[] = [
    { label: "Present in", value: "16+", description: "Counties Nationwide" },
    { label: "Trusted by", value: "1650+", description: "National clients" },
    { label: "Operating across", value: "18+", description: "rural areas" },
    { label: "Supporting Health and Managing Sickness with", value: "120+", description: "cases managed everyday" },
  ];

  return (
    <section className={styles.container} aria-labelledby="stats-heading">
      <header className={styles.header}>
        <h1 id="stats-heading" className={styles.title}>
          <span className={styles.titleHighlight}>ERNST</span> in the Nation
        </h1>
        <p className={styles.subtitle}>
          A National  presence built on trust, innovation, and collaboration.
        </p>
      </header>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <p className={styles.statLabel}>{stat.label}</p>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statDescription}>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StatsComponent;
