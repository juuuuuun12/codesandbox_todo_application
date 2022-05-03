import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");

  const p = document.createElement("p");
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button") // id「add-button」に対して
  .addEventListener("click", () => onClickAdd()); // クリックした時に、functionを呼ぶ
