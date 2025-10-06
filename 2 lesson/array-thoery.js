//const names=['John', 'Jane', 'Jim', 'Jack'];

/*
names.push('Jill'); // добавляем элемент в конец массива
console.log(names); // ['John', 'Jane', 'Jim', 'Jack', 'Jill']

names.unshift('Joe'); // добавляем элемент в начало массива, более медленный метод в сравнении с пуш
console.log(names); // ['Joe', 'John', 'Jane', 'Jim', 'Jack', 'Jill']


names.shift(); // удаляем первый элемент массива
console.log(names);


const firstName=names.shift(); при удалении элемент не забывается 
console.log('Names:', names, firstName); // ['Jane', 'Jim', 'Jack'] John


const lastName=names.pop(); // удаляем последний элемент массива
console.log('Names:', names, lastName) // ['John', 'Jane', 'Jim'] Jack


console.log(names.reverse()); // ['Jack', 'Jim', 'Jane', 'John'] // меняет порядок элементов в массиве на обратный (меняет оригинальный массив)

const reversed = names.toReversed()
console.log(names.toReversed()) // создаем новый массив с измененным порядком элементов при этом оригинальный массив остается прежним


const letters = ['a', 'c', 'b', 'd', 'e'] 
console.log(letters.sort()) // ['a', 'b', 'c', 'd', 'e'] // сортирует массив по алфавиту меняет оригинальный массив и можем добавить функцию сортировки по своему усмотрению
console.log(letters)

console.log(letters.toSorted()) // ['a', 'b', 'c', 'd', 'e'] // создает новый массив с отсортированными элементами при этом оригинальный массив остается прежним


console.log(names.splice(2,1))//удаляем элемент из массива начиная с индекса 2 и удаляем 1 элемент это становится новым массивом, а из оригинального массива удаляется элемент
console.log(names) // ['John', 'Jane', 'Jack'] без Jim удаленного ранее

console.log(names.toSpliced(2,1)) // ['Jim'] // создает новый массив с удаленными элементами при этом оригинальный массив остается прежним
console.log(names) // ['John', 'Jane', 'Jim', 'Jack']


const greateWoman = 'Jane'
const index = names.indexOf(greateWoman) // ищем индекс элемента в массиве, если элемента нет то вернет -1
// console.log(index) // 1
const newNames = names.with(index, 'Jill') // заменяем элемент в массиве на новый элемент но не меняем оригинальный массив а создаем новый
// console.log(names) // ['John', 'Jane', 'Jim', 'Jack']
// console.log(newNames) // ['John', 'Jill', 'Jim', 'Jack']
// console.log(names[index]) // Jane

const capitalNames=names.map(function(name){
const newName = name+'!'
return newName //map создает новый массив с измененными элементами оригинальный массив остается прежним обязателен return
})
console.log(capitalNames) // ['John!', 'Jane!', 'Jim!', 'Jack!']

const greateWoman = 'Jane'
const index = names.indexOf(greateWoman) // ищем индекс элемента в массиве, если элемента нет то вернет -1
// console.log(index) // 1

const capitalNames=names.map(function(name, index){
    if(index===1){
        return 'Jane'
    }
    })
    console.log(capitalNames) // ['undefined', 'Jane', 'undefined', 'undefined'] то есть return только для одного элемента массива сработал
   

    console.log(names.includes('Jane')) // true // проверяем есть ли элемент в массиве
    console.log(names.indexOf('Jane')!==-1) // 1 // ищем индекс элемента в массиве, если элемента нет то вернет -1 тоже можем использовать для проверки наличия элемента в массиве через !==-1
    

    const people=[
        {name:'John', budget:4200},
        {name:'Jane', budget:15100},
        {name:'Jim', budget:300},
        {name:'Jack', budget:7520}
    ] // массив объектов

   /* let findedPerson

    for (let person of people){
if (person.budget===7520) {
    findedPerson=person
}
}*/ // метод поиска через цикл for of но использовать не стотит так как есть метод find
/*
const findedPerson = people.find(function(person)
{

if(person.budget===7520) //необязательно через if
    {
    return true

return person.budget===7520 // без if
    }) // метод find ищет элемент в массиве по условию и возвращает его если не находит то undefined
console.log(findedPerson) 

const finded = people.find((p)=> p.budget===7520) 
console.log(finded) // метод find с использованием стрелочной функции

const findedIndex = people.findIndex(function(person){
    return person.budget===7520
})
console.log(people[findedIndex]) // метод findIndex ищет индекс элемента в массиве по условию и возвращает элемент по индекс его если не находит то -1
console.log(findedIndex) // 3 то есть индекс выводит


const filtered = people.filter(function(person){
    return person.budget>4000
})
console.log(filtered) // метод filter фильтрует массив по условию и возвращает новый массив с элементами которые соответствуют условию

const filteredNew = people.filter((person)=> person.budget>4000) // метод filter с использованием стрелочной функции
console.log(filteredNew)


let sumBudget = 0 
const filtered = people.filter(function(person){
    return person.budget>4000
})
filtered.forEach(function(p){
    sumBudget+=p.budget // перебираем массив и суммируем бюджет
}) //перебор массива
console.log(sumBudget) // 15100 + 7520 + 4200 = 26820


//второй вариант записи (фильтруем, новый массив делаем и суммируем)
const sumBudget = people
.filter((p) => p.budget>4000)
.map((p)=>p.budget)
.reduce((acc, p)=>acc+p,0) 
//acc - аккумулятор то что сохраняется в процессе работы функции, p - текущее значение, 0 - начальное значение аккумулятора
console.log(sumBudget) // 26820


const string = 'Привет, как дела?'
const reversedString = string
.split('')
.toReversed()
.join('!')
.split('')
.filter(c=>c!=='!')
.join('') 
// переворачиваем строку split делает строку массивом, можно внутрь поставить разделитель, потом переворачиваем массив и join собирает массив в строку тоже нужен параметр
console.log(reversedString) 
*/

