import React from "react";

const options = [
  { value: "shaka", label: "釈迦" },
  { value: "STN", label: "スタイリッシュヌーブ" },
  { value: "jasper", label: "ジャスパー" },
  { value: "", label: "その他" },
];

function Practice1() {
  const [val, setVal] = React.useState("shaka");
  const handleRadioChange = (e) => {
    setVal(e.target.value);
  };
  const [text, setText] = React.useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const getAnswer = () => {
    return val === "" ? text : options.find((o) => o.value === val).label;
  };
  return (
    <>
      <h2>アンケート</h2>
      <h3>好きな配信者を教えて下さい</h3>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            onChange={handleRadioChange}
            checked={val === option.value}
          />
          {option.label}
        </label>
      ))}
      {val === "" && (
        <p>
          自由記入：
          <input value={text} onChange={handleTextChange} />
        </p>
      )}
      <hr />
      <p>回答：{getAnswer()}</p>
    </>
  );
}

export default Practice1;
