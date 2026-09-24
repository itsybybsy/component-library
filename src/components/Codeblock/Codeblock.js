import React from "react";
import "prismjs/themes/prism-okaidia.css";
import styles from "./codeblock.module.scss";


import Prism from "prismjs";
import { useEffect } from "react";

const Codeblock = ({snippet}) => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <pre><code className="language-html">{snippet}</code></pre>
    </>
  );
}

export default Codeblock;
