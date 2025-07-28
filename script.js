const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const datetimeInput = document.getElementById('datetime-input');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addTask(taskInput.value, datetimeInput.value);
  taskInput.value = '';
  datetimeInput.value = '';
});

function addTask(taskText, dateTime) {
  const li = document.createElement('li');

  const taskInfo = document.createElement('div');
  taskInfo.classList.add('task-info');

  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  const taskTime = document.createElement('small');
  taskTime.textContent = dateTime ? new Date(dateTime).toLocaleString() : '';

  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskTime);

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete';
  completeBtn.onclick = () => {
    taskInfo.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    taskInput.value = taskName.textContent;
    datetimeInput.value = dateTime;
    li.remove();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskInfo);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}
