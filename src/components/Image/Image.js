import React from "react";
import styles from "./image.module.scss";
var placeholder = "https://placehold.co/600x400";

const Image = ({ src = placeholder, fancy, border, ...props }) => {
  return (
    <img
      src={src}
      className={
        `${styles.default} ` +
        (fancy ? `${styles.fancy} ` : "") +
        (border ? `${styles.border}` : "")
      }
      {...props}
    />
  );
};
  export default Image;
  