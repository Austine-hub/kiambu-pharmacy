import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsComponent.module.css";

interface Stat {
  label: string;
  value: string; // e.g., "1650+"
  description: string;
}

const StatsComponent: React.FC = () => {
  const stats: Stat[] = [
    { label: "Present in", value: "16+", description: "Counties Nationwide" },
    { label: "Trusted by", value: "1650+", description: "National clients" },
    { label: "Operating across", value: "18+", description: "rural areas" },
    { label: "Supporting Health and Managing Sickness with", value: "120+", description: "cases managed everyday" },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const targetValue = parseInt(stat.value.replace(/\D/g, ""), 10);
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetValue / steps;
      let current = 0;
      let stepCount = 0;

      const counter = setInterval(() => {
        current += increment;
        stepCount++;

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(current), targetValue);
          return newCounts;
        });

        if (stepCount >= steps) clearInterval(counter);
      }, duration / steps);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className={styles.container} aria-labelledby="stats-heading">
      <header className={styles.header}>
        <h1 id="stats-heading" className={styles.title}>
          <span className={styles.titleHighlight}>ERNST</span> in the Nation
        </h1>
        <p className={styles.subtitle}>
          A National presence built on trust, innovation, and collaboration.
        </p>
      </header>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => {
          const suffix = stat.value.replace(/[0-9]/g, ""); // keeps '+'
          return (
            <article key={stat.label} className={styles.statCard}>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>
                {counts[index]}
                <span className={styles.statSuffix}>{suffix}</span>
              </p>
              <p className={styles.statDescription}>{stat.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default StatsComponent;
