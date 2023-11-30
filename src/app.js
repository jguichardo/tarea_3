import readline from "readline";
import { agregarTarea } from "./func/add-task.js";
import { verTareas } from "./func/see-task.js";
import { eliminarTarea } from "./func/delete-task.js";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export let tareas = [];

export const mostrarMenu = () => {
  console.log("\nAsitente de Tareas");
  console.log("1. Agregar Tarea");
  console.log("2. Mostrar Tareas");
  console.log("3. Eliminar Tarea");
  console.log("4. Salir");
  rl.question("Eliger una opción: ", (opction) => {
    switch (opction) {
      case "1":
        agregarTarea();
        break;

      case "2":
        verTareas();
        break;

      case "3":
        eliminarTarea();
        break;

      case "4":
        rl.close();
        break;
      default:
        console.log("Opción no válido, intenta de nuevo.");
        mostrarMenu();
        break;
    }
  });
};

mostrarMenu();
