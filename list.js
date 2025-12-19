
alert("Manage your tasks here!");

const addBtn = document.querySelector(".button");
const taskInput = document.querySelector(".box");
const todoList = document.querySelector(".taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const icon = document.createElement("i"); 

  checkbox.type = "checkbox";
  icon.className = "fa-solid fa-trash";

  label.appendChild(checkbox);
  label.append(" " + taskText);

  li.appendChild(label);
  li.appendChild(icon);
  todoList.appendChild(li);

  taskInput.value = "";

  

  // click anywhere on li
  li.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    li.classList.toggle("completed", checkbox.checked);
    li.style.backgroundColor = "#E6FFE6";

    li.style.color = "#00A300";

  });

  li.addEventListener("click",()=>{
      if(!checkbox.checked){
        li.style.backgroundColor = "";

        li.style.color = "";
      }
  });


   

  // prevent double toggle
  checkbox.addEventListener("click", (e) => e.stopPropagation());

  // delete task
 
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
