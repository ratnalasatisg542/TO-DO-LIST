function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="text" value="${taskText}" readonly>
        <button onclick="editTask(this)" class="edit">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Complete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function editTask(button) {
    const li = button.parentElement;
    const input = li.querySelector('input[type="text"]');

    if (button.textContent === 'Edit') {
        input.removeAttribute('readonly');
        input.focus();
        button.textContent = 'Save';
    } else {
        input.setAttribute('readonly', true);
        button.textContent = 'Edit';
    }
}