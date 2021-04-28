
// Día 2 semana 2
// Leer datos desde un csv
function loadCsv() {
    return d3.csv('CausasDeMortalidadDF2013.csv')
  }
  
  // loadCsv().then((data2) => {
  //   d3.select('body')
  //     .selectAll('div')
  //     .data(data2)
  //     .enter()
  //     .append('div')
  //     .style('width', function (d) {
  //       return d.Defunciones / 20 + 'px';
  //     })
  //     .style('background-color', 'yellowgreen')
  //     .style('margin-bottom', '3px')
  //     .style('padding', '1px')
  //     .text(function (d) {
  //       return d.Defunciones;
  //     });
  // }).catch((err) => {
  //   console.log(err);
  // });
  
  
  // ESCALAS
  // DOMAIN : conjunto completo de valores
  // RANGE: El rango es el conjunto de valores resultantes de una función
  // El domnio son los datos y range el rango de los datos donde va graficar
  
  var escalaLineal = d3.scaleLinear()
    .range([0, 100])
    .domain([0, 2000]);
    // Posición 50 en domain es posición 25 en range
  
  // Tienes datos catagoricos, siempre respeta el orden
  // roses siempre va a ser #ff0000
  var escalaOrdinal = d3.scaleOrdinal()
    .range(['#ff0000', '#0000ff'])
    .domain(['roses', 'violets']);
  
  // Escala continua de números
  // y se asigna a un conjunto de categrias
  // cada string del array vale aprox 14 puntos
  var escalaDeBanda = d3.scaleBand()
    .range([0, 100])
    .domain(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']);
  
  
  
  
  // Gráfica con escalas de tamaño y color 
  
  // loadCsv()
  //   .then((result) => result.map((r) => ({ name: r.Causas, deaths: parseInt(r.Defunciones) })))
  //   .then(data => {
  //     data.sort(function (a, b) { return a.deaths > b.deaths ? -1 : 1; });
  //     console.log(data);
  //     var maxValue = d3.max(data, function (d) { return d.deaths });
  //     console.log(maxValue);
      
  //     var linear = d3.scaleLinear()
  //     .range([0, 1024])
  //     .domain([0, maxValue]);
  
  //     var color = d3.scaleLinear()
  //       .range(['blue', 'green', 'yellow', 'red'])
  //       .domain([0, maxValue / 4, maxValue / 2, maxValue]);
  
  //   d3.select('body')
  //     .selectAll('section')
  //     .data(data)
  //     .enter()
  //       .append('section')
  //       .style('width', function (d) { return linear(d.deaths) + 'px'; })
  //       .style('background-color', function (d) { return color(d.deaths) })
  //       .style('margin-bottom', '3px')
  //       .style('color', 'white')
  //       .style('padding', '1px')
  //       .text(function (d) { return d.deaths; });
  //   })
  //   .catch((err) => {
  //   console.log(err);
  // });
  
  
  // Creación de un svg
  // var svg = d3.select('body').append('svg').attr('width', '1000px');
  // svg.selectAll('circle')
  //   .data(['click', 'overnout'])
  //   .enter()
  //   .append('circle')
  //   .attr('cx', function (d, i) {
  //     return 200 * (i + 1);
  //   })
  //   .attr('cy', 70)
  //   .attr('r', 70)
  //   .style('fill', 'purple')
  //   .attr('id', function (d) { return d; });
  
  
  //   // Eventos
  // svg.select('#click')
  //   .on('click', function (d, i) {
  //     alert('Clicked!')
  //   });
  
  // svg.select('#overnout')
  //   .on('mouseover', function (d, i) {
  //     d3.select(this)
  //       .style('fill', 'yellow')
  //   })
  //   .on('mouseout', function (d, i) {
  //     d3.select(this)
  //       .style('fill', 'purple');
  //   });
  
  
  
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
    
  