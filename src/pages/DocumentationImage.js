import styles from "./pages.module.scss"
import Image from "/src/components/Image/Image.js";
import Codeblock from "/src/components/Codeblock/Codeblock.js";
import ImageOne from "/src/images/image-2.jpg";
import ImageTwo from "/src/images/image-5.jpg";
import ImageThree from "/src/images/image-3.jpeg";

const DocumentationImage = () => {

  const snippet = 
  `
  {/* A placeholder image (uses default placeholder) */}
  <Image />

  {/* Add a src prop for a basic image */}
  <Image src={ImageOne} alt="Example image one" />

  {/* Add the border prop to style the image with a border */}
  <Image src={ImageTwo} border alt="Example image with border" />

  {/* Add the fancy prop to apply a decorative style */}
  <Image src={ImageThree} fancy alt="Fancy styled image" />
  `;

  return (
    <>
      <h2>Image</h2>

      <p>Some Info about the component</p>
      
      
      <hr />

      <h2>Examples</h2>
      
      <div className={styles.glowBox}> 

          <p> A placeholder image</p>
          
          <Image/>

          <br/>

          <Image src={ImageOne} />
          
          <br/>

          <Image src={ImageTwo} border/>

          <br/>

          <Image src={ImageThree} fancy />


      </div>

      <h3>Code Snippet</h3>

      <p>Here is an example of how to use the Card component in your project:</p>

      <Codeblock snippet={snippet} />

    </>
  );
}

export default DocumentationImage;

