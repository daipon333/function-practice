import React from "react";
import reactDom from "react-dom";

function HelloName() {
  const [name, setName] = React.useState("daisuke");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>Hello.{name}</h1>
      <input value={name} onChange={handleChange} />
    </div>
  );
}

export default HelloName;
