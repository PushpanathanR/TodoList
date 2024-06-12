

let todolist = [];
function addtask() {
  
  const todoTask = document.querySelector('.task');
  const todoDate = document.querySelector('.date');
  const todoObject = {
    todo: todoTask.value,
    date: todoDate.value};
  todolist.push(todoObject);
}

function renderTodo() {
  let todohtml = '';
  for (i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    if (todoObject.date === '') {
      let html = `<p class="task-list">${todoObject.todo} ${todoObject.date}
      <button class="delete-button" onclick = "
        todolist.splice(${i}, 1);
        renderTodo();
      "
      >Delete</button></p>`;
      todohtml += html;
    } else {
      let html = `<p class="task-list">${todoObject.todo} <span class="date">${todoObject.date}</span>
      <button class="delete-button" onclick = "
        todolist.splice(${i}, 1);
        renderTodo();
      "
      >Delete</button></p>`;
      todohtml += html;
    }
    
  }

  document.querySelector('.todolist').innerHTML = todohtml;
}

