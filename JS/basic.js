// var car ={
//     type:"Fiat", 
//     model:"500", 
//     color:"white"
// };
// console.log(car.type);
// console.log(car["model"]);


/*
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5555,
    fullName: function () {
        return person.firstName + person.lastName;
    }
};
*/

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5555,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};




/*
console.log("First name: " + person.firstName);
console.log(`Last name: ${person["lastName"]}`);


console.log(person.fullName);

console.log(person.fullName());
*/




// const name = new type(arguments);

var x = new String();
var y = new Number();
var z = new Boolean();

// console.log(x, y, z);


/*
var x2 = "We are the so-called \"Vikings\" from the north.";
console.log(x2);


var x3 = "The character \\ is called backslash.";

console.log(x3);


var s1 = "Arif";
var s2 = new String("Arif");

var s3 = new String("Arif");

console.log("The type of s1: " + typeof s1);
console.log("The type of s2: " + typeof s2);


console.log(s1 == s2);

console.log(s1 === s2);


console.log(s1 == s1);


console.log(s2 == s3);

console.log(s2 === s3);
*/

// String Methods and Properties
// =============================


/*
var txt = "AGCDDDFSEFSFSFS#EA";
var sln = txt.length;

console.log(sln);


// Finding a String in a String
// ----------------------------
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos);

var lpos = str.lastIndexOf("locate");
console.log(lpos);

var str = "Please locate where 'locate' occurs!";
var spos = str.indexOf("where",10);

console.log(spos);

var sl = str.search("locate");

console.log(sl);
*/


/*
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);

console.log(res);

var sbm = str.substring(7, 10);

console.log(sbm);

var rs = str.substr(7, 6);
console.log(rs);
*/

/*
var str  = "Please visit Microsoft and Microsoft";
var n = str.replace("Microsoft", "CTrends");

console.log(n);



str = "Please visit Microsoft!";
var m = str.replace(/MICROSOFT/i, "W3Schools");

console.log(m);

var str  = "Please visit Microsoft and Microsoft";
var n = str.replace(/Microsoft/g, "CTrends");

console.log(n);
*/

/*
// Converting to Upper and Lower Case
// ==================================
var text1 = "Hello World!";
var txt2 = text1.toLowerCase();
var txt3 = text1.toUpperCase();

console.log(`The value of text1: ${text1}
and value of txt2: ${txt2}
also value of txt3: ${txt3}`);
*/

/*
// The concat() Method
// ===================
var text1 = "Hello";
var text2 = "world";
var text3 = text1.concat(" ", text2);

console.log(text3);


var str3 = "     Hello world!    ";
var str4 = str3.trim();
console.log(str4);


console.log(text1.charAt(2));

console.log(text1.charCodeAt(0));

console.log(text2.charCodeAt(0));

console.log(text2.charCodeAt(10));

console.log(text1[0]);

text1[0] = "A";


console.log(text1[0]);
console.log(text1[0]);

*/


/*
// Converting a String to an Array
// ================================
// var txt = "a, b, c, d, e";
var txt = "a,b,c,d,e";
console.log(txt);

console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));
console.log(txt.split(""));
*/


// JS Numbers
// ==========
/*
var m = 999999999999999;
var n = 9999999999999999999;

console.log(m, n);

var x = 0.2 +0.1;
console.log(x);


var nm = (0.2*10 + 0.1*10)/10;
console.log(nm);


console.log(12+10);
*/


/*
var x = "100";
var y = "10";


console.log(typeof x);
console.log(typeof y);

var z = x*y;
console.log(typeof z);

console.log(x + y);
console.log(x * y);
console.log(x / y);

console.log(x - y);

*/

// var n = "abc"/ 10;

// console.log(n);

// console.log(isNaN(n));
// console.log(isNaN(10));
// console.log(isNaN("ABC"));



var x = 0xFF; 

console.log(x);

console.log(0xAA);
console.log(0x55);
console.log(0xEE);


var obj1 = {name: "arif", id: 123};

var obj2 = {name: "arif", id: 123};
console.log(obj1 == obj2);
console.log(obj1 === obj2);












