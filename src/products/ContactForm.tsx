import React, { useState } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can replace this with an API call or backend submission logic
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactGrid}>
        {/* --- Contact Info --- */}
        <div className={styles.infoColumn}>
          <p className={styles.introText}>
            Our team of Pharmacists and Technicians are here to answer any
            questions you might have.
          </p>

          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactDetails}>
            <a href="mailto:info@bayviewrx.com" className={styles.link}>
              info@bayviewrx.com
            </a>
            <a href="tel:+14012844505" className={styles.link}>
              +1 (401) 284-4505
            </a>
          </div>

          <h2 className={styles.sectionTitle}>Address</h2>
          <address className={styles.address}>
            3844 Post Road
            <br />
            Warwick, RI
            <br />
            02886
            <br />
            United States
          </address>

          <h2 className={styles.sectionTitle}>Social</h2>
          <nav
            className={styles.socialLinks}
            aria-label="Social Media Links"
          >
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073C0 18.062 4.388 23.027 10.125 23.927v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07...z" />
              </svg>
              Instagram
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <svg
                className={styles.icon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328...z" />
              </svg>
              LinkedIn
            </a>
          </nav>
        </div>

        {/* --- Form Column --- */}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          noValidate
          aria-labelledby="contactFormHeading"
        >
          <h2 id="contactFormHeading" className={styles.formHeading}>
            Send Us a Message
          </h2>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="john@doe.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <p className={styles.hint}>We’ll never share your email.</p>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Contact Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              placeholder="(***) ***-****"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={6}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Submit
          </button>

          <p className={styles.footerNote}>
            We’ll get back to you as soon as possible.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
