import Box from "/src/components/Box/Box.js";
import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocumentationBox = () => {

    const snippet = 
    `
        <Box variant="Primary">Primary</Box>
        <Box variant="Secondary">Secondary</Box>
        <Box variant="Primary" outlined>Outlined</Box>
    `;

    return (
      <>
        <h2>Box (Button) Component</h2>

        <p>
            The Box component is a simple button element used to display primary actions in the interface.
            It comes in multiple styles to fit different use cases.
        </p>

        <ul>
            <li><strong>Primary:</strong> Used for the main action on a page.</li>
            <li><strong>Secondary:</strong> Used for less important or supporting actions.</li>
            <li><strong>Outlined:</strong> A transparent version with a colored border.</li>
        </ul>
        
        <p>Each button includes a hover effect for better interactivity and visual feedback.</p>

        <div>
            <Box variant="Primary">Primary</Box>
            <Box variant="Secondary">Secondary</Box>
            <Box variant="Primary" outlined>Outlined</Box>
        </div>
        
        <h3>Code Snippet</h3>

        <p>Here is an example of how to use the Button component in your project:</p>

        <Codeblock snippet={snippet} />

      </>
    );
  }
  
  export default DocumentationBox;
  