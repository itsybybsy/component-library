import Codeblock from "/src/components/Codeblock/Codeblock.js";
import Card from "/src/components/Card/Card.js";

const DocumentationCard = () => {
  const snippet = `
<Card>
  <h2>A Standard Card</h2>
  <p>This is an example of a standard card</p>
</Card>

<Card variant="outlined">
  <h2>An Outlined Card</h2>
  <p>This is an example of an outlined card</p>
</Card>
  `;

  return (
    <div>
      <h2>Card Component</h2>

      <p>
        The <strong>Card</strong> component is a versatile container for displaying content. 
        It can hold headings, text, images, or other components. You can use it as a standard card 
        or apply variants like <code>outlined</code> to change its appearance.
      </p>

      <hr />

      <h2>Examples</h2>

        <div style={{ margin: "15px 0" }}>
          <p><strong>A standard card:</strong></p>
          <Card>
            <h2>A Standard Card</h2>
            <p>This is an example of a standard card.</p>
          </Card>
        </div>

        <div style={{ margin: "15px 0" }}>
          <p><strong>An outlined card:</strong></p>
          <Card variant="outlined">
            <h2>An Outlined Card</h2>
            <p>This is an example of an outlined card.</p>
          </Card>
        </div>

      <h3>Code Snippet</h3>

      <p>Here is an example of how to use the Card component in your project:</p>

      <Codeblock snippet={snippet} />
    </div>
  );
};

export default DocumentationCard;
