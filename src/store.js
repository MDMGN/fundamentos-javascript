const todosStore = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo({ id, name, completed }) {
  const task = { id, name, completed };
  todosStore.push(task);
  localStorage.setItem("todos", JSON.stringify(todosStore));
  console.log(todosStore);
}

function removeTodo(id) {}

const getTodos = () => todosStore;

export { addTodo, getTodos, removeTodo };
