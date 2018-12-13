
/*
// Array.forEach
// =============
var txt = "";
var numbers = [45, 56, 100, 25, 50, 155, 10.50, 10];
numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//     txt = txt + value + "\n";
// }

function myFunction(value) {
    txt = txt + value + "\n";
}

console.log(txt);

*/


/*
// Array.map()
// ===========
var numbers1 = [40, 45, 65, 80];
var numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value * 2;
// }

// OR
function myFunction(value) {
    return value * 2;
}

console.log("numbers1:", numbers1);
console.log("numbers2:", numbers2);
*/



// Array.filter()
// ==============
var numbers1 = [1, 4, 9, 18, 16, 20, 40, 45, 65, 80];
var over18 = numbers1.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }


function myFunction(value) {
    return value > 18;
}
console.log("Over18 value:", over18);
