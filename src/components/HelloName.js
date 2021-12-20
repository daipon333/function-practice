import React from "react";

function HelloName() {
  const [name, setName] = React.useState("daisuke");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="inputContainer">
        <h2>↓inputの値を表示↓</h2>
        <div className="inputContaint">
          <h1>Hello.{name}</h1>
          <input value={name} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default HelloName;
