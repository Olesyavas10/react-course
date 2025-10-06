/*// Function declaration example можно использовать в любом месте кода то есть даже до вызова функции
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice'); // Hello, Alice!

// Function expression example нельзя использовать до вызова функции
const greet2 = function(name) {
    console.log('2 Hello,', name);
}
greet2('Bo'); 

setTimeout(greet, 1500) //вызов функции greet через 1.5 секунды

setTimeout(function(){console.log('Timeout!')}, 2000) //вызов анонимной функции через 2 секунды. часто используется 
let counter = 0
const interval=setInterval(function()
{
    if (counter===5){ clearInterval(interval)}
    else {console.log(++counter)}
}, 1000) //вызов анонимной функции каждые 1 секунду
*/

//Arrow function 
function greet(name) {
    console.log('Hello', name);
}

const arrow = (name, age) => {
    console.log('Hello', name, age );
}
arrow('Bob', 11); // Hello - Bob

const arrow2 = name=> console.log('Hello', name);
arrow2('Alice'); 

function pow(num,exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp);
console.log(pow2(3,3))

//Default parameters

const sum = (a,b)=> a+b
console.log(sum(42,2))
//console.log(sum(42)) // NaN, так как b не определен

function sumAll(...numbers) {
    let res=0
    for (let num of numbers) {
        res+=num
    }
    return res

    //return numbers.reduce((acc, num) => acc + num, 0); // другой вариант с использованием reduce
}
console.log(sumAll(1,2,3,34,5)) // NaN, так как нет параметров

//Closures - замыкания

function createPerson(name){
    return function(lastname){
        console.log (name+' ' +lastname)
    
    }
}

const addLastName = createPerson('John');
addLastName('Doe'); // John Doe
addLastName('Smith'); // John Smith
