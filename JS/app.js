/* let num = 42 // number
let firstName = 'Olesia' //string
const isProgremmer = true //boolean
*/

// isProgremmer = false // error because of const

// console.log('Test:',firstName)

// alert('Test:',firstName) присвоение

/* console.log(num+10)
console.log(num-10)
console.log(num*10)
console.log(num/10)
console.log(num)
*/

/*let num2 = num+10
console.log(num, num2)
num = num2-num
num2=num2+1
console.log(num, num2)

let num3 = (num +10)*2/5-1
console.log(num3)


const fullName= firstName +' Vasileva' //констатинация
console.log(fullName)
*/

const resultElement = document.getElementById('result')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'



//console.log(typeof sum)

plusBtn.onclick = function () {
    action='+'
}

minusBtn.onclick = function () {
    action='-'
}
multiplyBtn.onclick = function () {
    action='*'
}
divideBtn.onclick = function () {
    action='/'
}

function printResult(result) {
    if (result<0) {
        resultElement.style.color = 'red'
    } else {resultElement.style.color = 'green'}
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol){
const num1 = Number(inp1.value)
const num2 = Number(inp2.value)
/* if (actionSymbol == '+') {
    return num1+num2
} 
else if (actionSymbol == '-') {
    return num1-num2}

else if (actionSymbol == '*') {
        return num1*num2}

        else {
            return num1/num2}
 */ 
// тернарный оператор      
return actionSymbol == '+' ? num1+num2 : actionSymbol == '-' ? num1-num2 : actionSymbol == '*' ? num1*num2 : num1/num2
}

submitBtn.onclick = function () {
   const result = computeNumbersWithAction(input1, input2, action)
printResult(result)
}



