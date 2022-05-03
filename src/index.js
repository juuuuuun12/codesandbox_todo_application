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

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンのテキストを取得
    const completeText = completeButton.parentNode.firstChild.textContent;

    // 押された完了ボタンの親タグ（li）を未完了リストから削除
    const deleteTarget = completeButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = completeText;

    // button(戻る)タグ生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      alert("戻す");
    });

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(returnButton);

    li.appendChild(div);

    // 完了のリストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button") // id「add-button」に対して
  .addEventListener("click", () => onClickAdd()); // クリックした時に、functionを呼ぶ
