// store.js

const todosStore = JSON.parse(localStorage.getItem("todos")) ?? [];

function addTodo(todo) {
  todosStore.push(todo);
  localStorage.setItem("todos", JSON.stringify(todosStore));
}

function removeTodo(id) {}

const getTodos = () => todosStore;

export { addTodo, getTodos, removeTodo };
