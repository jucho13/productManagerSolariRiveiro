/**** Actividad en Clase ***************/
/**
 * Dados los objetos indicados:
 * Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
 * consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
 * Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
 */

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

let objetosArray=[];
let sumador=0;
objetos.forEach((objeto)=>{
    let objetoKeys= Object.keys(objeto);
    let objetoValues=Object.values(objeto);
    // console.log(objetoKeys);
    objetoKeys.forEach(key =>{
        if (!objetosArray.includes(key)) objetosArray.push(key);
    }
        )
    objetoValues.forEach((value)=>{
        sumador=sumador+value;
    }
    
    )
    })
    

console.log(objetosArray);
console.log(sumador);