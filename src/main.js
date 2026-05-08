import TodoItem from "./components/item";
import { render } from "./helpers";
import { addTodo, getTodos, removeTodo, updateTodo } from "./store";

const $btnAdd = document.querySelector("button");
const $inputTask = document.querySelector("input");
const $list = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", () => {
  // Renderiza la lista de tareas al cargar la página
  render($list, getTodos(), (todo) =>
    TodoItem(
      todo,
      (newTodo) => updateTodo(newTodo),
      (id) => removeTodo(id),
    ),
  );
});

$btnAdd.addEventListener("click", () => {
  addTask();
  $btnAdd.classList.toggle("active");
});

function addTask() {
  const task = $inputTask.value.trim();

  if (task) {
    const id = Date.now().toString(36);
    const todo = { id, name: task, completed: false };
    addTodo(todo); // Agrega la tarea al store
    // Renderiza la lista de tareas actualizada
    render($list, getTodos(), (todo) =>
      TodoItem(
        todo,
        (newTodo) => updateTodo(newTodo),
        (id) => removeTodo(id),
      ),
    );
  }

  $inputTask.value = "";
  $inputTask.focus();
}
