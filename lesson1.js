// Area & Perimeter of a Rectangle
const prompt = require("prompt-sync")();
let length = prompt("Enter the length of a rectangle ");
let width = prompt("Enter the width of a rectangle ");
let rec_area = parseInt(length,10) * parseInt(width,10);
let perimeter = parseInt(length,10) + parseInt(width,10) + parseInt(length,10) + parseInt(width,10);;

console.log("Area of the rectangle is: ", rec_area +"meters squared")
console.log("Perimeter of the rectangle is: ", perimeter + "meters.")