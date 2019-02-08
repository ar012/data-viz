// var el = d3.select( 'body' ).append('p');

// console.log(el);

d3.selectAll("p")
.attr("class", "graf")
.style("color", "red")
.text('Hello, how are you?');