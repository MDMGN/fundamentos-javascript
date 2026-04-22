const $btnAdd = document.querySelector("button");
const $inputTask = document.querySelector("input");
const $list = document.querySelector("ul");

$btnAdd.addEventListener("click", addTask);

function addTask() {
  const task = $inputTask.value.trim();

  if (task) {
    const $li = document.createElement("li");
    $li.textContent = task;
    $list.appendChild($li);
  }

  $inputTask.value = "";
  $inputTask.focus();
}
