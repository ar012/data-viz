import { tsv, json } from 'd3';
import { feature } from 'topojson';

export const loadAndProccessData = () => 
  Promise.all([
    tsv("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv"),
    json('https://unpkg.com/world-atlas@1/world/50m.json')
  ]).then(([tsvData,topoJSONData])=>{

      const rowById = tsvData.reduce((a,d)=>{
        a[d.iso_n3] = d;
        return a;
      },{});

      const countries = feature(topoJSONData, topoJSONData.objects.countries);

      countries.features.forEach(d => {
        Object.assign( d.properties, rowById[d.id] );
      });
    
    	return countries;
    
  });