import {
  select,
  csv,
  scaleLinear,
  extent,
  axisLeft,
  axisBottom,
  format,
  scaleOrdinal,
  schemeCategory10
} from 'd3';

import { dropDownMenu } from './dropDownMenu';
import { scatterPlot } from './scatterPlot';
import { colorLegend } from './colorLegend';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');
const margin = { top: 20, right: 35, bottom: 100, left: 52 };

const color = scaleOrdinal(schemeCategory10);

const cValue = data => data['Indicator_desc'];
  

let data;
let xColumn;
let yColumn;
let selectedLegend;


const onXColumnClicked = column => {
  xColumn = column;  
  render();
};

const onYColumnClicked = column => {
  yColumn = column;  
  render();
};

const onClick = d => {
  selectedLegend = d;
//  console.log({selectedLegend});
  render();
};

const scatterG = svg.append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

var tipMouseover = function (d) {
  var html = d['Reporter_desc'] + "<br/>" +
    "<span style='color:" + color(cValue(d)) + ";'>" + d['Indicator_desc'] + "</span><br/>" +
    "<b>" + d[xColumn] + `</b> ${xColumn}, <b/>` + d[yColumn] + `</b> ${yColumn}`;
  select('.tooltip').html(html)
    .style("left", (d3.event.pageX + 15) + "px")
    .style("top", (d3.event.pageY - 28) + "px")
    .transition()
    .duration(200) 
    .style("opacity", .9)
  
};

// tooltip mouseout event handler
var tipMouseout = function (d) {
  select('.tooltip').transition()
    .duration(300) 
    .style("opacity", 0);
};


const render = () => {
  
  select('#x-menu')
    .call(dropDownMenu, {
      options: data.columns.filter(column =>
        column !== 'Reporter_desc' &&
        column !== 'Indicator_desc' &&
        column !== 'Year'&&
        column !== yColumn
      ),
      onOptionClicked: onXColumnClicked,
      selectedOption: xColumn
  });
  
  select('#y-menu')
    .call(dropDownMenu, {
      options: data.columns.filter(column =>
        column !== 'Reporter_desc' &&
        column !== 'Indicator_desc' &&
        column !== 'Year' &&
        column !== xColumn
      ),
      onOptionClicked: onYColumnClicked,
      selectedOption: yColumn
  });
  
  scatterG.call(scatterPlot, {
    xValue: d => d[xColumn],
    xAxisLabel: xColumn,
    yValue: d => d[yColumn],
    circleRadius: 4,
    yAxisLabel: yColumn,
    margin: margin,
    width,
    height,
    data,
    color,
    cValue,
    selectedLegend,
    tipMouseover,
    tipMouseout
  });
  
  svg.call(colorLegend, {
    color,
    width,
    onClick,
    selectedLegend
  });
  
  select('body').append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

};

csv('https://vizhub.com/veagy/datasets/2000-2016 Worldwide Exports.csv')
  .then(loadedData => {
    data = loadedData;
    data.forEach(d => {
      d['China'] = +d['China'];
      d['United States of America'] = +d['United States of America'];
      d['Brazil'] = +d['Brazil'];
      d['India'] = +d['India'];
      d['Japan'] = +d['Japan'];
      d['Mexico'] = +d['Mexico'];
      d['Russian Federation'] = +d['Russian Federation'];
    });
    xColumn = data.columns[4];
    yColumn = data.columns[3];
    render();
});

