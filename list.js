

alert("Manage your tasks here!");

const addBtn=document.querySelector(".button");
const  taskInput=document.querySelector(".box");
const todoList = document.querySelector(".taskList");


function addTask(){
     const taskText=taskInput.value.trim();

    if(taskText=== "") return;

    const li=document.createElement("li");
    li.classList.add("todo-item");
    li.textContent=taskText;

    todoList.appendChild(li);

    taskInput.value= "";



}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
    addTask();
}
});