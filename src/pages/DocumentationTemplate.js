import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocumentationTemplate = () => {

  const snippet = 
  `
    <Box>
      This Box renders as an HTML section element.
    </Box>
  `;

  return (
    <>
      <h2>Box</h2>
      <p>
        The Box component is a generic container for grouping other components.
        It's a fundamental building block when working with Material UI—you can think of it as a
        div with extra built-in features, like access to your app's theme and the sx prop.
      </p>
      
      <hr />

      <h3>Code Snippet</h3>
      <p>Here is an example of how to use the Box component in your project:</p>
      <Codeblock snippet={snippet} />

    </>
  );
}

export default DocumentationTemplate;
