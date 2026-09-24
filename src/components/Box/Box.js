import React from "react";
import styles from "./box.module.scss";


const Box = ({ variant, outlined, children }) => {
    let buttonClass = styles.box;
  
    // Choose which variant class to use
    if (variant === "Primary") {
      buttonClass += " " + styles.Primary;
    } else if (variant === "Secondary") {
      buttonClass += " " + styles.Secondary;
    }
  
    // Add outlined style if true
    if (outlined) {
      buttonClass += " " + styles.Outlined;
    }
  
    return <button className={buttonClass}>{children}</button>;
  };
  
  export default Box;