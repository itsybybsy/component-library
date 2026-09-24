import React from "react";
import AppBar from "/src/components/AppBar/AppBar.js";
import Codeblock from "/src/components/Codeblock/Codeblock.js";

const DocumentationAppBar = () => {

  const snippet = 
  `
    <AppBar title="MyApp" links={['Home', 'About', 'Contact']} />
  `;

  return (
    <div>
      <h2>AppBar Component</h2>
      <p>
        A simple top navigation bar with a title and optional links.
      </p>

      <h3>Example:</h3>
      <AppBar title="MyApp" links={['Home', 'About', 'Contact']} />
      
      <h3>Code Snippet</h3>

      <p>Here is an example of how to use the AppBar component in your project:</p>

      <Codeblock snippet={snippet} />

    </div>
  );
};

export default DocumentationAppBar;