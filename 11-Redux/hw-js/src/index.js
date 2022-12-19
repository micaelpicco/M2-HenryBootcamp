const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, impar, asincrono } = require("./actions");

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  valor.innerText = store.getState().contador;
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la funcion 'renderContador':
renderContador();
// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);
// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
let suma = document.getElementById("incremento");
suma.onclick = () => store.dispatch(incremento());

let resta = document.getElementById("decremento");
resta.onclick = () => store.dispatch(decremento());

let sumIfOdd = document.getElementById("incrementoImpar");
sumIfOdd.onclick = () => {
  if (store.getState().contador % 2 !== 0) return store.dispatch(impar());
};

let async = document.getElementById("incrementoAsync");
async.onclick = () =>
  setTimeout(() => {
    store.dispatch(asincrono());
  }, 1000);
