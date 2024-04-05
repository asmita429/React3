function handleClick() {
  console.log("Hello ");
}
function handleMouseOver() {
  console.log("Mouse moved over a paragraph ");
}
function handleDblClick() {
  console.log("double clicked");
}
export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        this paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Sed excepturi ipsam laudantium at sunt suscipit similique illum a
        recusandae in.
      </p>

      <button onDoubleClick={handleDblClick}>Double click!</button>
    </>
  );
}
