// Funciones normales

function sumar(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: ambos parámetros deben ser números";
  }
  // console.log(arguments); // objeto similar a un array que contiene los argumentos pasados a la función
  console.log(arguments["0"]);

  return a + b;
}
const n1 = 1;
const n2 = 2;
// Funciones anónimas
const restar = function (a, b) {
  console.log(n1, n2);
  return a - b;
};

let resultado = sumar(4, 5);
console.log("Suma:", resultado);

console.log("Resta:", restar(10, 3));

// Funciones flecha -> no tienen su propio this, no se pueden usar como constructor, no tienen arguments

// const multiplicar = (a, b) => a * b; // Retorno implícito, si la función tiene una sola expresión, se puede omitir el return y las llaves

const multiplicar = (a, b) => {
  console.log(n1, n2);
  return a * b;
}; // si la función tiene una sola expresión, se puede omitir el return y las llaves

console.log("Multiplicación:", multiplicar(6, 7));

// Funciones autoejecutables -> se ejecutan inmediatamente después de ser definidas

(function () {
  console.log(
    "Esta función se ejecuta automáticamente desde una función anónima",
  );
})();

((a, b) => {
  console.log(
    "Esta función se ejecuta automáticamente desde una función flecha",
  );
})(3, 4);
