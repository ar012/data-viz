// JavaScript Sorting Array:
// =========================

/*
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before sorting:", fruits);

fruits.sort();        // Sorts the elements of fruits


console.log("After sorting:", fruits);

// Reversing an Array
// ==================

fruits.reverse();
console.log("Decending order:", fruits);

*/

// Numeric Sort
// ============

/*
var points = [40, 50, 122, 45, 60, 10, 500];
console.log("Before sorting:", points);

points.sort(function(a, b) {
    return a -b
});

console.log("After sorting:", points);
*/


/*
// Sortin an array in decending
// ============================
var points = [40, 50, 122, 45, 60, 10, 500];
console.log("Before sorting:", points);

points.sort(function (a, b) {
    return b - a
});

console.log("After sorting in decending order:", points);

*/


/*
// Sorting an Array in Random order:
// ================================
var points = [40, 50, 122, 45, 60, 10, 500];
console.log("Before sorting:", points);

points.sort(function(a, b) {return 0.5 - Math.random()});
console.log("After sorting:", points);
*/


/*
// Find the Highest (or Lowest) Array Value
// =========================================
var points = [40, 50, 122, 45, 60, 10, 500];
console.log("Before sorting:", points);

points.sort(function(a, b) {return a-b});
var lowestValue = points[0];
var highestValue = points[points.length -1];

console.log("The lowest value:", lowestValue);
console.log("The hieghest value:", highestValue);
*/

/*
// Using Math.max() on an Array
// ===========================
var points = [40, 100, 1, 5, 25, 1000, 5000];

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

var maxValue = myArrayMax(points);
console.log("The maximum value:", maxValue);
*/

/*
// var max1 = Math.max.apply([1, 2, 3]);
var max1 = Math.max.apply(null, [1, 2, 3]);
var max2 = Math.max(1, 2, 3);

console.log(max1);
console.log(max2);
*/

/*
// Using Math.min() on an Array
// ============================
var points = [100, 58, 400, 80, 900];
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

var minValue = myArrayMin(points);

console.log("The minimum value:", minValue);
*/



// var min1 = Math.min.apply(null, [1,2,3]);
// var min2 = Math.min(1,2,3);

// console.log(min1, min2);



/*
// My Min / Max JavaScript Methods
// ===============================

// Find Max
var points = [100, 58, 5, 400, 1500,  80, 900];
function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

var maxValue = myArrayMax(points);
console.log("The heighest value:", maxValue);

// Find Min
function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

var minValue = myArrayMin(points);
console.log("The lowest value:", minValue);

*/




var cars = [{
        type: "Volvo",
        year: 2016
    },
    {
        type: "Saab",
        year: 2001
    },
    {
        type: "BMW",
        year: 2010
    },
    {
        type: "Toyota",
        year: 2005
    }
];

console.log("Before sorting:", cars);

cars.sort(
    function (a, b) {
        return a.year - b.year;
    }
);

console.log("After sorting:", cars);


// Comparing string properties is a little more complex:
cars.sort(function (a, b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

console.log("After sorting:", cars);