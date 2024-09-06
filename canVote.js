//Write a function called canVote that returns true or 
//false if the age of a user is > 18




function canVote(){
    if (age>=18){
        console.log("Elegible to vote!");
    }
    else{
        console.log("Not eligible");
    }
}
    age = 19;
    canVote(age);

//---------------------------------------

function canVote(){

    agenum = Number(age);
    if (agenum>=18){
        console.log("Elegible to vote!");
    }
    else{
        console.log("Sorry!Not eligible to vote!");
    }
}
    age = prompt("Enter your age : ");
    canVote(age);

