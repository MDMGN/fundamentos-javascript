// Spread operator

const numbers = [1, 2, 3];

//numbers.push(4); // Modifica el array original

// Spread operator en arrays -> permite expandir los elementos de un array

const newNumbers = [...numbers, 5]; // Crea un nuevo array con los elementos de numbers y el nuevo elemento 5

console.log({ numbers, newNumbers });

console.log([-2, -1, 0, ...newNumbers, 6, 7, 8]); // [-2, -1, 0, 1, 2, 3, 4, 5, 6 , 7, 8]

const [, a, b, c] = numbers; // Crea una copia del array numbers

console.log({ a, b, c });

// Spread operator en objetos -> permite expandir las propiedades de un objeto

const person = {
  name: "Juan",
  age: 30,
};

//person.email = "darren@example.com";

const newPerson = { ...person, email: "juan@example.com" }; // Crea un nuevo objeto con las propiedades de person y la nueva propiedad email

console.log({ newPerson, person });

function sumar(...numbers) {
  let total = 0;

  for (const number in numbers) {
    total += numbers[number];
  }

  return total;
}

console.log(sumar(1, 2, 3, 4, 5, 6, 4, 5));

function getMessage({ name = "Jhon Doe", age = 0 }) {
  // return `Hola, mi nombre es ${name ?? "Jhon Doe"} y tengo ${age ?? 0} años.`;
  return `Hola, mi nombre es ${name} y tengo ${age} años.`;
}
console.log(getMessage2(person));

function getMessage2(person) {
  const { age, name, email = "default@example.com" } = person; // Desestructuración de objetos -> permite extraer las propiedades de un objeto y asignarlas a variables
  // return `Hola, mi nombre es ${name ?? "Jhon Doe"} y tengo ${age ?? 0} años.`;
  return `Hola, mi nombre es ${name} y tengo ${age} años. ${email}`;
}
