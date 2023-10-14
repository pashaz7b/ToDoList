function addTask() {
    const taskText = document.getElementById('task').value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    document.getElementById('task').value = '';
}

function completeTask(button) {
    const taskText = button.previousElementSibling;
    taskText.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
