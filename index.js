// 1. Найти ккнопку и повесить событие клик
// 2. найти инпут и прочиатаь его значение
const addTodosTask = document.querySelector("#add-task-btn");
const descTaskInput = document.querySelector("#desctiption-task");
const todosCard = document.querySelector(".card");

let tasks;

!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

function Task(desctiption) {
  this.desctiption = desctiption;
  this.completed = false;
}

const updateLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

addTodosTask.addEventListener("click", () => {
  tasks.push(new Task(descTaskInput.value));
  updateLocal();
  fillInnerHTML();
  descTaskInput.value = "";
  console.log(tasks);
  //   const div = document.createElement("div");
  //   div.innerHTML = taskStr;
  //   console.log(div);
});

function fillInnerHTML() {
  todosCard.innerHTML = "";
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      todosCard.innerHTML += createTask(item, index);
    });
  }
}

fillInnerHTML();

function createTask(task, index) {
  return `
   <div class="card">
      <div class="card-body">
         <h5 class="card-title">${task.desctiption}</h5>
         <input class="btn-complete" type="checkbox" ${
           task.completed ? "checked" : ""
         }>
         <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
   </div>
   `;
}
