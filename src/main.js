import { addTodo } from "./store";

const $btnAdd = document.querySelector("button");
const $inputTask = document.querySelector("input");
const $list = document.querySelector("ul");

console.log("button clicked", $btnAdd);

$btnAdd.addEventListener("click", () => {
  addTask();
  $btnAdd.classList.toggle("active");
});

function addTask() {
  const task = $inputTask.value.trim();

  if (task) {
    const id = Date.now().toString(36);
    const todo = { id , name: task, completed: false };
    addTodo(todo);
    // $li.textContent = task;
    //const $li = TodoItem(task);
    // $list.appendChild($li);
  }

  $inputTask.value = "";
  $inputTask.focus();
}
