// Ejemplo de uso de for y while en JavaScript
// 1. Contar hasta 10 usando for
for (let i = 1; i <= 10; i++) {
    console.log(i); // Imprime los números del 1 al 10
}

// Programa para Clasificar y Contar Frutas

// 1. Arreglo de frutas
const frutas = ['manzana', 'platano', 'naranja', 'manzana', 'uva', 'banana', 'kiwi', 'naranja', 'manzana'];

// 2. Objeto para almacenar el conteo
const conteoFrutas = {};

// 3. Recorremos el arreglo con for
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++; // Si ya existe, suma 1
    } else {
        conteoFrutas[fruta] = 1; // Si no existe, inicializa con 1
    }
}

// 4. Mostramos los resultados
console.log("Conteo usando ciclo for:");
for (const fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}

// Versión con ciclo while (opcional)
console.log("\nConteo usando ciclo while:");
    
const conteoFrutasWhile = {}; // Nuevo objeto para el while
let j = 0; // Inicializamos contador

while (j < frutas.length) {
    const fruta = frutas[j];
    conteoFrutasWhile[fruta] = (conteoFrutasWhile[fruta] || 0) + 1;
    j++; // Incrementamos contador
}

// Mostramos resultados del while
for (const fruta in conteoFrutasWhile) {
    console.log(`${fruta}: ${conteoFrutasWhile[fruta]}`);
}


/*Conteo usando ciclo for:
manzana: 3
platano: 2
naranja: 2
uva: 1
kiwi: 1

Conteo usando ciclo while:
manzana: 3
platano: 2
naranja: 2
uva: 1
kiwi: 1
*/

