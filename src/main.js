import TodoItem from "./components/item";

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
    const $li = document.createElement("li");
    // $li.textContent = task;
    $li.innerHTML = TodoItem(task);
    $list.appendChild($li);

    const $btnEdit = $li.querySelector(".btn-edit");
    const $btnDelete = $li.querySelector(".btn-delete");
    
    // Editar tarea
    $btnEdit.addEventListener("click", () =>  console.log("Editar tarea:", task));
    $btnDelete.addEventListener("click",()=> console.log("Eliminar tarea:", task));
  }

  $inputTask.value = "";
  $inputTask.focus();
}
