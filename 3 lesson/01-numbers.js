/* 
const num=42 //integer
const float = 3.14 //float
const pow=10e3 //exponential notation
const big = 1_000_000 //для удобства чтения

console.log(Number.MAX_SAFE_INTEGER); //максимальное безопасное целое число связанно с памятью
console.log(Number.MIN_SAFE_INTEGER); //минимальное безопасное целое число
console.log(Number.MAX_VALUE)//максимальное значение числа
console.log(Number.MIN_VALUE)//минимальное значение числа
console.log(Number.POSITIVE_INFINITY); //положительная бесконечность
console.log(Number.NEGATIVE_INFINITY); //отрицательная бесконечность
console.log(Number.isFinite(1/0)); //проверка на конечность числа
console.log(23/undefined); //NaN - Not a Number
console.log(Number.isNaN(12)); //проверка на NaN
console.log(Math)
console.dir(Number); //выводит конструктор Number


const strInt = '42'; //строка
const strFloat = '42.42'; //строка с плавающей точкой

// console.log(Number(strInt)); //преобразование строки в число
console.log(parseInt(strInt)); //преобразование строки в целое число
console.log(parseFloat(strFloat)); //преобразование строки в число с плавающей точкой
console.log(+strInt, +strFloat); //преобразование строки в число с помощью унарного плюса 
console.log(+(0.1 + 0.2).toFixed(1)); //плавающая точка может давать неточные результаты+ //toFixed() округляет число до указанного количества знаков после запятой но возвращает строку


//BigInt отдельный тип данных для работы с большими числами
// BigInt позволяет работать с числами больше чем Number.MAX_SAFE_INTEGER но не может быть с плавующей точкой

console.log(Number.MAX_SAFE_INTEGER+13873389); //максимальное безопасное целое число + 13873389
console.log(BigInt(Number.MAX_SAFE_INTEGER)+13873389n); //BigInt позволяет работать с большими числами, добавляя суффикс n чтобы указать, что это BigInt формат а не обычное число

console.log(-42n); //отрицательное BigInt число

console.log(10n - 4)//вычитание не сработает с обычными числами
console.log(10n-BigInt(4)); //вычитание с преобразованием обычного числа в BigInt
console.log(parseInt(10n) - 4); //преобразование BigInt в обычное число для выполнения операций
console.log(5n/2n); //деление BigInt возвращает обычное число 2n


//Math

console.log(Math.E); //число e
console.log(Math.PI); //число π
console.log(Math.sqrt(25)); //квадратный корень
console.log(Math.pow(5, 3)); //возведение 5 в степень 3
console.log(Math.abs(-42)); //модуль числа
console.log(Math.max(1, 2, 3, 4, 5)); //максимальное значение
console.log(Math.min(1, 2, 3, 4, 5)); //минимальное значение
console.log(Math.floor(4.9)); //округление в меньшую сторону
console.log(Math.ceil(4.1)); //округление в большую сторону
console.log(Math.round(4.5)); //округление до ближайшего целого
console.log(Math.trunc(4.9)); //округление до целого числа отсекание дробной части
console.log(Math.random()); //случайное число от 0 до 1


//функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
}

console.log(getRandomNumber(10, 200)); //случайное число от 10 до 20


function removeDuplicates(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) { // проверяем, есть ли элемент в новом массиве
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
const numbers1 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]

const numbers2 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]

const emptyArray = [];
console.log(removeDuplicates(emptyArray));  // []

function createCounter(value) {
	    let count = value;

    return {
        inc: () => count++,
        dec: () => count--,
        get: () => count
}
}
const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
return age;
    
    } 
const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age);

function getDateDifference(date1, date2) {
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
return diffDays;
}
const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9

function getTimeUntilDate(date1) {
  const today = new Date();
  let diffMs = date1 - today;
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds
  };
}
const targetDate = new Date('2027-12-31T23:59:59');
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }


function isWeekend(date) {
    const day = date.getDay(); // Получаем день недели (0 - воскресенье, 6 - суббота)
    return day === 0 || day === 6; // Возвращаем true

}
const date1 = new Date('2027-07-10');  // Суббота
const date2 = new Date('2027-07-12');  // Понедельник

console.log(isWeekend(date1));  // true
console.log(isWeekend(date2));  // false
*/

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // год кратен 400, это високосный год
            }
            return false; // год кратен 100, но не кратен 400, это не високосный год
        }
        return true; // год кратен 4, но не кратен 100, это високосный год
    }
    return false; // год не кратен 4, это не високосный год
}
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true

function getLastDayOfMonth(year, month) {
    if (month < 0 || month > 11) {
        throw new Error('Месяц должен быть от 0 до 11');
    }
    return new Date(year, month + 1, 0).getDate(); // Создаем дату с последним днем месяца
}
console.log(getLastDayOfMonth(2023, 0)); // Январь, 31 день
console.log(getLastDayOfMonth(2027, 5));