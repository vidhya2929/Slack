// const todoInput = document.getElementById("todoInput");
// const addBtn = document.getElementById("addBtn");
// const todoList = document.getElementById("todoList");

// addBtn.addEventListener("click", ()=>{
//   const task = todoInput.value.trim();
//   if(task === "")return;

//   const li = document.createElement("li");
//   li.textContent = task;
  
//   // deleteBTN
//   const delBtn = document.createElement("button");
//   delBtn.textContent = "Delete";
//   delBtn.addEventListener("click", ()=>
//   li.remove()
//   );
//   li.appendChild(delBtn);
//   todoList.appendChild(li);
//   todoInput.value = "";
// })

// const toggleBtn = document.getElementById("toggleDark");
// // selects the button
// toggleBtn.addEventListener("click", ()=>{
//   // when the button is clicked, the function runs.
//   document.body.classList.toggle("darkMode");
//   // toggle is a classList property which adds it if it is not present
//   // if it is present,it removes
// })
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const toggleBtn = document.getElementById("toggleBtn");

// Load Saved theme from localStorage on page load

if(localStorage.getItem("theme") === "dark"){
  // checks if the user has previously chosen a theme and the value is "dark" it means the user previously selected dark mode ->then run,
  document.body.classList.toggle("darkMode");
}

// Toggle theme and save to localStorage
toggleBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("darkMode");
// Save the current theme to local Storage
const currentTheme = document.body.classList.contains("darkMode")? "dark" : "Light";
toggleBtn.textContent = document.body.classList.contains("darkMode")? " ☀️ Light Mode" : "🌙 Dark Mode";
localStorage.setItem("theme", currentTheme);
// save the value into the browser's localStorage
});


addBtn.addEventListener("click", ()=>{
  const Task = todoInput.value.trim();
  if(Task === "")return

  const li = document.createElement("li");
  li.textContent = Task;

  // delete Button
  const delBtn = document.createElement("button")
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", ()=>{
    li.remove();
  });
  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = "";
});



// When you add a task, we should store it in the browser
function saveToLocalStorage(){
  const items = [];
  // creates an empty array named items
  document.querySelectorAll("#todoList li").forEach(li =>{
    // selects all <li> elements inside the element with id todoList and do (each li is passed into the arrow function as a parameter)
    const taskText = li.firstChild.textContent.trim();
    // gets the first child node inside <li>,usually the text node,
    // => .textContent ->gets the actual text
    // .trim() removes any extra spaces before or after the text
// example
// <li>Buy Milk <button>Delete</button></li>
// li.firstChild.textContent → "Buy Milk " (with space)
// After .trim() → "Buy Milk"

    items.push(taskText);
    // Adds the trimmed task text to the items array
  });
localStorage.setItem("todoItems", JSON.stringify(items));
// as localStorage can only store strings "JSON.stringify" converts the javaScript array into a string.
}

function loadFromLocalStorage(){
  const savedItems = JSON.parse(localSorage.getItem
    // gets the string saved earlier using setItem()
    // JSON.parse => converts back to array
    ("todoItems")) || [];
    // if there is nothing saved, then it uses empty array instead to prevent errors.

  // Add each one to the screen

  savedItems.forEach(task =>{
    // loops through each item in the array 
    // for every task ,it calls a fucntion = createListItem(task);
    createListItem(task);
  });
}


loadFromLocalStorage();
// load everything when page opens