/* Theory

//массив - коллекция переменных

const array = [1, 2, 3, 4, 5] 
или
const array = new Array(1, 2, 3, 4, 5)
массивы могут содержать разные типы данных
console.log(array.length) // длина массива
console.log(array[0]) // вывод первого элемента массива
console.log(array[10]) // undefined такого элемента нет
console.log(array[array.length-1]) // вывод последнего элемента массива

const array = [1, 2, 3, 4, 5] 
console.log(array[array.length-1]) 

array[0] = 'one' // меняем первый элемент массива
console.log(array[0]) 
array[array.length]='privet'// добавляем элемент в конец массива не рекомендуют
console.log(array) 
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

//console.log(inputElement.value)

//const notes = ['записать блок про массивы', 'записать блок про функции']

/* function render(){
   for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))  
  } //цикл добавляем i как индекс длину массива и условие i++
  
   for (let note of notes) {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))  
  }
  второй вариант записи цикла, мы передаем саму note и индекс нам не нужен
  
}
render() 
*/

createBtn.onclick=function() {
    if(inputElement.value.length === 0) {
        return
    }
    const NewNote ={
      title: inputElement.value,
      complete: false,
    }
    notes.push(NewNote) // добавляем элемент в конец массива
    render() // вызываем функцию рендер чтобы обновить список
    inputElement.value = ''
}

/*function getNoteTemplate(title) {
  return  `<li
         class="list-group-item d-flex justify-content-between align-items-center"
       >
         <span>${title}</span>
         <span>
           <span class="btn btn-small btn-success">&check;</span>
           <span class="btn btn-small btn-danger">&times;</span>
         </span>
       </li>`
  
}
       */


/* Теория объектов


const person = {
 fistName: 'Ivan',
  lastName: 'Ivanov',
  year: 1990, //число
  hasGirlfriend: false,   // булевый тип данных
languages: ['ru', 'en'],  //массив
getFullName: function() {
console.log(person.firstName +''+ person.lastName) }

}  объекты (массивы тоже объекты) в скобках можно добавлять свойства



const person = {
  firstName: 'Ivan',
   lastName: 'Ivanov',
   year: 1990, //число
   hasGirlfriend: false,   // булевый тип данных
 languages: ['ru', 'en'],  //массив
 getFullName: function() {
 console.log(person.firstName +' '+ person.lastName) }
 
 }

 console.log(person.year) // выводим определенный элемент объекта либо через точку либо через квадратные скобки person['year']

 const key = 'hasGirlfriend'
 console.log(person[key]) // выводим определенный элемент объекта через переменную

 person.hasGirlfriend = true // меняем значение свойства объекта
  console.log(person.hasGirlfriend) // выводим измененное значение свойства объекта

  person.getFullName() // вызываем метод объекта
  */

const notes = [
  {title:'записать блок про массивы', 
  complete:false,},
  {title:'записать блок про функции', 
    complete:true,}
  ]

  function render(){
    listElement.innerHTML = '' // очищаем список перед рендером чтоб не дублировались элементы
    if (notes.length === 0) {
      listElement.innerHTML='<p>Нет заметок</p>' // если массив пустой то выводим сообщение что нет заметок
    }
    for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))  
    } //цикл добавляем i как индекс длину массива и условие i++
    
    /*  for (let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))  
    }
    // второй вариант записи цикла, мы передаем саму note и индекс нам не нужен
    */
  }
  render()

  listElement.onclick = function(event) {
    if (event.target.dataset.index) { // проверяем есть ли у элемента атрибут data-index
const index = Number(event.target.dataset.index) // получаем индекс элемента на который кликнули или parseInt можно использовать
const type = event.target.dataset.type // получаем тип элемента на который кликнули действие которое нужно выполнить
if (type === 'toggle') { 
  notes[index].complete = !notes[index].complete// если кликнули на кнопку с типом toggle
    } else if (type === 'remove') {
      notes.splice(index,1) // если кликнули на кнопку с типом remove
      
    }
console.log(event.target.dataset.index) // получаем индекс элемента на который кликнули target - элемент на который кликнули
render()

  }
}

  function getNoteTemplate(note, index) {  // если пишем function то можем ее вызывать в любом месте кода
    
    return  `<li
           class="list-group-item d-flex justify-content-between align-items-center"
         >
           <span class="${note.complete ? 'text-decoration-line-through' : ''}">${note.title}</span> 
           <span>
             <span class="btn btn-small btn-${note.complete ? 'warning': 'success'}" data-index="${index}" data-type="toggle">&check;</span>
             <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove" >&times;</span>
           </span>
         </li>`
    
  }

  
/* <span class="${note.complete ? 'text-decoration-line-through' : ''}">${note.title}</span> 
  если note.complete = true то добавляем класс text-decoration-line-through, если false то ничего не добавляем */