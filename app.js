// Class representing a Task
class Task {
  constructor(title, description) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }
}

// Task Manager (handles CRUD operations)
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(title, description) {
    const task = new Task(title, description);
    this.tasks.push(task);
    return task;
  }

  toggleTaskCompletion(id) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

// Simulated API (RESTful style)
const API = {
  getTasks: () => taskManager.getTasks(),
  postTask: (title, description) => taskManager.addTask(title, description),
  putTask: id => taskManager.toggleTaskCompletion(id),
  deleteTask: id => taskManager.deleteTask(id),
};

// DOM Interaction
const taskManager = new TaskManager();
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  API.getTasks().forEach(task => {
    const li = document.createElement("li");
    li.className = "task-list__item";
    li.innerHTML = `
      <span style="text-decoration:${task.isCompleted ? 'line-through' : 'none'}">
        ${task.title} - ${task.description}
      </span>
      <div>
        <button onclick="API.putTask(${task.id}); renderTasks()">✔</button>
        <button onclick="API.deleteTask(${task.id}); renderTasks()">✖</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const desc = document.getElementById("taskDescription").value;
  API.postTask(title, desc);
  renderTasks();
  taskForm.reset();
});
