// store.js

const todosStore = JSON.parse(localStorage.getItem("todos")) ?? [];

function addTodo(todo) {
  todosStore.push(todo);
  localStorage.setItem("todos", JSON.stringify(todosStore));
}

function removeTodo(id) {
  const updated = todosStore.filter((todo) => todo.id !== id);
  localStorage.setItem("todos",JSON.stringify(updated))
}

function updateTodo(newTodo) {
  const updated = todosStore.map((todo) => {
    return todo.id === newTodo.id ? newTodo : todo;
  });
  localStorage.setItem("todos", JSON.stringify(updated));
}

const getTodos = () => todosStore;

export { addTodo, getTodos, removeTodo, updateTodo };
