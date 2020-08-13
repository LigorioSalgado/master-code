// Operador Ternario 
// (condicion) ? (Si es cierto) : (si es falso)
//ESTO SI SE PUEDE
// const edad = 80
// const mayorEdad = (edad >= 18) ? "Es mayor de edad" : "No es mayor de edad" //sugar syntax
// console.log(mayorEdad)

// //NO SE DEBE HACER ESTO
// const esMaduro = (edad >= 18 && edad <= 50) ? "Es mayor de edad" : (edad > 50) ? "Es una persona madura" : "Es menor de Edad"
// console.log("Maduro ---->", esMaduro)

// let esMaduro2 = ""
// if(edad >= 18 && edad <= 50){
//     esMaduro2 = "Es mayor de edad"
// }else if(edad > 50){
//     esMaduro2 =  "Es una persona madura"
// }else{
//     esMaduro2 =  "Es menor de Edad" 
// }
// console.log("Maduro2 ---->", esMaduro2)

const myconst = "Hay algo"; //falsy  -->un valor en js que se puede tomar como true o false
// "" --->  false
// 0 ---->  false

const myOtraConst = myconst || "Valor por default" //Se ocupa cuando queremos tener un valor por default (or)
 
console.log("Checando valores: ", myOtraConst)


