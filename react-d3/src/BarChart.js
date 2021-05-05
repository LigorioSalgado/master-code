import React from 'react';
import * as d3 from 'd3';

function BarChart() {
    const data = [
        { name: 'Simon', age: 50 },
        { name: 'Edgar', age: 40 },
        { name: 'Pablo', age: 60 },
        { name: 'Ines', age: 25 }
    ];
    const width = 960;
    const height = 500;

    const yScale = d3.scaleBand()
        .range([0, height])
        .paddingInner(0.1)
        .domain(data.map(d => d.name));

    const xScale = d3.scaleLinear()
        .range([0, width])
        .domain([0, d3.max(data, d => d.age) ])

    return (
        <svg width={width} height={height}>
           {
            data.map((d) => {
                return (
                    <rect
                      x={0}  
                      y={yScale(d.name)}
                      width={xScale(d.age)}
                      height={yScale.bandwidth()}
                    />)
            })
           } 
        </svg>  
    );
}

export default BarChart;
