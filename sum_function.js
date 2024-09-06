//Write a function sum that finds the sum of two numbers. 
//Side quest - Try passing in a string instead of a number and see what happens?--string concatenation

function sum(x,y){
   let num1 = Number(x);
    let num2 = Number(y);
    console.log(num1 + num2);
}
var x = prompt("Enter 1st number : ");
var y = prompt("Enter 2nd number : ");
sum(x,y);

//-------------------------//

function sum(x,y){
    console.log(x + y);
 }
sum(10,15);

//--------------------------//

function sum(x,y){
    console.log(x + y);
 }
sum('hello','world');


//comment the one which you dont want to run