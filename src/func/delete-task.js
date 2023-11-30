import { rl, tareas, mostrarMenu } from "../app.js";

export const eliminarTarea = () => {
  rl.question("Introduce el número de la tarea a eliminar: ", (numero) => {
    const indice = parseInt(numero) - 1;
    if (indice >= 0 && indice < tareas.length) {
      tareas.splice(indice, 1);
      console.log("Tarea eliminada.");
    } else {
      console.log("Número de tarea no valido.");
    }
    mostrarMenu();
  });
};
