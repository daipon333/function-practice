import React from "react";

function CheckBox() {
  const [val, setVal] = React.useState([""]);
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
      <h3>得意なキャラクター（ジャンル別）※複数可</h3>
      <label>
        <input
          type="checkbox"
          value="duel"
          onChange={handleChange}
          checked={val.includes("duel")}
        />
        デュエリスト
      </label>
      <label>
        <input
          type="checkbox"
          value="ctr"
          onChange={handleChange}
          checked={val.includes("ctr")}
        />
        コントローラー
      </label>
      <label>
        <input
          type="checkbox"
          value="inis"
          onChange={handleChange}
          checked={val.includes("inis")}
        />
        イニシエーター
      </label>{" "}
      <label>
        <input
          type="checkbox"
          value="sent"
          onChange={handleChange}
          checked={val.includes("sent")}
        />
        センチネル
      </label>
      <p>選択値：{val.join(", ")}</p>
    </>
  );
}
export default CheckBox;
