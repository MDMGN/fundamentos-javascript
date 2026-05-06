const data = null;

// Operadores de cortocircuito

// El operador OR (||) devuelve el primer valor verdadero que encuentra o el último valor si todos son falsos

const result1 = data || "Valor por defecto";

console.log({ result1 });

// El operador AND (&&) devuelve el primer valor falso que encuentra o el último valor si todos son verdaderos

const result2 = data && "Valor por defecto";

console.log({ result2 });

// Operador ternario -> condición ? valor si es verdadero : valor si es falso

const result3 = data ? "Valor positivo" : "Valor falso";

console.log({ result3 });

// Nullish coalescing operator (??) -> devuelve el primer valor que no sea null o undefined

const result4 = data ?? "Valor por defecto";

console.log({ result4 });

// Optional chaining (?.) -> permite acceder a propiedades de un objeto sin causar un error si la propiedad no existe

const user = { name: "Darren", email: "darren@example.com" };

console.log(user.email?.trim()); // Si user.email es undefined o null, no se intentará llamar a trim() y el resultado será undefined en lugar de causar un error.

console.log(user.info?.address?.street); // Si user.info es undefined o null, no se intentará acceder a address.street y el resultado será undefined en lugar de causar un error.
