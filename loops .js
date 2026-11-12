//--------------------------------------SECTION 1: PROGRAMMING----------------------------------

//1.FizzBuzz Problem

for(let i=1; i<=50; i++)
{
    if (i % 3 === 0 && i % 5 === 0)
    {
        console.log("Fizzbuzz");
    }
    else if(i % 3 === 0)
    {
        console.log("Fizz");
    }
    else if(i % 5 === 0)
    {
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//2.Greatest Common Divisor (GCD)

let num1 = 7;
let num2 = 8;

let gcd = 1;
let small = Math.min(num1 , num2)

for(let i=1; i<=small; i++)
{
    if (num1 % 1 === 0 && num2 % i === 0)
    {
        gcd = i;
    }
}
console.log("The gcd of " + num1 + " and " + num2 + " is " + gcd);


//3.Sum of Multiples.

let sum = 0;
for(let i= 1; i<=49; i++)
{
    if(i % 3 === 0 || i % 5 === 0){
        sum +=i;
    }
}
console.log("The sum of all multiples of 3 and 5 below 50  is " + sum);


//5.Pattern Printing (Nested Loops).

// Pattern 1
// * * * * *
// * * * *
// * * *
// * *
// * 
console.log("\nPattern 1");

for(let i=5; i>=1; i--)
{
    let rowstr = "*";
    for(let j=1; j<i; j++)
    {
        rowstr += "*";
    }
    console.log(rowstr);
}


// Pattern 2 – Floyd’s Triangle
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15
console.log("\nPattern 2");

let num = 1;
for(let i=1; i<5; i++)
{
    let row ="";
    for(let j=1; j<=i; j++)
    {
        row += num + " ";
        num++;
    }
    console.log(row.trim());
}


// Pattern 3
// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15
console.log("\nPattern 3");

const number = 5;
let currentnumber = 1;

for(let i=5; i>=1; i--)
{
    let row ="";
    for(let j=0; j<i; j++)
    {
        row += currentnumber + " ";
        currentnumber++;
    }
    console.log(row.trim());
}


// Pattern 4
// 1111*1111
// 111***111
// 11*****11
// 1*******1
// *********
console.log("\nPattern 4");

for(let i=1; i<=5; i++)
{
    let ones = '1'.repeat(5-i);
    let stars = '*'.repeat(2*i-1);
    console.log(ones + stars + ones);
}


// Pattern 5
//     *
//    ***
//   *****
//  *******
// *********
console.log("\nPattern 5");

for (let i = 1; i <= 5; i++) {

    let pattern = "";

    for (let space = 5; space > i; space--) {
        pattern += " ";
    }

    for (let star = 1; star <= (2 * i - 1); star++) {
        pattern += "*";
    }

    console.log(pattern);

}
//Q=5.Advanced Loop Conditions
for (let i = 1; i <= 1000; i++) {

    let result = "";

    if (i % 2 === 0) {
        result += "Foo";
    }

    if (i % 3 === 0) {
        result += "Fizz";
    }

    if (i % 5 === 0) {
        result += "Buzz";
    }

    if (i % 7 === 0) {
        result += "Bar";
    }


    if (result === "") {
        console.log(i);
    }
    else {
        console.log(result);
    }

}


//----------------------------------------SECTION 2: WRITTEN & CONCEPTUAL TASKS------------------------------------
console.log("\n---task 1--- ");
for(let i=1; i<10; i++)
{
    console.log("HELLO WORLD")
}


console.log("\n---task 2 --- ");
for(let i=10; i<=50; i +=10)
{
    console.log(i);
}

// console.log("\n---task 3 --- ");
// for (let i = 0; i < 5; i++) {
//     const name = "Sindhura";
//     console.log(i);
// }

// console.log(i);
// 
// //output 0 1 2 3 4
//ReferenceError: i is not defined
//reasoning:let i is block-scoped.
//It exists only inside the for loop's { }.


//Predict the output:
// console.log("\n---task 4 --- ");

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);
//output 0 1 2 3 4 
//var is function-scoped, not block-scoped.
//Therefore, i is still accessible after the for loop.

console.log("\n---task 5 --- ");
for(let i=1; i<=10; i++)
{
    console.log(`5 x ${i} = ${5*i}`);
}

console.log("\n---task 6 --- ");
console.log("***** ");

console.log("\n---task 7 --- ");
for(let i=1; i<=4; i++)
{
    console.log("*".repeat(i));

}
console.log("\n---task 8 --- ");
for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= 4; j++) {
        row += "*";
    }

    console.log(row);
}


console.log("\n---task 9 --- ");
let rows = 8;
for (let i=1; i<=rows; i++)
{
    let rowpattern ="";
    for(let j=1; j<=i; j++)
    {
        rowpattern +=j;
    }
    console.log(rowpattern);
}

console.log("\n---task 11 --- ");
for (let i=1; i<=9; i++)
{
    let rowpatterns ="";
    for(let j=9; j>=10-i; j--)
    {
        rowpatterns +=j;
    }
    console.log(rowpatterns);
}


console.log("\n---task 11 --- ");
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}

console.log("\n---task 12 --- ");
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            row += "1";
        } else {
            row += "8";
        }
    }

    console.log(row);
}

console.log("\n---task 13 --- ");
let left = 0;

for (let i = 9; i >= 1; i--) {
    let add = i - 1;
    let result = left * 9 + add;

    console.log(left + " * 9 + " + add + " = " + result);

    left = left * 10 + i;
}

console.log("\n---task 14 --- ");
let digit = 0;

for (let i = 1; i <= 9; i++) {
    digit = digit * 10 + i;

    let result = digit * 8 + i;

    console.log(digit + " x 8 + " + i + " = " + result);
}


console.log("\n---task 15 --- ");
for (let i = 1; i <= 6; i++) {
    let first = i;
    let second = 10 - i;
    let third = (i - 1) * 2;

    console.log(first + " " + second + " " + third);
}


