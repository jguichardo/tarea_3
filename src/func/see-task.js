import { mostrarMenu, tareas } from "../app.js";

export const verTareas = () => {
  if (tareas.length === 0) {
    console.log("No hay tareas pendientes.!!!");
  } else {
    console.log("\nTareas:");
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea}`);
    });
  }

  mostrarMenu();
};
