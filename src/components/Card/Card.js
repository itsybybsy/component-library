import React from "react";
import styles from "./card.module.scss";

const Card = ({variant,children}) => {

  return (

    <div className={`${styles.card} ${styles[variant]}`}>
      {children}
    </div>    
    
  );
}

export default Card;
