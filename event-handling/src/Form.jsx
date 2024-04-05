function handleFormSubmit(event) {
  event.preventDefault();
  console.log("form submitted!");
}
export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="enter name" />
      <button>Submit</button>
    </form>

    // <form>
    //   <input type="text" placeholder="enter name" />
    //   <button onClick={handleFormSubmit}>Submit</button>
    // </form>
  );
}
