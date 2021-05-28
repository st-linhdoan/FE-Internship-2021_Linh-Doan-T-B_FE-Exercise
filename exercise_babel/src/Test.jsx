import React from "react";
import '../style.scss'
function Test() {
  const handleClick = (name) => {
    alert(`Xin chào ${name}`);
    console.log(A);
  }
  return (
    <div>
      <h1>
        HELLO EVERYONE
            </h1>
      <button onClick={() => handleClick("Linh")}>Click me</button>
    </div>
  );
}

export default Test;
