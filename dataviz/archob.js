// DÍA 1 semana 2
console.log('D3', d3); // Validar que tenemos d3 en nuestro proyecto

// Cambiar el color de fondo del body.
d3.select('body').style('background-color', 'pink')


//Cambiar de color los parrafos.
d3.selectAll('p').style('color', () => {
  // Manipular cualquier cosa
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});


// Crear elemento h3 dado un dataset
const dataSet = [3,5,6,8,10,30];

d3
  .select('body') // --> Seleciona el body
  .selectAll('h3') // --> Seleciona todos los h3
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
// console.log(d3.sum(datosRandom));

// // Obtener el elemento máximo del arreglo
// console.log(d3.max(datosRandom));

// // Obtener el elemento minimo del arreglo
// console.log(d3.min(datosRandom));

// // Obtener minimo y máximo
// console.log(d3.extent(datosRandom));

// // Obtener promedio
// console.log(d3.mean(datosRandom));

// //Crear un rango
// console.log(d3.range(1, 11));

// Mini actividad 10 min.
// Crear un P con los datos de cada respuesta de las funciones de arriba


// Día 2

// Cargar un csv 
// FORMA 1: En el callback devuelve un elemento del csv
// d3.csv('CausasDeMortalidadDF2013.csv', (d) => {
//   console.log(d);
// });

// FORMA 2: Con then devuece el arreglo completo de todos los elementos del csv
// d3.csv('CausasDeMortalidadDF2013.csv')
//   .then((result) => {
//     // console.log(result);
//     // RESULTADO DE ACTIVIDAD
//     d3
//       .select('body')
//       .selectAll('div')
//       .data(result)
//       .enter()
//       .append('div')
//       .style('width', (d) => `${(d.Defunciones)}px` )
//       .style('background', 'yellowgreen')
//       .style('margin-bottom', '3px')
//       .text((d) => `${d.Defunciones} por ${d.Causas} `)

//   }).catch((err) => {
//     console.log(err);
//   });
// ACTIVIDAD
// Con los datos que tienes  en el csv crea una gráfica de barras(Como la de méxico y colombia) mostrando la causa de muertes y el número de defunciones


// ESCALAS
// range: El rango es el conjunto de valores resultantes de la función
// domain: Conjunto de los valores

const escalaLinear = d3.scaleLinear()
  .range([0, 100])
  .domain([0, 2000])


// Se utiliza para datos categoricos, siempre respeta el orden
const escalaOrdinal = d3.scaleOrdinal()
  .range(['purple', 'blue'])
  .domain(['setosas', 'versicolor'])


