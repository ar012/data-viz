
// function addNodes(n){
//   var btsNode= [];
//   for(i=0; i<n; i++){
//     btsNode.push({"id": i, "bts": "MSC-"+i, "size": 30});
//   }
//   return btsNode;
// }

// console.log(addNodes(10));



var myarr = [];
function cellFn(cellName, cellSize){
  for ( var i=0; i< cellSize; i++){
    var obj = {
      "name": '"' + cellName + '"',
      "size": 6000
  };
return myarr.push(obj);
  }
}


var myarr = cellFn('Cell100', 3);

console.log(myarr);