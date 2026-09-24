import React from "react";
import styles from "./article.module.scss";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Articles = () => {

  return (
   <>
      <div className={styles.articleBox}>
        <h3>ARTICLE 1</h3>
        <p>
          Candy powder cake dessert gummies gummies.
          Icing donut croissant wafer caramels
          apple pie carrot cake sweet roll.
        </p>
        <NavLink to="/" className={styles.readMore}>
          Read More <FiArrowRight />
        </NavLink>
        <div className={styles.articleLine}></div>
      </div>

      <div className={styles.articleBox}>
        <h3>ARTICLE 2</h3>
        <p>
          Candy powder cake dessert gummies gummies.
          Icing donut croissant wafer caramels
          apple pie carrot cake sweet roll.
        </p>
        <NavLink to="/" className={styles.readMore}>
          Read More <FiArrowRight />
        </NavLink>
        <div className={styles.articleLine}></div>
      </div>

      {/* <div className={styles.articleBox}>
        <h3>ARTICLE 3</h3>
        <p>
          Candy powder cake dessert gummies gummies.
          Icing donut croissant wafer caramels
          apple pie carrot cake sweet roll.
        </p>
        <NavLink to="/" className={styles.readMore}>
          Read More <FiArrowRight />
        </NavLink>
        <div className={styles.articleLine}></div>
      </div> */}
</>
  );
}

export default Articles;
