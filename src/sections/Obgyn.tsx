import React, { useState, useEffect } from 'react';
import styles from './Obgyn.module.css';

// Local image imports (place your images in /src/assets and update paths)
import pic1 from "../assets/consultation/obgyn1.png";
import pic2 from "../assets/consultation/obgyn2.png";
import pic3 from "../assets/consultation/obgyn3.png";

interface Service {
  id: string;
  title: string;
  description: string;
  tests: string[];
  bannerImage: string;
}

const ReproductiveHealth: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [activeService, setActiveService] = useState<string | null>(null);

  const bannerImages = [
    {
      url: pic1,
      title: 'Comprehensive Women\'s Health Services',
      subtitle: 'Expert Care for Every Stage of Life'
    },
    {
      url: pic2,
      title: 'Maternal & Prenatal Care',
      subtitle: 'Supporting Healthy Pregnancies'
    },
    {
      url: pic3,
      title: 'Family Planning & Reproductive Health',
      subtitle: 'Your Health, Your Choice'
    }
  ];

  const services: Service[] = [
    {
      id: 'antenatal',
      title: 'Antenatal Care & Prenatal Services',
      description: 'Comprehensive prenatal care ensuring the health and wellbeing of both mother and baby throughout pregnancy. Regular monitoring, screenings, and support for a healthy pregnancy journey.',
      tests: [
        'HIV Testing & PMTCT (Prevention of Mother-to-Child Transmission) - Essential for maternal health in Sub-Saharan Africa',
        'Malaria Screening & Prevention - Critical during pregnancy in endemic areas',
        'Anemia Testing (Hemoglobin/Hematocrit) - Common deficiency affecting maternal outcomes',
        'Blood Pressure Monitoring - Preeclampsia detection',
        'Ultrasound Scans - Fetal development assessment',
        'Glucose Screening - Gestational diabetes testing',
        'Syphilis Screening (VDRL/RPR) - Preventing congenital syphilis',
        'Hepatitis B Screening - Maternal and neonatal protection',
        'Blood Group & Rhesus Factor - Preventing hemolytic disease',
        'Urinalysis - Detecting infections and preeclampsia markers'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=400&fit=crop'
    },
    {
      id: 'family-planning',
      title: 'Family Planning & Contraception',
      description: 'Personalized family planning services offering a full range of contraceptive options, counseling, and education to help you make informed reproductive health decisions.',
      tests: [
        'Pregnancy Testing (urine/blood hCG)',
        'STI Screening (Chlamydia, Gonorrhea, Syphilis)',
        'HIV Testing & Counseling',
        'Cervical Cancer Screening (Pap smear/VIA)',
        'Blood Pressure Assessment - Contraceptive eligibility',
        'Pelvic Examination',
        'Contraceptive Counseling & Selection',
        'IUD Insertion & Management',
        'Implant Insertion & Removal',
        'Injectable Contraceptives Administration'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=400&fit=crop'
    },
    {
      id: 'cervical-screening',
      title: 'Cervical Cancer Screening & Prevention',
      description: 'Early detection and prevention of cervical cancer through regular screening. Cervical cancer is the leading cancer among women in Sub-Saharan Africa, making screening vital for prevention.',
      tests: [
        'VIA (Visual Inspection with Acetic Acid) - Primary screening method in resource-limited settings',
        'Pap Smear (Cervical Cytology) - Gold standard for cervical cancer screening',
        'HPV DNA Testing - Detecting high-risk HPV strains',
        'Colposcopy - Detailed cervical examination',
        'Cervical Biopsy - Tissue sampling for diagnosis',
        'HPV Vaccination - Prevention for eligible age groups',
        'Cryotherapy - Treatment for precancerous lesions',
        'LEEP (Loop Electrosurgical Excision Procedure)',
        'Follow-up Care & Monitoring'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1200&h=400&fit=crop'
    },
    {
      id: 'gynecological',
      title: 'General Gynecological Services',
      description: 'Comprehensive care for all aspects of women\'s reproductive health, from routine check-ups to management of gynecological conditions and concerns.',
      tests: [
        'Pelvic Examination - Routine gynecological assessment',
        'Vaginal Infection Screening (Candidiasis, Bacterial Vaginosis, Trichomoniasis)',
        'STI Testing Panel - Comprehensive screening',
        'Ultrasound (Pelvic/Transvaginal) - Imaging for uterus, ovaries',
        'Endometrial Biopsy - Abnormal bleeding investigation',
        'Hormone Level Testing (FSH, LH, Estrogen, Progesterone)',
        'Thyroid Function Tests - Affecting reproductive health',
        'Breast Examination - Cancer screening',
        'Menstrual Disorder Evaluation',
        'Menopause Management & Hormone Assessment'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1579154341406-25c116d67eaf?w=1200&h=400&fit=crop'
    },
    {
      id: 'maternal-child',
      title: 'Maternal & Child Health',
      description: 'Integrated care focusing on the health of mothers and children, including postnatal care, immunizations, and pediatric gynecological services.',
      tests: [
        'Postnatal Check-ups - Mother and baby health assessment',
        'Breastfeeding Support & Assessment',
        'Postpartum Depression Screening',
        'Infant Immunizations',
        'Child Growth Monitoring',
        'Postpartum Family Planning Counseling',
        'Maternal Nutrition Assessment',
        'Pediatric Well-child Visits',
        'Newborn Screening Tests',
        'Postpartum Infection Screening'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=400&fit=crop'
    },
    {
      id: 'fertility',
      title: 'Fertility & Reproductive Counseling',
      description: 'Comprehensive fertility evaluation and counseling services to support couples on their journey to parenthood, including diagnostic testing and treatment options.',
      tests: [
        'Fertility Assessment & Counseling',
        'Ovulation Testing & Monitoring',
        'Hormone Profile (FSH, LH, AMH, Prolactin)',
        'Semen Analysis - Male fertility evaluation',
        'Hysterosalpingography (HSG) - Fallopian tube assessment',
        'Ultrasound Follicle Monitoring',
        'Thyroid Function Tests',
        'Infectious Disease Screening',
        'Genetic Counseling',
        'Preconception Health Optimization'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&h=400&fit=crop'
    },
    {
      id: 'sti-prevention',
      title: 'STI Prevention & Management',
      description: 'Confidential testing, treatment, and prevention services for sexually transmitted infections. Education and support for sexual health and wellbeing.',
      tests: [
        'HIV Testing & Counseling (Rapid & Laboratory)',
        'Syphilis Testing (VDRL/RPR/TPHA)',
        'Gonorrhea Culture & NAAT',
        'Chlamydia NAAT Testing',
        'Trichomonas Testing',
        'Hepatitis B & C Screening',
        'Herpes Simplex Virus (HSV) Testing',
        'HPV Testing',
        'Partner Notification Services',
        'PrEP & PEP Services (HIV Prevention)'
      ],
      bannerImage: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=1200&h=400&fit=crop'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Kamau',
      role: 'Consultant Obstetrician & Gynecologist',
      credentials: 'MBChB, MMED (OBGYN), FRCOG',
      experience: '15+ years experience in women\'s health',
      image: pic1,
      specializations: ['High-Risk Pregnancies', 'Minimally Invasive Surgery', 'Reproductive Endocrinology']
    },
    {
      name: 'Nurse Jane Wanjiru',
      role: 'Senior OBGYN Nurse Specialist',
      credentials: 'RN, BSN, Midwifery Certification',
      experience: '20+ years in maternal & reproductive health',
      image: pic3,
      specializations: ['Prenatal Care', 'Family Planning', 'Patient Education']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        (prevIndex + 1) % bannerImages.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className={styles.reproductiveHealthContainer}>
      {/* Hero Banner with Carousel */}
      <section className={styles.heroBanner}>
        {bannerImages.map((banner, index) => (
          <div
            key={index}
            className={`${styles.bannerSlide} ${
              index === currentBannerIndex ? styles.active : ''
            }`}
            style={{ backgroundImage: `url(${banner.url})` }}
          >
            <div className={styles.bannerOverlay}>
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>{banner.title}</h1>
                <p className={styles.bannerSubtitle}>{banner.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.bannerIndicators}>
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentBannerIndex ? styles.activeIndicator : ''
              }`}
              onClick={() => setCurrentBannerIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Reproductive Health & OBGYN Services</h2>
          <p className={styles.introText}>
            Our Reproductive Health Department provides comprehensive, compassionate care for women 
            at every stage of life. From adolescence through menopause, our experienced team of 
            obstetricians, gynecologists, and specialized nurses deliver evidence-based care tailored 
            to your unique needs. We are committed to promoting women's health, preventing disease, 
            and supporting you through all aspects of reproductive wellness.
          </p>
        </div>
      </section>

      {/* Medical Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Expert Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamCredentials}>{member.credentials}</p>
                  <p className={styles.teamExperience}>{member.experience}</p>
                  <div className={styles.specializations}>
                    <strong>Specializations:</strong>
                    <ul>
                      {member.specializations.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.servicesIntro}>
            We offer a comprehensive range of reproductive health services designed to meet 
            the diverse needs of women in our community. Each service is delivered with the 
            highest standards of care, privacy, and respect.
          </p>

          <div className={styles.servicesList}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceItem}>
                <div 
                  className={styles.serviceBanner}
                  style={{ backgroundImage: `url(${service.bannerImage})` }}
                >
                  <div className={styles.serviceBannerOverlay}>
                    <h3 className={styles.serviceBannerTitle}>{service.title}</h3>
                  </div>
                </div>

                <div className={styles.serviceContent}>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <button 
                    className={styles.toggleButton}
                    onClick={() => toggleService(service.id)}
                    aria-expanded={activeService === service.id}
                  >
                    {activeService === service.id ? 'Hide' : 'View'} Available Tests & Procedures
                    <span className={styles.toggleIcon}>
                      {activeService === service.id ? '−' : '+'}
                    </span>
                  </button>

                  {activeService === service.id && (
                    <div className={styles.testsContainer}>
                      <h4 className={styles.testsTitle}>Available Tests & Procedures:</h4>
                      <ul className={styles.testsList}>
                        {service.tests.map((test, index) => (
                          <li key={index} className={styles.testItem}>{test}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Schedule Your Appointment Today</h2>
          <p className={styles.ctaText}>
            Take control of your reproductive health. Our compassionate team is here to 
            provide the care and support you need. Contact us to book your consultation.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Book Appointment</button>
            <button className={styles.secondaryButton}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className={styles.emergencyNotice}>
        <div className={styles.container}>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyIcon}>⚠️</div>
            <div className={styles.emergencyText}>
              <h3>24/7 Emergency Services Available</h3>
              <p>For obstetric emergencies, please call our emergency line immediately or visit our emergency department.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReproductiveHealth;