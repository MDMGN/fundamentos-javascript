export function render(container, items, renderItem) {
  const safeItems = Array.isArray(items) ? items : [];
  container.innerHTML = null; 
  // Limpia el contenido del contenedor antes de renderizar los nuevos elementos
  safeItems.forEach((item) => {
    const $item = renderItem(item);
    container?.appendChild($item);
  });
}
