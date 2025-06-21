const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task
addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    taskInput.focus();
  } else {
    alert("Please enter a task!");
  }
});

// Remove task
taskList.addEventListener('click', function(e) {
  if (e.target.classList.contains('deleteBtn')) {
    e.target.parentElement.remove();
  }
});
