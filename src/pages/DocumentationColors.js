import React from "react";
import Image from "/src/components/Image/Image.js";
import Colors from "../components/Colors/Colors.js";
import styles from "./pages.module.scss";

import ImagePallete from "/src/images/platform-pallete.png";

const DocumentationColors = () => {
  return (
    <>
      <h2>Colors</h2>
      <div className={styles.colorsContainer}>
        <Colors variant="Primary"/>
        <Colors variant="Secondary" />
        <Colors variant="Neutral" />
        <Colors variant="Dark" />
        <Colors variant="Light" />
        <Colors variant="Alert" />
      </div>

      <Image src={ImagePallete} className={styles.fullImg}/>

    </>
  );
};

export default DocumentationColors;