/*

// JS array
// ========
var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// Using new keyword

var cars2 = new Array(
    "Toyota",
    "Tata Nano",
    "Eicher"
);

var firstCarOfcars = cars[0];

var firstCarOfcars2 = cars2[0];

console.log(firstCarOfcars);
console.log(firstCarOfcars2);

console.log(cars);

*/


/*
var myArray = [];


fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

fruits.push("Lemon");
console.log(fruits);


fruits[fruits.length] = "Mango";

console.log(fruits);

fruits[7] = "Pineapple";
console.log(fruits);
*/



/*
// Associative Arrays
// ==================

var person = [];
person["firstName"] = "John";
person["lastname"] = "Dow";
person["age"] = 46;

console.log(person);

var x = person.length;
var y = person[0];

console.log(x, y);
console.log(typeof person);

console.log(Array.isArray(person));


// console.log(person["firstName"]);
// console.log(person.lastname);
*/



/*
var points = new Array(40, 100);
console.log(points);
var points = new Array(40);
console.log(points);

*/


/*
// var fruit;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var arrayTest = isArray(fruits);
// var arrayTest = isArray(fruit);

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

console.log(arrayTest);

var testArray = fruits instanceof Array;

console.log(testArray);
*/


var fruits = ["Banana", "Orange", "Apple", "Mango"];

// var st = fruits.toString();
// console.log(st);

// var st2 = fruits.join("*");

// console.log(st2);


// var fruit2 = fruits.pop();
// console.log(fruit2);


// var x = fruits.push("Kiwi");
// console.log(x);
// console.log(fruits);

// console.log(fruits);
// var first = fruits.shift();
// console.log(first);
// // console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(delete fruits[0]);
// console.log(fruits);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// var sp = fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);
// console.log(sp);


// var myGirls = ["cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "linus"];

// var myChildren = myGirls.concat(myBoys);
// console.log(myGirls);
// console.log(myBoys);

// console.log(myChildren);

// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myChildren = arr1.concat(arr2, arr3);


// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// console.log(myChildren);

// var myChildren2 = arr1.concat("Emil", "Tobias");
// console.log(myChildren2);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var citrus = fruits.slice(2);

// console.log(citrus);

// console.log(fruits);

// var sortfruits = fruits.sort();

// console.log(sortfruits);
// console.log(fruits);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// fruits.sort();
// fruits.reverse();
// console.log(fruits);


var points = [40, 50,500, 100, 25, 70, 100];
// console.log(points);
// points.sort();
// console.log(points);

// var points = [40, 50,500, 1000, 25, 70, 100];
// console.log(points);

// points.sort(function(a, b) {
//     return a -b;
// });

// console.log("Array Ascending order");
// console.log(points);



// var points = [40, 50,500, 1000, 25, 70, 100];
// // console.log(points);
// points.sort(function(a, b) {
//     return b -a;
// });
// console.log("Array Decending order");
// console.log(points);


// var points = [40, 100, 1, 5, 6, 78, 78];
// console.log(points);
// points.sort(function(a, b) {
//     return 0.5 - Math.random();
// });

// console.log(points);


var points = [40, 100, 1, 5, 6, 2.5, 7];
console.log(points);
points.sort(function(a, b) {
    return a -b;
});

console.log(points);
console.log(points[0]);

console.log(points[points.length -1]);




var btsmap = {
    char_rajibpur: {
      center: {
        lat: 25.418974,
        lng: 89.779296
      },
      radius: 8000,
      cells:{
          cell1: {
              serial: 1,
              cell_id: "ABC121",
              azimuth: 30,
              tilt: 40,
              ta: 4,
              eirp: 20
          },
          cell2: {
              serial: 2,
              cell_id: "ABC122",
              azimuth: 150,
              tilt: 40,
              ta: 4,
              eirp: 20
          },
          cell3: {
              serial: 3,
              cell_id: "ABC123",
              azimuth: 240,
              tilt: 40,
              ta: 4,
              eirp: 20
          }
      }
    }
    
  }