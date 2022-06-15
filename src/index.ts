"use strict";

let contadorSeSietes: number = 0;

function lanzarDados() {
  for (let i = 0; i < 1000; i++) {
    let lanzamiento: number = 0;
    lanzamiento = Math.floor(Math.random() * (7 - 1) + 1);
    lanzamiento = lanzamiento + Math.floor(Math.random() * (7 - 1) + 1);
    console.log(lanzamiento);
    if (lanzamiento === 7) {
      contadorSeSietes++;
    }
  }
}

lanzarDados();
console.log("la cantidad de veces que salio 7 es");
console.log(contadorSeSietes);
