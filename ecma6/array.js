
const myArray = [1,2,3,4,5,6]

//Map ---> convierte un arreglo en otro arreglo distinto
// Ej -> Necesito sacar el cuadrado de cada numero en myArray
const arrayCuadrado = []
for(let i = 0; i < myArray.length; i++){
    const numero = myArray[i];
    arrayCuadrado.push(numero**2) //va a meter el cuadrado de los numeros
}

// console.log("El cuadrado de mis numeros es: ",arrayCuadrado)

const arrayCuadrado2 = myArray.map((numero) => {
    return numero ** 2 //Siempre tengo que devolver un valor
})

// console.log("El cuadrado de mis numeros con map es: ",arrayCuadrado2)

//a gregar la masa corporal a cada objeto
const team = [
    {name:"Edwin", weigth:70, heigth:1.8},
    {name:"Raul", weigth:60, heigth:1.7},
    {name:"Mali", weigth:40, heigth:1.5}
]

// buscar que numero de myArray son multiplos de 2
const arrayMultiplo = []
for(let i = 0; i < myArray.length; i++){
    const numero = myArray[i];
    if(numero % 2 === 0){
        arrayMultiplo.push(numero)
    }
}

// console.log("Los numeros multiplos de 2 son: ", arrayMultiplo)

//filter ---> filtra un arreglo y crea uno nuevo
const arrayMultiplo2 = myArray.filter((numero) =>{
    return numero % 2 === 0 // tiene que haber una sentencia logica
})

// console.log("Los numeros multiplos de 2  con filter son: ", arrayMultiplo2)
// console.log(myArray)

// quiero encontar el 5 en myArray

let numeroEncontrado = 0
for(let i = 0; i < myArray.length; i++){
    const numero = myArray[i];
    if(numero  === 5){
        numeroEncontrado = numero
    }
}

// console.log("Encontre el numero ", numeroEncontrado)

//find ---> busca dentro de mi arreglo y regresa la primer coincidencia
const numeroEncontrado2 = myArray.find((numero) =>{
    return numero === 9
})

// console.log("Encontre el numero con find ", numeroEncontrado2)


 
const myArrayDos = [
    {
        name: 'Mariana',
        age: 44
    },
    {
        name: 'Juan',
        age: 19
    },
    {
        name: 'Viviana',
        age: 10
    },
    {
        name: 'Erwino',
        age: 22
    }
]
// [ { name: 'Mariana', age: 44 }, { name: 'Erwino', age: 22 } ]
const miArrayFiltered = myArrayDos.filter((person) => {
    return person.age >= 20
});
const miOtroArrayDeNombres = miArrayFiltered.map((person) => person.name)

const miArrayEnTodo = myArrayDos.filter((person) => person.age >= 20).map((person) => person.name)

console.log(miOtroArrayDeNombres);
console.log(miArrayEnTodo);