// Le asigna a un conjunto de caategorías un valor dado por el rango
const scalaDeBanda = d3.scaleBand()
  .range([0, 100])
  .domain(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'])




// d3.csv('CausasDeMortalidadDF2013.csv')
//   .then((result) => result.map((r) => ({ nombre: r.Causas, muertes: parseInt(r.Defunciones) })))
//   .then((data) => {
//     console.log(data);
    
//     // Vamos a ordenar nuestro arreglo en base a las muertes
//     data.sort((a, b) => a.muertes > b.muertes ? -1 : 1);

//     // Vamos a escalar linealmente
//     const maxMuertes = d3.max(data, (d) => d.muertes);
    
//     const linear = d3.scaleLinear()
//       .range([0, 1000])
//       .domain([0, maxMuertes])
    
// respuesta de la actividad
//     const scalaColor = d3.scaleLinear()
//       .range(['blue', 'green', 'yellow', 'red'])
//       .domain([0, maxMuertes / 4, maxMuertes / 2, maxMuertes]) 


//     d3
//       .select('body')
//       .selectAll('section')
//       .data(data)
//       .enter()
//       .append('section')
//       .style('width', (d) => `${linear(d.muertes)}px`)
// respuesta de la actividad
//       .style('background-color', (d) => scalaColor(d.muertes))
//       .style('margin-bottom', '3px')
//       .text((d) => d.muertes)


//   }).catch((err) => {
//     console.log(err);
//   });

// actividad
// Generar una gama de colores a partir de las muertes de cada enfermedad:
// rojo --> Más alto
// amarillo
// verde
// azul --> Más bajo
// scaleLinear tiene la habilidad de poder escalar colores.


// Creación de SVG
// const svg = d3
//   .select('body')
//   .append('svg')
//   .attr('width', '500px')
//   svg.selectAll('circle')
//     .data(['click', 'overnout'])
//     .enter()
//     .append('circle')
//     .attr('cx', function (d, i) {
//       return 200 * (i + 1);
//     })
//     .attr('cy', 70)
//     .attr('r', 70)
//     .style('fill', 'purple')
//     .attr('id', function (d) { return d; });
  
  
//   //   // Eventos
//   svg.select('#click')
//     .on('click', function (d, i) {
//       alert('Clicked!')
//     });
  
//   svg.select('#overnout')
//     .on('mouseover', function (d, i) {
//       d3.select(this)
//         .style('fill', 'yellow')
//     })
//     .on('mouseout', function (d, i) {
//       d3.select(this)
//         .style('fill', 'purple');
// });
  
  
  
    // Graficas de puntos
    // d3.csv('planetas.csv')
    // .then((_d) => _d.map(rw => ({
    //   planet: rw.planeta,
    //   distance: +rw.kmDistanciaAlSol,
    //   diameter: +rw.diametroKm
    // })))
    // .then((data) => {
    //   console.log(data);
    //   var width = 1700
    //   var height = 700
  
    //   var maxDistance = d3.max(data, function (d) { return d.distance }); // Obtiene la mayor  distancia de los planetas con respecto al Sol
    //   var minDistance = d3.min(data, function (d) { return d.distance }); // Obtiene la mayor  distancia de los planetas con respecto al Sol
    //   console.log('El tamaño del contenedor y el valor máximo son: ', width, maxDistance);
  
    //   //Crea una escala lineal para las distancias de los planetas
    //   var distancia = d3.scaleLinear()
    //     .domain([minDistance, maxDistance])
    //     .range([10, width - 25]);
        
  
    //   var maxDiameter= d3.max(data, function (d) { return d.diameter });
    //   var minDiameter= d3.min(data, function (d) { return d.diameter });
      
    //   var escala = d3.scaleLinear()
    //     .domain([0,  maxDiameter])
    //     .range([0, (width - 25)]);
        
  
    //   var color = d3.scaleOrdinal()
    //     .domain(data.map((p) => p.planet))
    //     .range(['#424E4C', '#7C5531', '#7BBBF0', '#CC522C', '#A67845', '#EBA340', '#75D6F1', '#2C73A9', '#FFFFF']);
        
    
    //   var svg = d3.select('body')
    //     .append('svg')
    //     .attr('width', width)
    //     .attr('height', height);
  
    //   // Dibuja circulos para cada planeta dentro del svg (Ve el ejemplo de los eventos)
    //   svg.selectAll('circle')
    //     .data(data)
    //     .enter()
    //     .append('circle')
    //     .attr('cx', (d, i) => {
    //       return distancia(d.distance)
    //     })
    //     .attr('cy', (d, i) => height / 2)
    //     .attr('r', (d) => {
    //       return escala(d.diameter / 10)
    //     })
    //     .style('fill', (d) => color(d.planet))
    //     .attr('id', function (d) { return d.planet; });
    // })
    // .catch((err) => {
      
    // });
    
    function filter(d) {
      return {
        name: d.GRUPO,
        quantity: +d.CANTIDAD
      };
    }

    function histogram(data, chartWidth, chartHeight, margin) {
      var width = chartWidth - margin.left - margin.right;
      var height = chartHeight - margin.top - margin.bottom;
    
      // Escalas
      var x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1)
        .domain(data.map(function (d) { return d.name; }));
    
      var y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, function (d) { return d.quantity; })]);
    
      // Definicion de ejes
      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y)
        .ticks(10);   // No entiendo los ticks

      // Remover todo antes
      d3.selectAll('#chart-svg *').remove();
    
      // Crear svg y grupo vacios
      var svg = d3.select('#chart-svg')

      var svg = d3.select('#chart-svg').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
  
      svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis); // Inserta
    
      svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);
    
      const rect = svg.selectAll('body')
        .data(data)
        .enter()
          .append('rect')

          .attr('x', function (d) { return x(d.name); })
          .attr('width', x.bandwidth()) // Ancho de la barra
          .attr('y', function (d) { return y(d.quantity); })
          .attr('height', function (d) { return height - y(d.quantity); })
          .attr('fill', 'steelblue')
    
      const tip = d3.tip().attr('class', 'd3-tip').html(function(event,d) { 
        return JSON.stringify(d); 
      });
      
      svg.call(tip); // Llamar la inicialización del tip

      rect
        .on('mouseover.tip', tip.show)
        .on('mouseout.tip',  tip.hide)
        .on('mouseover', function(d) {
          d3.select(this).attr('fill', 'red');
        })
        .on('mouseout', function() {
          d3.select(this).attr('fill', 'steelblue');
        })

    }

d3.csv('AutosVendidosFeb2016.csv', filter)
    .then((data) => {
        //Sort data
        data.sort(function (a, b) { return a.quantity > b.quantity ? -1 : 1; });

        //Margins of the chart
        var margin = { top: 20, right: 20, bottom: 40, left: 45 };
        var width = 1900;
        var height = 600;
        // Draw histogram
        histogram(data, width, height, margin); 
    }).catch((err) => {
      
    });


