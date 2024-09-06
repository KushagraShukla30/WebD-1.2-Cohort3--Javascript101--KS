//Also tell the user if they are legal to vote or not

function Greet(){
    numAge = Number(age);
    let prefix;
    let voteStatus;
    if(gender === 'M'||'m'){
        prefix = "Mr. ";
    }
    if(gender === 'F' || 'f'){
        prefix = "Miss "
    }

    if(age>=18){
        voteStatus = "You are hence eligible to vote!";
    }
    if(age<18){
        voteStatus = "Unfortunately you are not eligible to vote!";
    }
    var finalGreet = "Hello " + prefix + " " + name1 + " ,your age is " + age + "." + voteStatus;
    console.log(finalGreet);
}

var name1 = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
var gender = prompt("Gender [Male(M)/Female(F)]: ")
Greet(name1, age, gender);