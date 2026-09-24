import React from "react";
import styles from "./pages.module.scss"
import Image from "../components/Image/Image.js";
import ImagePlatform from "../images/platform-screen.jpg";

const Home = () => {

    return (
      <>
      <h1>Welcome to My Component Library</h1>
      <p>
        This platform was designed for Assessment 2, featuring reusable components like simple cards, templates, and code snippets. 
        Styled with modern grey and red shades, it’s clean, functional, and easy to explore.
      </p>

      <Image src={ImagePlatform} className={styles.fullImg}/>

      </>
    );
  }
  
  export default Home;
  
