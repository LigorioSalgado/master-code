console.log('D3', d3); // Validar que tenemos d3 en nuestro proyecto

// Cambiar el color de fondo del body.
d3.select('body').style('background-color', 'pink')


//Cambiar de color los parrafos.
d3.selectAll('p').style('color', () => {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});


// Crear elemento h3 dado un dataset
const dataSet = [3,5,6,8,10,30]

d3
  .select('body') // --> Seleciona el body
  .selectAll('h3') // -->Seleciona todos los h3
  .data(dataSet) // --> La info con la que d3 va a trabajar
  .enter()
  .append('h3') // --> Por cada elemento en dataset crea un h3
  .text((d) => { // El callback nos pasa por parametro el dato que está iterando
    return `Soy el numero ${d}`; // el return inserta el texto
  });



// Hacer una barra por cada pais segun su porcentaje
const paises = [
  { nombre : 'mexico', porcentaje : 875, color: 'green'},
  { nombre : 'colombia', porcentaje : 763, color: 'yellow'}
];

d3
  .select('body')
  .selectAll('div')
  .data(paises)
  .enter()
  .append('div')
  .style('height', '40px')
  .style('margin-bottom', '7px')
  .style('padding', '5px')
  .style('background', (d) => {
    return d.color;
  })
  .style('width', (d) => {
    return `${d.porcentaje}px`
  })
  .text((d) => {
    return `${d.nombre} ${d.porcentaje}`
  })


// Funciones utilies para arreglos.
const datosRandom = [21,43,12,46,35,67,99,34,87,1]

// Suma todos los datos
console.log(d3.sum(datosRandom));

// Obtener el elemento máximo del arreglo
console.log(d3.max(datosRandom));

// Obtener el elemento minimo del arreglo
console.log(d3.min(datosRandom));

// Obtener minimo y máximo
console.log(d3.extent(datosRandom));

// Obtener promedio
console.log(d3.mean(datosRandom));

//Crear un rango
console.log(d3.range(1, 11));

// Mini actividad 10 min.


d3.csv('CausasDeMortalidadDF2013.csv', function (data2) {
  d3.select('body')
    .selectAll('div')
    .data(data2)
    .enter()
    .append('div')
    .style('width', function (d) {
      return d.Defunciones / 20 + 'px';
    })
    .style('background-color', 'yellowgreen')
    .style('margin-bottom', '3px')
    .style('padding', '1px')
    .text(function (d) {
      return d.Defunciones;
    });
})
