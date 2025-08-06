const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", ()=>{
  const task = todoInput.value.trim();
  if(task === "")return;

  const li = document.createElement("li");
  li.textContent = task;
  
  // deleteBTN
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", ()=>
  li.remove()
  );
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = "";
})

const toggleBtn = document.getElementById("toggleDark");
// selects the button
toggleBtn.addEventListener("click", ()=>{
  // when the button is clicked, the function runs.
  document.body.classList.toggle("darkMode");
  // toggle is a classList property which adds it if it is not present
  // if it is present,it removes
})
