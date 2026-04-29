export default function TodoItem(task = "") {
  return `
  <div>
    <span>${task}</span>
    <button class="btn-edit">Editar</button> 
    <button class="btn-delete">Eliminar</button>
   </div>
  `;
}
