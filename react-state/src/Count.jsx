import { useState } from "react";
function init() {
  console.log("normal function");
  return Math.floor(Math.random() * 5);
}
export default function Count() {
  // initialization using normal function, do not invoke fun here
  let [count, setCount] = useState(init);

  let incCount = () => {
    setCount((currValue) => {
      return currValue + 1;
    });
    setCount((currValue) => {
      return currValue + 1;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
