import React, { useState, useCallback } from "react";

const Button = ({ handleClick }) => {
  console.log("Button Rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={memoizedClick} />
    </div>
  );
};

export default App;
