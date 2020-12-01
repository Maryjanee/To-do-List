import localStorageVals from './localStorage';
import { Task } from './task'

const editForm = document.getElementById('edit-task-form');
const editCloseBtn = document.querySelector('#close-edit');

const findTask = (task, allLists) => {
  const allTasks = allLists.find(e => e.name === 'All');
  const foundinAll = allTasks.todos.find(e => e.title === task.title);

  const found = allLists.find(e => e.name === task.category);
  const foundincat = found.todos.find(e => e.title === task.title);
  return [foundinAll, foundincat];
};

const displayTasks = (array, allLists, currentCategory) => {
  const showInfo = (index) => {
    const element = document.getElementById(index);

    if (element.style.display === 'none') {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  };

  const changeObjParams = (obj, title, description, priority, duedate) => {
    obj.title = title;
    obj.description = description;
    obj.priority = priority;
    obj.duedate = duedate;
    return obj;
  };

  const editFunction = (element, allLists, currentCategory) => {
    editForm.style.display = 'block';
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const editTitle = document.getElementById('edit-task-title').value;
      const editDescription = document.getElementById('edit-task-description').value;
      const editPriority = document.getElementById('edit-task-priority').value;
      const editDuedate = document.getElementById('edit-task-duedate').value;
      if (editTitle === '' || editDescription === '' || editDuedate === '') {
        alert('Please enter all the details to update the task');
      } else {
        const tasks = findTask(element, allLists);
        changeObjParams(tasks[0], editTitle, editDescription, editPriority, editDuedate);
        changeObjParams(tasks[1], editTitle, editDescription, editPriority, editDuedate);

        document.getElementById('edit-task-title').value = '';
        document.getElementById('edit-task-description').value = '';
        document.getElementById('edit-task-priority').value = '';
        document.getElementById('edit-task-duedate').value = '';
        displayTasks(currentCategory, allLists, currentCategory);
      }
    });
  };

  const deleteTask = (taskTitle, category, allLists, currentCategory) => {
    const choice = allLists.find(e => e.name === category);
    const delIndex = choice.todos.findIndex(e => e.title === taskTitle);
    choice.todos.splice(delIndex, 1);

    const allTasks = allLists.find(e => e.name === 'All');
    const allTasksIndex = allTasks.todos.findIndex(e => e.title === taskTitle);
    allTasks.todos.splice(allTasksIndex, 1);
    displayTasks(currentCategory, allLists, currentCategory);
  };

  const toggleTask = (task) => {
    Object.setPrototypeOf(task, Task.prototype);
    let category = allLists.find(e => e.name == task.category);
    let taskInCat = category.todos.find(e => e.title == task.title);
    Object.setPrototypeOf(taskInCat, Task.prototype);
    task.toggleStatus();
    taskInCat.toggleStatus();
  }

  const taskList = document.getElementById('task-listing');
  taskList.innerHTML = '';
  array.todos.forEach((element, i) => {
    const task = document.createElement('div');
    task.className = 'task';
    task.id = element.title;
    const taskBody = document.createElement('div');
    taskBody.className = 'task-body';
    const taskHidden = document.createElement('div');
    taskHidden.className = 'task-hidden';
    taskHidden.id = `task${i}`;

    taskBody.innerHTML = `<div class="task-body-text">
                            <input type="checkbox" name="check" id="checkbox-${element.title}">
                            <p>${element.title}</p>
                          </div>
                          <div class="task-body-end">
                            <button class="info-btn" id=info${i}>More Info</button>
                            <button class="edit-btn" id=edit${i}>Edit</button>
                            <button class="delete-btn" id=del${i}>Delete</button>
                          </div>`;
    taskHidden.innerHTML = `<div class="task-hidden-desc">
                              <h5>Description:</h5>
                              <p>${element.description}</p>
                            </div>
                            <div class="task-hidden-priority">
                              <h5>Priority</h5>
                              <p>${element.priority}</p>
                            </div>
                            <div class="task-hidden-date">
                              <h5>Due Date</h5>
                              <p>${element.duedate}</p>
                            </div>`;

    task.appendChild(taskBody);
    task.appendChild(taskHidden);
    taskList.appendChild(task);

    const info = document.getElementById(`info${i}`);
    const deleteBtn = document.getElementById(`del${i}`);
    const editBtn = document.getElementById(`edit${i}`);
    const checkboxBtn = document.getElementById(`checkbox-${element.title}`);

    deleteBtn.addEventListener('click', () => {
      deleteTask(element.title, element.category, allLists, currentCategory);
    });
    info.addEventListener('click', () => showInfo(`task${i}`));
    editBtn.addEventListener('click', () => editFunction(element, allLists, currentCategory));
    checkboxBtn.addEventListener('change', () => {
      toggleTask(element);
    })
  });
  localStorageVals(allLists);
};

editCloseBtn.addEventListener('click', () => {
  editForm.style.display = 'none';
});

export default displayTasks;