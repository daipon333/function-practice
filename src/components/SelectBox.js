import React from "react";

function SelectBox() {
  const [val, setVal] = React.useState("selecter");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <h2>↓プルダウンで選んだ値を表示↓</h2>
      <h3>ランクを選択してください</h3>
      <select value={val} onChange={handleChange}>
        <option value="selecter">選択してください</option>
        <option value="iron">アイアン</option>
        <option value="bronze">ブロンズ</option>
        <option value="silver">シルバー</option>
        <option value="gold">ゴールド</option>
        <option value="pratinum">プラチナ</option>
        <option value="imortal">イモータル</option>
        <option value="rediant">レディアント</option>
      </select>
      <p>選択値：{val}</p>
    </>
  );
}

export default SelectBox;
