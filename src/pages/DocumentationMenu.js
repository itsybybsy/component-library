import styles from "./pages.module.scss"
import Menu from "/src/components/Menu/Menu.js";

import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocumentationMenu = () => {

  const snippet = 
  `
    <Menu>
      <a href="#">Home</a>
      <a href="#">Home</a>
      <a href="#">Home</a>
    </Menu>
  `;

  return (
    <>
      <h2>Docs Menu</h2>

      <p>Some Info about the component</p>

      <hr />

      <h2>Examples</h2>

      <div className={styles.glowBox}> 

          <Menu>
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
          </Menu>

      </div>
      
      <h3>Code Snippet</h3>

      <p>Here is an example of how to use the Card component in your project:</p>

      <Codeblock snippet={snippet} />

    </>
  );
}

export default DocumentationMenu;

