// Intentado un mal parseo de JSON

//console.log(JSON.parse("Hola mundo")); // SyntaxError: Unexpected token H in JSON at position 0

// JSON parseable
// console.log(JSON.parse('{ "message" : "Hola mundo" }')); // {message: "Hola mundo"}

// JSON.stringify -> convierte un objeto a una cadena JSON
// console.log(JSON.stringify({ message: "Hola mundo" })); // '{"message":"Hola mundo"}'

console.log(JSON.stringify("Hola mundo")); // '"Hola mundo"'
