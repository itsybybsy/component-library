import styles from "./pages.module.scss"

import Typography from "/src/components/Typography/Typography.js"
import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocumentationTypography = () => {

  const snippet = 
  `
  <Typography variant="h1">h1 Heading</Typography>
  <Typography variant="h2">h2 Heading</Typography>
  
  <Typography variant="h3" color="success" >h3 Heading</Typography>
  <Typography variant="h4" color="error" >h4 Heading</Typography>

  <Typography variant="subtitle1">Subtitle 1</Typography>
  <Typography variant="subtitle2">Subtitle 2</Typography>
  `;

  return (
    <>
      <h2>Typography</h2>
        <p>
            The Typography component provides a consistent set of
            text styles based on a clear typographic scale. Each 
            variant is designed to work harmoniously across your interface for balanced hierarchy and readability.
        </p>
       
       <h2>Customization</h2>
        <p>
            You can easily add, modify, or disable variants to match your design system.
        </p>

        <h2>Semantic Elements</h2>
        <p>
            Typography styles are independent from their HTML elements.
            Use the variantMapping prop to adjust which element each variant renders as.
        </p>

        <h2>Examples</h2>
            
            <div className={styles.glowBox}>
                <Typography variant="h1">h1 Heading</Typography>
                <Typography variant="h2">h2 Heading</Typography>
                
                <Typography variant="h3" color="success" >h3 Heading</Typography>
                <Typography variant="h4" color="error" >h4 Heading</Typography>

                <Typography variant="subtitle1">Subtitle 1</Typography>
                <Typography variant="subtitle2">Subtitle 2</Typography>

                <Typography variant="body1">Carrot cake jelly soufflé jujubes wafer fruitcake cupcake bear claw. Cake pudding sugar plum jujubes cupcake cake danish cotton candy chocolate cake. Icing marshmallow powder gingerbread dessert candy canes. Pie gummies marshmallow croissant topping.</Typography>
                <Typography variant="body2">Carrot cake jelly soufflé jujubes wafer fruitcake cupcake bear claw. Cake pudding sugar plum jujubes cupcake cake danish cotton candy chocolate cake. Icing marshmallow powder gingerbread dessert candy canes. Pie gummies marshmallow croissant topping.</Typography>

                <Typography color="warning">Warning Text</Typography>
                <Typography>Caption Text</Typography>

            </div>

    <h3>Code Snippet</h3>

    <p>Here is an example of how to use the Card component in your project:</p>

    <Codeblock snippet={snippet} />

    </>
  );
}

export default DocumentationTypography;

