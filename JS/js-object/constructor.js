function Student (name, roll){
  this.name = name;
  this.roll = roll;
  this.logSomethin = function(){
    console.log("hello world");
  }
  this.logInfo = function(){
    console.log("Name: " + this.name + " roll: " + this.roll);
  }
}


var s1 = new Student("amin", 10);
var s2 = new Student("rishad", 20);


console.log(s1)