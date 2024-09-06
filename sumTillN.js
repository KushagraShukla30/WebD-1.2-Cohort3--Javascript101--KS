//Write a function called sum that finds the sum from 1 to a number



function sumTillN(){
    sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = i + sum;
    }
    console.log(sum);
}

    n = 10;
    sumTillN(n);

//-------------------------------------------//

function sumTillN(){
    num = Number(n);
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = i + sum;
    }
    console.log(sum);
}

    n = prompt("Enter your number : ");
    sumTillN(n);

