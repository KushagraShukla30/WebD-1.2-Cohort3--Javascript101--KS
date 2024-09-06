function Greet(name1,age){
    var FinalGreet = "Hello, " + name1 + " of " + age + " years of age, how are you doing?";
    console.log(FinalGreet);
}

name1 = prompt("Enter your name : ");
age = prompt("Enter your age : ");
Greet(name1,age);