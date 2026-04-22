// Tipos de variables
// var -> no se recomienda su uso
// let -> variable de bloque, se puede reasignar
// const -> variable de bloque, no se puede reasignar

// Declaración de variables
let nombre = "Juan";
let apellido = "Pérez";

const edad = 30;

const saludo =
  "Hola, mi nombre es " +
  nombre +
  " " +
  apellido +
  " y tengo " +
  edad +
  " años.";

// templates stirings -> interpolación de variables
const greeting = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
//console.log({ saludo, greeting });

// Tipos de datos primitivos

// String -> cadena de texto
// Number -> números
// Boolean -> true o false
// Null -> ausencia de valor
// Undefined -> variable no definida

// Tipos de datos compuestos

// Object -> objetos
const person = {
  name: "Juan",
  age: 30,
  isStudent: false,
  greeting: function () {
    return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
  },
};

person.name = "Pedro";
console.log(person.greeting());

// Array -> arreglos
const array = [1, "Hola", true, 4, person];
array.push("Nuevo elemento");
console.log(array);
