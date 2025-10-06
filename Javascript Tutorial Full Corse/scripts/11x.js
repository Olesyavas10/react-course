let todoList=JSON.parse(localStorage.getItem("todoList")) ||[];
function addTodo() {
    const inputElement=document.querySelector(".js-name-input");

    

    const name=inputElement.value;
    const dateInputElement=document.querySelector(".js-due-date-input");

    const dueDate=dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });
     localStorage.setItem("todoList",JSON.stringify(todoList))
    inputElement.value="";
dateInputElement.value='';
  

renderTodoList()
}

function renderTodoList() {
      let todoListHTML='';
for (let i=0; i<todoList.length; i++) {
    const todoObject=todoList[i];
    const {name, dueDate}=todoObject;
   
    const html=`
    <div>${name}</div>
    <div>${dueDate} </div>
     
    <button onclick="
    deleteTodo(${i})
    
    " class="delete-todo-button">Delete</button>
    
    `;
    todoListHTML+=html;
 }
  document.querySelector(".js-todo-list").innerHTML=todoListHTML;
}

function deleteTodo(id) {
 todoList.splice(id, 1);
    localStorage.setItem("todoList",JSON.stringify(todoList));
    renderTodoList();   
}
renderTodoList()
 


