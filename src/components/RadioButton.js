import React from "react";

function RadioButton() {
  const [val, setVal] = React.useState("meat");

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <div>
        <h2>↓ラジオボタンで選択した値を表示↓</h2>
        <label>
          <input
            type="radio"
            value="beauty"
            onChange={handleChange}
            checked={val === "beauty"}
          />
          綺麗派
        </label>
        <label>
          <input
            type="radio"
            value="cute"
            onChange={handleChange}
            checked={val === "cute"}
          />
          可愛い派
        </label>
      </div>

      <p>選択値:{val}</p>
    </>
  );
}

export default RadioButton;
