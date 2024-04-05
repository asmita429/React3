import { useState } from "react";

export default function Count() {
  // Rendering starts from here to bottom of return statement.
  // initialization
  let [count, setCount] = useState(0);
  //   gets printed 3times then stops
  console.log("re-rendered!");

  let incCount = () => {
    // function calling stage, first step, after this stage rendering starts
    // react stops re-rendering when it finds there is no change in state variable's value
    setCount(13);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
