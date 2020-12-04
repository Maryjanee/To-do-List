import List from './lists';
import './styles.scss';
import modalObj from './modal';
import displayTasks from './displaytasks';
import { createTask } from './task';
import localStorageVals from './localStorage';

const categoriesContainer = document.querySelector('.all-categories');
const myListsContainer = document.querySelector('#my-lists');
const taskCategory = document.querySelector('#task-category');
const createTaskForm = document.getElementById('create-task-form');
const createClose = document.querySelector('#close-create');
const createTaskBtn = document.querySelector('.add-task-btn');


createTaskBtn.addEventListener('click', () => {
  createTaskForm.style.display = 'block';
});

createClose.addEventListener('click', () => {
  createTaskForm.style.display = 'none';
});

let allLists = [];

if (localStorage.allLists) {
  allLists = JSON.parse(localStorage.getItem('allLists'));
} else {
  const allTasks = new List('All');
  const unlisted = new List('Default');
  allLists.push(allTasks);
  allLists.push(unlisted);
}

let currentCategory = allLists[0];
displayTasks(currentCategory, allLists, currentCategory);

const updateCurrent = (name) => {
  currentCategory = allLists.find(e => e.name === name);
};

const createCategories = (arr, dom) => {
  if (dom === categoriesContainer) {
    arr = arr.slice(2);
  }
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
  taskCategory.innerHTML = '';
  const unlisted = document.createElement('option');
  unlisted.innerText = 'Default';
  unlisted.value = 'Default';

  taskCategory.appendChild(unlisted);

  arr.forEach(item => {
    const parentDiv = document.createElement('div');
    parentDiv.className = 'd-flex align-center justify-sb categories';
    const newCategory = document.createElement('button');
    const delDiv = document.createElement('div');
    delDiv.className = 'delete';

    const newOption = document.createElement('option');

    newCategory.innerText = item.name;
    newCategory.className = 'list';
    newCategory.onclick = () => {
      updateCurrent(item.name);
      displayTasks(item, allLists, currentCategory);
    };
    newOption.innerText = item.name;
    newOption.value = item.name;
    parentDiv.appendChild(newCategory);
    if (dom === categoriesContainer) {
      parentDiv.appendChild(delDiv);
    }

    parentDiv.addEventListener('mouseover', () => {
      delDiv.style.display = 'block';
    });
    parentDiv.addEventListener('mouseout', () => {
      delDiv.style.display = 'none';
    });

    delDiv.addEventListener('click', () => {
      const delCategory = delDiv.previousElementSibling.innerText;
      const index = allLists.findIndex(e => e.name === delCategory);
      allLists.splice(index, 1);
      delDiv.parentNode.remove();
      const varcart = [...taskCategory.children].filter(e => e.innerText === delCategory);
      varcart[0].remove();
    });

    taskCategory.appendChild(newOption);
    dom.appendChild(parentDiv);
  });
  localStorageVals(allLists);
  return dom;
};

createCategories(allLists.slice(0, 2), myListsContainer);
createCategories(allLists, categoriesContainer);

modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;

modalObj.submit().addEventListener('click', () => {
  const names = allLists.map(e => e.name);
  if (modalObj.input().value === '') {
    alert('Add a name to the category');
  } else if (names.includes(modalObj.input().value)) {
    alert('Name is already in use');
  } else {
    const newProject = modalObj.input().value;
    modalObj.input().value = '';
    const list = new List(newProject);
    allLists.push(list);
    createCategories(allLists, categoriesContainer);
  }
});

createTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleValue = document.getElementById('task-title').value;
  const descriptionValue = document.getElementById('task-description').value;
  const priorityValue = document.getElementById('task-priority').value;
  const duedateValue = document.getElementById('task-duedate').value;
  const categoryValue = document.getElementById('task-category').value;
  const namesMap = allLists[0].todos.map(e => e.title);
  if (titleValue === '' || descriptionValue === '' || priorityValue === '' || duedateValue === '') {
    alert('Please enter all the details for the task');
  } else if (namesMap.includes(titleValue)) {
    alert('Please choose an unused title');
  } else {
    const current = createTask(titleValue, descriptionValue,
      priorityValue, categoryValue, duedateValue, allLists, currentCategory);
    document.getElementById('task-title').value = ' ';
    document.getElementById('task-description').value = '';
    document.getElementById('task-priority').value = '';
    document.getElementById('task-category').value = '';
    document.getElementById('task-duedate').value = '';

    displayTasks(current, allLists, currentCategory);
  }
});
