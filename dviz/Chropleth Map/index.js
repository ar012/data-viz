import { select, json, event, zoom, geoPath, geoNaturalEarth1, scaleOrdinal, schemeSpectral } from 'd3';
import { loadAndProccessData } from './loadAndProccessData';
import { colorLegend } from './colorLegend';

const svg = select("svg");
const projection = geoNaturalEarth1();
const pathGenerator = geoPath().projection(projection);

const g = svg.append("g");

const colorLegendG = svg.append("g")
	.attr("transform",`translate(30, 300)`);

g.append("path")
	.attr("class", "sphere")
	.attr("d", pathGenerator({type:'Sphere'}));

svg.call(
  zoom().on("zoom",()=>{
		g.attr("transform", event.transform);
	})
);

const colorScale = scaleOrdinal();
//const colorValue = d => d.properties.income_grp;
const colorValue = d => d.properties.economy;

loadAndProccessData().then( countries => {
  
  	colorScale
      .domain(countries.features.map(colorValue))
  		.domain(colorScale.domain().sort().reverse())
  		.range(schemeSpectral[ colorScale.domain().length ]);
  
    colorLegendG.call(colorLegend, {
      colorScale,
      circleRadius: 8,
      spacing: 20,
      textOffset: 16,
      backgroundRectWidth: 240
    });
  
    g.selectAll("path").data(countries.features)
      .enter().append("path")
        .attr("d", pathGenerator)
  			.attr("fill", d => colorScale(colorValue(d)))
        .attr("class", "country")
      .append("title")
        .text(d => d.properties.name + ", " + colorValue(d));
});