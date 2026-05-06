export default function TodoItem(todo, onEdit = () => {}, onDelete = () => {}) {
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
  const $btnEdit = $li.querySelector(".btn-edit");
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
    }
  });

  $btnDelete.addEventListener("click", () => $li.remove());

  // Retornamos el elemento li creado
  return $li;
}
