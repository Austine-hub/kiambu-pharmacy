import React from "react";
import styles from "./Footer.module.css";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title?: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerData: FooterSection[] = [
    {
      title: "Information",
      links: [
        { text: "About us", href: "#" },
        { text: "Disclaimer", href: "#" },
        { text: "Terms & Conditions", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Blog", href: "#" },
      ],
    },
    {
      title: "Latest Products",
      links: [
        { text: "Jantoven, Enoxaparidin", href: "#" },
        { text: "Diphenhidramine, Glyamine", href: "#" },
        { text: "Rocaltrol, Calcitriol", href: "#" },
        { text: "Imitrex, Eletriptan Injection", href: "#" },
        { text: "Citalix, Crizotinib", href: "#" },
        { text: "Cymelarb IV, for Infusion", href: "#" },
        { text: "Cytostat, Fludarabin", href: "#" },
        { text: "Tasigna, Nilotinib", href: "#" },
      ],
    },
    {
      title: "Featured Products",
      links: [
        { text: "Ivermectin", href: "#" },
        { text: "Tadalafil", href: "#" },
        { text: "Hydroxychloroquine", href: "#" },
        { text: "Doxycycline", href: "#" },
        { text: "Vardenafil", href: "#" },
        { text: "Dutasteride", href: "#" },
        { text: "Rytabuck, Semaglutide", href: "#" },
        { text: "Dasatinib", href: "#" },
        { text: "Mounjaro Injection, Tirzepatide", href: "#" },
      ],
    },
    {
      title: "My Account",
      links: [
        { text: "My Account", href: "#" },
        { text: "Shopping Cart", href: "#" },
        { text: "Checkout", href: "#" },
      ],
    },
    {
      title: "Why buy from us?",
      links: [
        { text: "Payment Methods", href: "#" },
        { text: "Returns / Refunds Policy", href: "#" },
        { text: "Shipping And Delivery", href: "#" },
      ],
    },
    {
      links: [
        { text: "Sildenafil", href: "#" },
        { text: "Careprost", href: "#" },
        { text: "Albuterol / Salbutamol Inhaler", href: "#" },
        { text: "Metformin", href: "#" },
        { text: "Tramadol", href: "#" },
        { text: "Super Lash, Bimatoprost Eyedrops", href: "#" },
        { text: "Rapamycin (Sirolimus)", href: "#" },
        { text: "Baricitinib 4-2mt", href: "#" },
        { text: "Wegovy Pen", href: "#" },
      ],
    },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <nav aria-label="Footer navigation" className={styles.grid}>
          {footerData.map((section, index) => (
            <div key={index} className={styles.column}>
              {section.title && (
                <h3 className={styles.title}>{section.title}</h3>
              )}
              <ul className={styles.list}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={styles.listItem}>
                    <a href={link.href} className={styles.link}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
