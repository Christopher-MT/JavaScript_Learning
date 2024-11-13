//Ejercicio  de conseptos basicos de JavaScript, como variables, arrays, funciones, condicionales y bucles. ejercicio sobre una lista de tareas pendientes ("TO-DO LIST").

let tareas = []

const agregarTareas = tarea =>{
    tareas.push(tarea);
    console.log(`tarea "${tarea}"agreagada a la lista`)
}

const mostrarTareas = () => {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1 }. ${tareas[i]}`);
    }
}

function completarTarea(indice)  {
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice] += " (completada)";
        console.log(`Tarea  ${indice + 1} marcada como completada`);
    }else{
        console.log("Indice de tarea inválido.");
    }
}

agregarTareas("Lavar los platos");
agregarTareas("Hacer la compra");
agregarTareas("Estudiar JavaScript");

mostrarTareas();

completarTarea(2);

mostrarTareas();