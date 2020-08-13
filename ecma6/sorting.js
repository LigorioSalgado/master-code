const frutas = ['manzana', 'banana', 'guanabana']
frutas.sort();
// console.log(frutas);

const misNumeros = [1,10,2,5,7,3]
// misNumero.sort()
// console.log(misNumero);
misNumeros.sort((a, b) => {
    // console.log('a: ', a);
    // console.log('b: ', b);
    // console.log(a-b);
    // console.log('----------');
    // NEGATIVO: El primer elemento tiene que estar a la izquierda del segundo elemento
    // POSITIVO: El primer elemento tiene que estar a la derecha del segundo elemento
    // 0: Los elemento que se comparan son los mismos
    return a - b
})

const datosPersonas = [
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




datosPersonas.sort((a, b) => {
    return a.age - b.age
});

console.log(datosPersonas);