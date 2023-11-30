import { tareas, mostrarMenu, rl } from "../app.js";

export const agregarTarea = () => {
  rl.question("Introduce la descripción de la tarea: ", (tarea) => {
    tareas.push(tarea);
    console.log("Rarea añadida.");
    mostrarMenu();
  });
};
