import React from "react";
import styles from "./typography.module.scss";

//this component will create a text tag based on the variant prop.
// for example, if the variant is subtitle1, then it will make a <h6> tag.
// the variant prop is also used to construct a class name that is added to the tag.
// for example, if the variant is subtitle1, then a className = "variant-subtitle1" will be added to the tag.
// this page is linked to the typography.scss style sheet. there are styles for all variannts in there.


//variantMapping allows us to control which tags are created with the vairant prop
const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  p: "p",
};

const Typography = ({ variant, color, children }) => {
  // the children prop provides the text between the Component opening and closing tags
  
  //----------------------------------
  // create a HTML tag

  // the goal is to create a tag in our html based on the value of our variant prop
  // for example, if the variant prop = "subtitle1", we want to create a <h6> </h6> tag in our HTML
  // We do this with a var which is used to create a "dynamic tag". Basically a tag created with javascript.
  // see the W6 Extra resources for more info.   

  // the Tag var will store a h1-h6 or p tag e.g.    Tag = "h6"
  // We look for a match to the variant prop in our variantMapping list.
  // If we can't find a match, we just set it to "p".

  var Tag = variantMapping[variant]? variantMapping[variant] :"p";

  // we have styles for every variant in our style sheet. all styles are prefixed by "variant_"
  // we use the variant prop to create the class name. 
  // e.g. if the variant="subtitle1" we want a classname called "variant_subtitle1"
  // we look for a match to the variant prop in our variantMapping Keys. 
  // If we can't find a match, we just set it to "variant_p"

  var variantmatch = Object.keys(variantMapping).find(i => i===variant);
  var variantclassname = variantmatch? `variant_${variantmatch}` : `variant_p`;

  // we have styles for different colours. all color styles are prefixed by "color_"
  // We check if the color prop contains a keyword. if it does, prefix "color_" to the keyword e.g. "color_error"
  // if it dosen't, we just set it to color_primary

  return (
    <Tag className={`${styles[variantclassname]} ${color? styles[`color_${color}`] : styles[`color_primary`] }` } >
      {children} <br/>
    </Tag>
  );
};

export default Typography;