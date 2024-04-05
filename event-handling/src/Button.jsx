function printHello() {
  console.log("Hello ");
}
function printBye() {
  console.log("bye");
}
export default function Button() {
  return (
    <>
      <button onClick={printHello}>Click me!</button>
      <p onClick={printBye}>this paragraph says bye</p>
    </>
  );
}
