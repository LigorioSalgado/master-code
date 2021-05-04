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

//   const data = ['circulo_1', 'circulo_2']

//   svg
//     .selectAll('circle')
//     .data(data)
//     .enter()
//     .append('circle')
//     .attr('cx', (d, i) => {
//       return 200 * (i + 1)
//     })
//     .attr('cy', 70)
//     .attr('r', 70)
//     .attr('id', (d) => d)
//     .style('fill', 'purple')

// Así como creamos un circulo ahora crear un reactangulo con d3

// Eventos
// Selecionar que elemento quiero para agregar un evento
// Escuchar un evento con on y devuelve el callback
// svg.select('#circulo_1')
//     .on('click', (e, d) => {
//       alert(`Le diste click a: ${d}`)
//     });

// svg.select('#circulo_2')
//     .on('mouseover', () => {
//       svg.select('#circulo_2')
//         .style('fill', 'yellow')
//     }).on('mouseout', () => {
//       svg.select('#circulo_2')
//       .style('fill', 'purple')
//     })

// 5 min para cuando quite el mouse regrese a morado


// Grafica de planetas.
// d3.csv('planetas.csv')
//   .then((result) => result.map((d) => ({
//     planet: d.planeta,
//     distance: parseInt(d.kmDistanciaAlSol),
//     diameter: parseInt(d.diametroKm)
//   })))
//   .then((data) => {
//     const width = 2400;
//     const height = 700;

//     const maxDistance = d3.max(data, (d) => d.distance);
//     const minDistance = d3.min(data, (d) => d.distance);
    
//     const maxDiameter = d3.max(data, (d) => d.diameter)
    
//     // Escalar
//     const escalaDistancia = d3.scaleLinear()
//       .range([10, width - 25])
//       .domain([minDistance, maxDistance]);

//     const escalaDiametro = d3.scaleLinear()
//       .range([0, (width - 25)])
//       .domain([0, maxDiameter])

//     const color = d3.scaleOrdinal()
//       .range(['#424E4C', '#7C5531', '#7BBBF0', '#CC522C', '#A67845', '#EBA340', '#75D6F1', '#2C73A9', '#FFFFF'])
//       .domain(data.map((p) => p.planet))


//     const svg = d3
//       .select('body')
//       .append('svg')
//       .attr('width', width)
//       .attr('height', height)

//     svg
//       .selectAll('circle')
//       .data(data)
//       .enter()
//       .append('circle')
//       .attr('cx', (d) => escalaDistancia(d.distance))
//       .attr('cy', height / 2)
//       .attr('r', (d) => escalaDiametro(d.diameter / 10))
//       .style('fill', (d) => color(d.planet))
//       .attr('id', (d) => d.planet)

//     console.log(data);  
//   }).catch((err) => {
//     console.log(err);
//   });


d3.csv('AutosVendidosFeb2016.csv')
  .then((result) => result.map((d) => ({
    name: d.GRUPO,
    quantity: parseInt(d.CANTIDAD)
  })))
  .then((data) => {
    const chartWidth = 1900;
    const chartHeight = 600;

    data.sort((a,b) => a.quantity > b.quantity ? -1 : 1)
    // console.log(data);

    const margin = { top: 20, rigth: 20, bottom: 40, left: 45 };

    const width = chartWidth - margin.rigth - margin.left;
    const height = chartHeight - margin.top - margin.bottom;

    const maxQuantity = d3.max(data, (d) => d.quantity);

    const scalaY = d3.scaleLinear()
      .range([ height, 0 ])
      .domain([ 0, maxQuantity])

    const scalaX = d3.scaleBand()
      .rangeRound([0, width])
      .domain(data.map(d => d.name))
      .paddingInner(0.1)

    // Axis --> Ayuda a definir los ejes
    const xAxis = d3.axisBottom(scalaX);
    const yAxis = d3.axisLeft(scalaY);

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    svg
      .append('g')
      .attr('class', 'y axis')
      .call(yAxis)

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

    const rect = svg.selectAll('body')
      .data(data)
      .enter()
        .append('rect')
        .attr('x', (d) =>  scalaX(d.name))
        .attr('width', scalaX.bandwidth()) // Ancho de la barra
        .attr('y', (d) => scalaY(d.quantity))
        .attr('height',  (d) => height - scalaY(d.quantity))
        .attr('fill', 'steelblue')
        // RESPUESTA ACTIVIDAD
        .attr('id', (d) => d.name.replace(' ', '-'))

    const tip = d3 // Creación del tip
      .tip()
      .attr('class', 'd3-tip')
      .html((event, d) => {
        return `${d.name}`
      })

    svg.call(tip); // Agrega mi objeto tip a el SVG

    rect
      .on('mouseover.tip', tip.show)
      .on('mouseout.tip', tip.hide)
      // RESPUESTA ACTIVIDAD
      .on('mouseover', (e, d) => {
        d3.select(`#${d.name}`.replace(' ', '-')).attr('fill', 'red')
      })
      .on('mouseout', (e, d) => {
        d3.select(`#${d.name}`.replace(' ', '-')).attr('fill', 'steelblue')
      })

  // 10 min.
  // Cuando pase el mouse pintar de rojo la barra que está seleccionada.

  }).catch((err) => {
    console.log(err);
  });
