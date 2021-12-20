import React from "react";

function SelectBox() {
  const [val, setVal] = React.useState("toyota");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <h2>↓プルダウンで選んだ値を表示↓</h2>
      <select value={val} onChange={handleChange}>
        <option value="toyota">トヨタ</option>
        <option value="honda">ホンダ</option>
        <option value="suzuki">スズキ</option>
      </select>
      <p>選択値：{val}</p>
    </>
  );
}

export default SelectBox;
