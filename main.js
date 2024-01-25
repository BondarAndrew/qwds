const formInput = document.querySelector(".form-inp");
const formBtn = document.querySelector(".form-btn");

function getKey() {
  let chars = "1234567890";
  let key = "";
  for (let i = 0; i < 10; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

document.getElementById("todo-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (formInput.value.trim() !== "") {
    let key = getKey();
    let value = formInput.value;
    let exTasks = JSON.parse(localStorage.getItem('tasks')) || {};
    exTasks[key] = {text: value};
    localStorage.setItem('tasks', JSON.stringify(exTasks));
    formInput.value = '';
    loadTasks();
  }
});

function loadTasks() {
  let taskList = document.querySelector('.taskList');
  taskList.innerHTML = '';
  let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
  
  Object.keys(tasks).forEach(function(key) {
    let taskItem = document.createElement('li');
    taskItem.classList.add('taskItem');
    
    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
      deleteTask(key);
    };
    taskItem.append(deleteBtn)
   
    taskList.appendChild(taskItem)
    addTask()
  })
}
function deleteTask(key) {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    delete tasks[key]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    loadTasks()
}

document.addEventListener('DOMContentLoaded', function() {
    loadTasks()
})

function addTask() {
    taskItem.textContent = tasks[key].text
}