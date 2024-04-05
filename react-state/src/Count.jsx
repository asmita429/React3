import { useState } from "react";

export default function Count() {
  // Rendering starts from here to bottom of return statement.
  // initialization
  let [count, setCount] = useState(0);

  let incCount = () => {
    // function calling stage, first step, after this stage rendering starts

    // callback in updater function, increment by 2+2 = 4
    setCount((currentCount) => {
      return currentCount + 2;
    });
    setCount((currentCount) => {
      return currentCount + 2;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
