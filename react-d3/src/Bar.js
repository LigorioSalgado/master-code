import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Bar() {
  const dataSet = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13];
  const width = 960;
  const height = 500;

  useEffect(() => {

    const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
    
    svg.selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("width", 50)
    .attr("height",(d) => {
      return d;
    })
    .attr("x", (d, i) => {
        return (i + 1) * (width / dataSet.length);
        }) 
}, [])

  return (
    <h1>Aqui esta Bar</h1>
  )
}

export default Bar;
