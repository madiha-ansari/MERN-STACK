import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
      <p>You typed: {text}</p>
    </div>
  );
};

export default App;
