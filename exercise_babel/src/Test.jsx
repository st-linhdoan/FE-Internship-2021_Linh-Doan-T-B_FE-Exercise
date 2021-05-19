import React from "react";
function Test() {
  const handleClick = (name) => {
    alert(`Xin chào ${name}`);
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
