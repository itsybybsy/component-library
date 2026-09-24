import React, { useState } from "react";
import styles from "./header.module.scss";
import { FaSearch, FaUser, FaBell, FaCog } from "react-icons/fa";

const Header = () => {
  
  return (
    <header className={styles.header}>
      {/* Search */}
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>
         <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />

        <div className={styles.recentList}>
          <li>Recent 1</li>
          <li>Recent 2</li>
        </div>
      </div>

      {/* Right side icons */}
      <div className={styles.rightIcons}>
        <div className={styles.icon}>
          <FaUser title="Profile" />
        </div>

        <div className={styles.icon}>
          <FaBell title="Notifications" />
        </div>

        <div className={styles.icon}>
          <FaCog title="Settings" />
        </div>

      </div>
    </header>
  );
};

export default Header;
