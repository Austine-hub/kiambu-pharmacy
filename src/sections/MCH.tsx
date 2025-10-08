// File: src/sections/MCH.tsx

import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./MCH.module.css";

// Local image imports (ensure correct paths)
import obgynImg from "../assets/lab/banner01.jpg";
import pediatricianImg from "../assets/lab/banner03.jpg";
import antenatalImg from "../assets/lab/banner05.png";
import immunizationImg from "../assets/lab/banner03.jpg";
import newbornImg from "../assets/lab/banner03.jpg";

interface Service {
  id: string;
  title: string;
  short: string;
  image: string;
}

const SERVICES: Service[] = [
  {
    id: "antenatal",
    title: "Antenatal Care & Screening",
    short:
      "Routine ANC: HIV, syphilis, malaria, haemoglobin (anaemia), blood group, urine and basic obstetric ultrasound when available.",
    image: antenatalImg,
  },
  {
    id: "immunization",
    title: "Child Immunization & Growth Monitoring",
    short:
      "Routine immunisation (EPI), growth & nutrition checks, Vitamin A supplementation and developmental surveillance.",
    image: immunizationImg,
  },
  {
    id: "newborn",
    title: "Newborn Care & Postnatal Follow-up",
    short:
      "Essential newborn checks, cord care, breastfeeding support and early detection of neonatal danger signs.",
    image: newbornImg,
  },
];

const MCHSection: React.FC = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoRotate = useCallback(() => {
    intervalRef.current = window.setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % SERVICES.length);
    }, 7000);
  }, []);

  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, [startAutoRotate, stopAutoRotate]);

  const handleDotClick = (index: number) => {
    stopAutoRotate();
    setCarouselIndex(index % SERVICES.length);
    startAutoRotate();
  };

  return (
    <section className={styles.mchSection} aria-labelledby="mch-heading">
      {/* Carousel Banner */}
      <div
        className={styles.banner}
        role="region"
        aria-roledescription="carousel"
        aria-label="Maternal and Child Health Services Carousel"
      >
        <div className={styles.carouselInner} aria-live="polite">
          {SERVICES.map((service, index) => (
            <figure
              key={service.id}
              className={`${styles.slide} ${index === carouselIndex ? styles.active : ""}`}
              aria-hidden={index === carouselIndex ? "false" : "true"}
            >
              <img
                src={service.image}
                alt={`${service.title} banner`}
                loading="lazy"
                className={styles.bannerImg}
              />
              <figcaption className={styles.caption}>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.controls}>
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              className={`${styles.dot} ${carouselIndex === index ? styles.dotActive : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Show ${service.title}`}
              aria-pressed={carouselIndex === index}
            />
          ))}
        </div>
      </div>

      {/* Section Content */}
      <div className={styles.contentWrap}>
        <header className={styles.headerRow}>
          <h2 id="mch-heading">Maternal & Child Health (MCH)</h2>
          <p className={styles.lead}>
            Comprehensive, respectful care across pregnancy, childbirth and early childhood —
            anchored in evidence-based screening and preventive services.
          </p>
        </header>

        <div className={styles.columns}>
          <article className={styles.card} aria-labelledby="obgyn-heading">
            <div className={styles.cardImageWrap}>
              <img src={obgynImg} alt="OB-GYN Specialist" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 id="obgyn-heading">Obstetrics & Antenatal Services</h3>
              <p>
                Antenatal consultations, risk assessment, screening tests (HIV, syphilis, malaria, anaemia),
                blood group and targeted ultrasound. Counselling for birth preparedness, nutrition,
                and infection prevention.
              </p>
            </div>
          </article>

          <article className={styles.card} aria-labelledby="paed-heading">
            <div className={styles.cardImageWrap}>
              <img src={pediatricianImg} alt="Paediatrician" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <h3 id="paed-heading">Paediatrics & Child Health</h3>
              <p>
                Well-child visits, immunisation delivery (EPI schedule), growth monitoring, management of
                common childhood infections and nutritional screening with clear referral pathways.
              </p>
            </div>
          </article>
        </div>

        {/* Services Overview */}
        <section className={styles.servicesList} aria-label="Detailed MCH services">
          <h3>Common MCH Screening & Tests — Overview</h3>
          <ul>
            <li>
              <strong>HIV & Syphilis Testing (Antenatal):</strong> Rapid point-of-care tests identify
              infections and enable timely treatment.
            </li>
            <li>
              <strong>Malaria Diagnosis & Prevention:</strong> Rapid diagnostic tests (RDTs) and intermittent
              preventive treatment in pregnancy (IPTp).
            </li>
            <li>
              <strong>Haemoglobin (Anaemia) Testing:</strong> Routine checks during pregnancy and in
              early childhood to detect anaemia.
            </li>
            <li>
              <strong>Urine Testing:</strong> Screening for protein, nitrites, leukocytes (UTI), and glucose
              during antenatal visits.
            </li>
            <li>
              <strong>Obstetric Ultrasound:</strong> Used for dating, detecting multiple pregnancy,
              placental position, fetal growth, and major anomalies.
            </li>
            <li>
              <strong>Immunisations (EPI):</strong> BCG, OPV/IPV, DTP, Hepatitis B, Hib, Pneumococcal,
              Rotavirus, and Measles vaccines.
            </li>
            <li>
              <strong>Growth & Nutritional Screening:</strong> Weight-for-age, height-for-age, and MUAC
              for early malnutrition detection.
            </li>
            <li>
              <strong>Newborn Checks & Early Infant Diagnosis:</strong> Physical exams, breastfeeding
              support, and early testing for HIV-exposed infants.
            </li>
          </ul>
        </section>

        <footer className={styles.note}>
          <small>
            These service highlights follow international guidance and reflect common practice in
            low- and middle-income settings; adapt as per national protocols and available diagnostics.
          </small>
        </footer>
      </div>
    </section>
  );
};

export default MCHSection;
