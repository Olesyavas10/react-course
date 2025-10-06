// ============== Operators

let a = 10
let b = 5
let c = 32

/* c = c + a 
c = c - b
c = c * a
c = c / b

c +=a
c -=a
c *= a
c /= a

c = c**2 //vozvedeniey v stepen 

*/

// ============= Data Types

const age = 29 // number
const name = 'John' // string
const isProgrammer = true // boolean
let x // undefined неопределенная переменная
// null - это объект, который не существует, при тайпоф получаем объект что косяк js
// 1/x = Nan - not a number, typeof (1/x) или Nan - number


// ================ Priority
 const fullAge = 25
 const birthYear = 1999
const currentYear = 2025

// > < >=
const isFullAge = currentYear - birthYear >= fullAge


console.log(isFullAge)

const num1 = 42 // number
const num2 = '42' // string

console.log(num1 == num2) //true для двойного равно для тройного false, тройное равно сравнивает типы данных, двойное значения