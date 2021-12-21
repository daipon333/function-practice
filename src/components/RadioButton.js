import React from "react";

function RadioButton() {
  const [val, setVal] = React.useState("vandal");

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <div>
        <h2>↓ラジオボタンで選択した値を表示↓</h2>
        <h3>あなたはどっち派？</h3>
        <label>
          <input
            type="radio"
            value="vandal"
            onChange={handleChange}
            checked={val === "vandal"}
          />
          ヴァンダル派
        </label>
        <label>
          <input
            type="radio"
            value="phantom"
            onChange={handleChange}
            checked={val === "phantom"}
          />
          ファントム派
        </label>
      </div>

      <p>選択値:{val}</p>
    </>
  );
}

export default RadioButton;
