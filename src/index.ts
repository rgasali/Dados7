"use strict";
let btnArrojarDados = <HTMLButtonElement>(
  document.getElementById("btnArrojarDados")
);
let divRespuesta = <HTMLDivElement>document.getElementById("divRespuesta");
let contadorDeSietes: number = 0;

function lanzarDados() {
  for (let i = 0; i < 1000; i++) {
    let lanzamiento: number = 0;
    lanzamiento = Math.floor(Math.random() * (7 - 1) + 1);
    lanzamiento = lanzamiento + Math.floor(Math.random() * (7 - 1) + 1);
    if (lanzamiento === 7) {
      contadorDeSietes++;
    }
  }
}

btnArrojarDados.addEventListener("click", () => {
  lanzarDados();
  divRespuesta.innerHTML = String(
    `la cantidad de veces que salio 7 es ${contadorDeSietes}`
  );
  contadorDeSietes = 0;
});
