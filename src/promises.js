// Promises

const sleep = (time = 0, message = "") => {
  // retornar una nueva promesa
  return new Promise((resolve, reject) => {
    if (!message) {
      reject("No me has dado un mensaje");
      return; // para evitar que se ejecute el código siguiente después de reject
    }
    // simular una operación asíncrona con setTimeout
    setTimeout(() => {
      resolve(message);
    }, time);
  });
};

sleep(3000)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) =>
    response.ok
      ? response.json()
      : Promise.reject("Error al obtener los datos"),
  )
  .then(({ userId, id, title }) =>
    console.log(`My userId : ${userId} and title : ${title}`),
  )
  .catch((error) => console.error(error));
