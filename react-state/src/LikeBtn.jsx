import { useState } from "react";

export default function LikeBtn() {
  // state variable
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setCount] = useState(0);
  let toggle = () => {
    // state method
    setIsLiked(!isLiked);
    setCount(clicks + 1);
  };

  let clickStyle = { color: "red" };
  return (
    <>
      <p onClick={toggle}>Clicks = {clicks}</p>
      <p onClick={toggle}>
        {isLiked == true ? (
          <i className="fa-solid fa-heart" style={clickStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
