// FOREACH
// const miArray = ['manzana', 'pera', 'platano', 'kiwi']
// for (var i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }

// miArray.forEach(function (element) {
//     console.log(element)
// })

// function callbackDelForEach(element) {
//     console.log(element);
// }

// miArray.forEach(callbackDelForEach)

// miArray.forEach((element) => {
//     console.log(element);
// });


const miArray = ['🚗','🍤', '🍫', '☕️']

// for(let emoji of miArray) {
//     console.log(emoji);
// }
// console.log('----------------');
// for(let i in miArray) {
//     console.log(i);
// }

// const miObj = { name: 'Carro', emoji: '🚗'}
// for (let key in miObj) {
//     console.log(key);
// }

const array = [{ name: 'Carro', emoji: '🚗'}, { name: 'Carro 2', emoji: '🚗 2'}]

for (let obj of array) {
    console.log(obj);
}