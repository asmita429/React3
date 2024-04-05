import { useState } from "react";

export default function Count() {
  // Rendering starts from here to bottom of return statement.
  // initialization
  let [count, setCount] = useState(0);
  console.log("Componnet is rendered! ");
  console.log(`count = ${count}`);

  let incCount = () => {
    // function calling stage, first step, after this stage rendering stars
    setCount(count + 1);
    console.log(`inside incCount, count = ${count}`);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
