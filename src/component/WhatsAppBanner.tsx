import React from 'react';
import styles from './WhatsAppBanner.module.css';

const WhatsAppBanner: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop" 
            alt="Apollo Pharmacy" 
            className={styles.logo}
          />
          <span className={styles.brandName}>
            Apollo<br />
            <span className={styles.pharmacyText}>PHARMACY</span>
          </span>
        </div>

        {/* Text Section */}
        <div className={styles.textSection}>
          <span className={styles.yayText}>Yay!</span>
          <span className={styles.normalText}>Now you can</span>
          <div className={styles.ctaText}>
            <span className={styles.whatsappText}>WHATSAPP</span>
            <span className={styles.toText}>TO</span>
            <span className={styles.orderText}>ORDER</span>
          </div>
        </div>

        {/* Button Section */}
        <div className={styles.buttonSection}>
          <a 
            href="https://wa.me/919355247247" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <span className={styles.buttonText}>Whatsapp @+91 -9355247247</span>
            <svg 
              className={styles.whatsappIcon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>

        {/* Illustration Section */}
        <div className={styles.illustration}>
          <div className={styles.illustrationContent}>
            {/* Chat bubbles */}
            <div className={styles.chatBubble} style={{ top: '10px', left: '20px' }}>
              <div className={styles.bubbleLines}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.chatBubble} style={{ top: '5px', right: '120px' }}>
              <div className={styles.bubbleLines}>
                <span></span>
                <span></span>
              </div>
            </div>
            
            {/* Characters */}
            <div className={styles.character} style={{ left: '50px' }}>
              <div className={styles.characterHead} style={{ backgroundColor: '#E67E7E' }}></div>
              <div className={styles.characterBody}></div>
            </div>
            
            <div className={styles.character} style={{ right: '30px' }}>
              <div className={styles.characterHead} style={{ backgroundColor: '#4A90E2' }}></div>
              <div className={styles.characterBody}></div>
              <div className={styles.stethoscope}></div>
            </div>

            {/* Medical crosses */}
            <div className={styles.medicalCross} style={{ bottom: '20px', left: '40px' }}>+</div>
            <div className={styles.medicalCross} style={{ bottom: '20px', right: '40px' }}>+</div>

            {/* Decorative elements */}
            <div className={styles.pill} style={{ top: '30px', right: '20px' }}></div>
            <div className={styles.heartbeat} style={{ bottom: '35px', left: '120px' }}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WhatsAppBanner;