import React from "react";

function CheckBox() {
  const [val, setVal] = React.useState(["js"]);
  const handleChange = (e) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter((item) => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }
  };

  return (
    <>
      <h2>↓チェックボックスの値を配列として表示↓</h2>
      <label>
        <input
          type="checkbox"
          value="js"
          onChange={handleChange}
          checked={val.includes("js")}
        />
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          value="python"
          onChange={handleChange}
          checked={val.includes("python")}
        />
        Python
      </label>
      <label>
        <input
          type="checkbox"
          value="java"
          onChange={handleChange}
          checked={val.includes("java")}
        />
        Java
      </label>
      <p>選択値：{val.join(", ")}</p>
    </>
  );
}
export default CheckBox;
