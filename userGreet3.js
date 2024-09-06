//Write a function that takes a new object as input which has name , age  
//and gender and greets the user with their gender 
//(Hi Mr/Mrs/Others harkirat, your age is 21)




function Greet(){
    numAge = Number(age);
    let prefix;
    if(gender === 'M'||'m'){
        prefix = "Mr. ";
    }
    if(gender === 'F' || 'f'){
        prefix = "Miss "
    }
    var finalGreet = "Hello " + prefix + " " + name1 + " ,your age is " + age;
    console.log(finalGreet);
}

var name1 = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
var gender = prompt("Gender [Male(M)/Female(F)]: ")
Greet(name1, age, gender);