/* const sayHello=function(name){
    if (name!== undefined) {
        console.log('Hello, '+name)
    } else {
        console.log('Hello, someone')
}
}
sayHello('John')


const sayHello=((name)=>name!==undefined? 'Hello, '+name:'Hello, someone') 
console.log(sayHello('John')) 

function calc (a, b, operation) {
if (operation === '+') { 
    return a+b
} else if (operation === '-') {
    return a-b
} else if (operation === '*') {
    return a*b}
    else {return a/b}

}
console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2


let age = 17
const category = (age<18)? 'Детский': 'Взрослый' 
console.log(category) 

let a= 12
let b=10
const c = (a<b)? b: a
console.log(c) 


const john={
    name: 'John',
    age: 25, 
    pet:'cat'
}
const ann={
    name:'Ann',
    age: 22, 
    pet:'dog'
}

const person = function(name, age, pet){
    console.log(`Меня зовут ${name}, мне ${age} лет, у меня есть ${pet}`)
}

const incrementAge = function(person){
    person.age++

}
incrementAge(john) // передаем объект в функцию


for (let key in john) {
    console.log(`${key}: ${john[key]}`);
}
   

function sum(array){
let sum = 0
for (let i = 0; i < array.length; i++) {
    sum += array[i]}
    return sum
}

const arr = [1, 50, 20, 75, 90];

console.log(sum(arr)) // 236


const names=['John', 'Jane', 'Jim', 'Jack', 'Jill'];
console.log(names)
names.shift()
names.pop()
console.log(names) 


const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

const htmlString=function getHTML(names) {
    let html = '<ul>\n';
    for (let i = 0; i < names.length; i++) {
        html += `<li>${names[i]}</li>\n`;
    }
    html += '</ul>';
    return html
}
console.log(htmlString(names)) 

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};
const { age, favColor, height, pet, money } = obj;

console.log(age) 
console.log(favColor) 
console.log(height)
console.log(pet)
console.log(money) 

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

const obj2 = {
    ...obj,
    ...updateObj
};
console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }


function isPrimeNumber()
{
    let number=0
    if (number<2)
    {
        return false
    }
    else
    {
        for (let i=2; i<=Math.sqrt(number); i++)
        {
            if (number%i===0)
            {
                return false
            }
        }
    }
    return true
}
    

function func(num, min, max) {
    if (num<(max-(max-min)/2))
    {return num**2}
    else if (num<min) {
        return min**2
    }
    else if
    (num>max) {return max**2}
    else return (Math.floor(num))
 }


console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8



function isPerfectNumber(number) {
    let sum = 0
    if (number<1) {
        return false;
    }
    
    else {
    for (let i=1; i<=Math.floor(number/2); i++)
{
    if (number%i===0) {
        sum+=i
    }
}
return sum === number;
    }
    
  }
  
  console.log(isPerfectNumber(6));   // true
  console.log(isPerfectNumber(28));  // true
  console.log(isPerfectNumber(12));  // false
  console.log(isPerfectNumber(16));  // false
   

  function getNumberDigit(number, digitPosition) {
   const numberString = number.toString();
    if (digitPosition > numberString.length - 1) {
        return undefined;
    }
    else {
        return Number(numberString[digitPosition]);
    }
  }
  
  console.log(getNumberDigit(123, 0)) // 1
  console.log(getNumberDigit(123, 1)) // 2
  console.log(getNumberDigit(123, 2)) // 3
  console.log(getNumberDigit(1, 2)) // undefined
  
  function getNumberDigit(number, digitPosition) {
    if (digitPosition < 0|| number<0) {
        return undefined;
    }
    let numDigits = Math.floor(Math.log10(number)) + 1;
    if (digitPosition >= numDigits) {
        return undefined;
    }
    let divisor = Math.pow(10, numDigits - digitPosition - 1);
    let digit = Math.floor(number / divisor) % 10;
    return digit;
   }
   
   console.log(getNumberDigit(123, 0)) // 1
   console.log(getNumberDigit(123, 1)) // 2
   console.log(getNumberDigit(123, 2)) // 3
   console.log(getNumberDigit(1, 2)) // undefined
  

   function isOpposite(s1, s2){
    if (s1==='' && s2==='')
      return false
   else if (s1.length!==s2.lendth)
     return false
   else 
     for (let i=0; i<s1.lendth; i++)
       {
         if (s1[i]===s2[i]) return false
         else if (s1[i].toLowerCase()!==s2[i].toLowerCase()) return false 
           
       }
       return true
 }
console.log(isOpposite('abc', 'ABC'))  

function reverseLetter(str) {
    
    return str.split('')
    .filter((c) => c.match(/[a-zA-Z]/))
    .reverse()
    .join('')
    }
    console.log(reverseLetter('ab!cd')) 

    function scrabbleScore(str){
        return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v]||0)},0)
      }//z.
      console.log(scrabbleScore('hello')) 
     
      const car = {
  name: 'Hyundai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
}
function createCar(car) {
    return `
<article>
    <div>
        <h2>${car.name}</h2>
        <span>${car.type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${car.maxSpeed}</span>
    </div>
    <div>
        <span>Color:</span>
        <span>${car.color}</span>
    </div>
</article> `
}
console.log(createCar(car));

 const sentence = "Hello, how are you?";
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
}
 console.log(countWords(sentence)); // 4

 

const fullName = "John Doe";
const initials = getInitials(fullName);
function getInitials(fullName) {
    const initials = fullName
        .split(' ')
        .map(name => name.charAt(0).toUpperCase())
        .join('. ');
        
    return initials+'.';
        
}
    
console.log(initials); // "J. D."
 

function generateGoogleString(n) {
    if (n<2) {
        return 'error'
    }
    else {
        let googleString = 'G';
        for (let i=0; i<n; i++) {
            googleString += 'o';
        }
        googleString += 'gle';
        return googleString;
    }
}
console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
// Google

const str = "Hello, Привет!";
function countVowels(str) {
const vowels = 'aeiouAEIOUаеёиоуыэюяАЕЁИОУЫЭЮЯ';
let count = 0;
for (let i = 0; i < str.length; i++) {
if (vowels.includes(str[i])) {
count++;
}
}
return count;
}
console.log(countVowels(str)); // 4



const result1 = sumNumbers(1, 2, 3, 4, 5);
function sumNumbers(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
}
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60


function findMaxValue(numbers) {
if (numbers.length === 0) {
    return undefined;
}
else return Math.max(...numbers);}

const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);
console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
console.log(max2); // 30

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
console.log(maxEmpty); // undefined


function calculateAverage (numbers) {
    if (numbers.length === 0) {
    return '0';
}
else {const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
return average;
}
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0


function isPalindrome(str) {
    const reversedStr=str.split('').reverse().join('');
    return str===reversedStr
}
console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
*/