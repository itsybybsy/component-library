import React from "react";
import styles from "./appbar.module.scss";

const AppBar = ({ title, links = [] }) => {
  return (
    <header className={styles.appbar}>
      <div className={styles.title}>{title}</div>
      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default AppBar;
