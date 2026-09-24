import React from "react";
import styles from "./colors.module.scss";

// Palette
const palette = {
  Black: "#121212",
  Grey: "#9A9A9A",
  Platinum: "#E8E8E8",
  Red: "#E63232",
  Vermillion: "#FF3B3B",
  Salmon: "#FF9E9E",
};

// Map variant names to color names
const variants = {
  Primary: "Red",
  Secondary: "Salmon",
  Neutral: "Grey",
  Dark: "Black",
  Light: "Platinum",
  Alert: "Vermillion",
};
  
const Colors = ({ variant }) => {
  const colorName = variants[variant]; 
  const color = palette[colorName] || "#ccc"; // e.g. "#E63232"

  return (
    <div className={styles.colorBox} style={{ backgroundColor: color }}>
      <span className={styles.colorName}>
        {variant} – {colorName}
      </span>
    </div>
  );
};

  
export default Colors;