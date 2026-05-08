export default function TodoItem(
  todo,
  onEdit = (newTodo) => {},
  onDelete = (id) => {},
) {
  const { id, name, completed } = todo;
  // creamos la referencia al elemento li
  const $li = document.createElement("li");

  // Le asignamos el contenido HTML al elemento li, incluyendo los botones de editar y eliminar
  $li.innerHTML = `
  <div class="todo-item">
    <input type="text" value="${name}" readonly />
    <button class="btn-edit">Editar</button> 
    <button class="btn-delete">Eliminar</button>
   </div>
  `;
  // Registramos los eventos de click para los botones de editar y eliminar, llamando a las funciones onEdit y onDelete respectivamente
  const $btnEdit = $li.querySelector(".btn-edit"); // "[readonly]" es un selector de atributo que selecciona el elemento input que tiene el atributo readonly
  const $btnDelete = $li.querySelector(".btn-delete");
  const $input = $li.querySelector("input");

  $btnEdit.addEventListener("click", () => {
    $input.classList.toggle("editable");

    if ($input.hasAttribute("readonly")) {
      $input.removeAttribute("readonly");
      $btnEdit.textContent = "Guardar";
    } else {
      $input.setAttribute("readonly", true);
      $btnEdit.textContent = "Editar";
      const newTodo = { id, name: $input.value.trim(), completed };
      onEdit(newTodo);
    }
  });

  $btnDelete.addEventListener("click", () => {
    $li.remove();
    onDelete(id);
  });
  // Retornamos el elemento li creado
  return $li;
}
