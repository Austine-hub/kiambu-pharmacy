import React from 'react';
import styles from './MedicalSpecialties.module.css';

interface Specialty {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const MedicalSpecialties: React.FC = () => {
  const specialties: Specialty[] = [
    { id: 'asthma', name: 'Asthma', icon: '🫁', color: '#0EA5E9' },
    { id: 'cardiology', name: 'Cardiology', icon: '💓', color: '#DC2626' },
    { id: 'dermatology', name: 'Dermatology', icon: '💧', color: '#EC4899' },
    { id: 'diabetic', name: 'Diabetic', icon: '💉', color: '#8B5CF6' },
    { id: 'endocrinology', name: 'Endocrinology', icon: '🔬', color: '#F59E0B' },
    { id: 'gastroenterology', name: 'Gastroenterology', icon: '🫃', color: '#9333EA' },
    { id: 'general', name: 'General', icon: '🏃', color: '#2563EB' },
    { id: 'gynaecology', name: 'Gynaecology', icon: '💔', color: '#F87171' },
    { id: 'hepatology', name: 'Hepatology', icon: '🫀', color: '#EC4899' },
    { id: 'immunology', name: 'Immunology', icon: '🛡️', color: '#3B82F6' },
    { id: 'nephrology', name: 'Nephrology', icon: '🫘', color: '#991B1B' },
    { id: 'neurology', name: 'Neurology', icon: '🧠', color: '#F59E0B' },
    { id: 'oncology', name: 'Oncology', icon: '🎗️', color: '#F87171' },
    { id: 'orthopedics', name: 'Orthopedics', icon: '🦴', color: '#0891B2' },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: '👁️', color: '#065F46' },
    { id: 'pediatrics', name: 'Pediatrics', icon: '👶', color: '#9CA3AF' },
    { id: 'respiratory', name: 'Respiratory', icon: '🫁', color: '#9333EA' },
    { id: 'rheumatology', name: 'Rheumatology', icon: '🌿', color: '#10B981' },
    { id: 'surgical', name: 'Surgical', icon: '👨‍⚕️', color: '#92400E' },
    { id: 'urology', name: 'Urology', icon: '🫘', color: '#EA580C' },
    { id: 'dental', name: 'Dental', icon: '🦷', color: '#1E3A8A' },
    { id: 'eurosrit', name: 'Eurosrit', icon: '😊', color: '#EC4899' },
    { id: 'general-medicine-new', name: 'General Medicine New', icon: '⚕️', color: '#2563EB' },
    { id: 'general-care', name: 'General Care', icon: '🏥', color: '#3B82F6' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {specialties.map((specialty) => (
          <div key={specialty.id} className={styles.card}>
            <div 
              className={styles.iconCircle} 
              style={{ backgroundColor: specialty.color }}
            >
              <span className={styles.icon}>{specialty.icon}</span>
            </div>
            <p className={styles.label}>{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalSpecialties;