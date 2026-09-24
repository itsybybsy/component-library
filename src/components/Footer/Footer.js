import React from "react";
import styles from "./footer.module.scss";

  const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className={styles.footer}>
        <p>© {currentYear} Barbora Mazuchova, Assessment 2.</p>
      </footer>
    );
  };

export default Footer;
