import React from "react";

function HelloName() {
  const [name, setName] = React.useState("");
  const [newName, setNewName] = React.useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const onClickSub = () => {
    setNewName(name);
    setName("");
  };
  return (
    <>
      <div className="inputContainer">
        <h2>↓inputの値を表示↓</h2>
        <div className="inputContaint">
          <h1>ID：{newName}</h1>
          <input
            placeholder="IDを入力してください"
            value={name}
            onChange={handleChange}
          />
          <button onClick={onClickSub}>決定</button>
        </div>
      </div>
    </>
  );
}

export default HelloName;
