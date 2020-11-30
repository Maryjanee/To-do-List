import List from './lists'
import './styles.scss'
import modalObj from './modal'
import displayTasks from './displaytasks'
import {Task, createTask} from './task'
import localStorageVals from './localStorage';

let categoriesContainer = document.querySelector('.all-categories');
let myListsContainer = document.querySelector('#my-lists');
let moreInfoBtn = document.querySelector('.info-btn');
let taskCategory = document.querySelector('#task-category'); 
let editTaskCategory = document.querySelector('#edit-task-category');
let createTaskForm = document.getElementById('create-task-form');

localStorage.clear()

let allLists = [];

if (localStorage['allLists']) {
  console.log(allLists);
  allLists = JSON.parse(localStorage.getItem('allLists'));
} else {
  let allTasks = new List('All');
  let unlisted = new List('Unlisted');
  allLists.push(allTasks);
  allLists.push(unlisted);
}

let currentCategory = allLists[0];
displayTasks(currentCategory);

const updateCurrent = (name) =>{
  currentCategory = allLists.find(e => e.name == name);
}

const createCategories = (arr, dom) =>{
  if(dom == categoriesContainer) {
    arr = arr.slice(2);
  }
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
}
  taskCategory.innerHTML = "";
  editTaskCategory.innerHTML = "";
  let unlisted = document.createElement('option');
  unlisted.innerText = "Unlisted";
  unlisted.value = 'Unlisted';
  let unlisted2 = document.createElement('option');
  unlisted2.innerText = "Unlisted";
  unlisted2.value = 'Unlisted';
  taskCategory.appendChild(unlisted)
  editTaskCategory.appendChild(unlisted2)

  arr.forEach(item => {
    let newCategory = document.createElement('button');
    let newOption = document.createElement('option');
    let newOption2 = document.createElement('option');
    newCategory.innerText = item.name;
    newCategory.className = "list";
    newCategory.onclick = () => {
      updateCurrent(item.name);
      displayTasks(item, allLists, currentCategory);
    }
    newOption.innerText = item.name;
    newOption.value = item.name;
    newOption2.innerText = item.name;
    newOption2.value = item.name;


    editTaskCategory.appendChild(newOption2);
    taskCategory.appendChild(newOption);
    dom.appendChild(newCategory);
  });
  localStorageVals(allLists);
  return dom
} 


createCategories(allLists.slice(0,2), myListsContainer);
createCategories(allLists, categoriesContainer);

modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;

modalObj.submit().addEventListener('click', () => {
  let newProject = modalObj.input().value;
   modalObj.input().value = "";
   let list = new List(newProject);
   allLists.push(list);
   createCategories(allLists, categoriesContainer);   
})

let todoInfo = document.querySelector('.task-hidden');

createTaskForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let titleValue = document.getElementById('task-title').value;
  let descriptionValue = document.getElementById('task-description').value;
  let priorityValue = document.getElementById('task-priority').value;
  let duedateValue = document.getElementById('task-duedate').value;
  let categoryValue = document.getElementById('task-category').value;
  if(titleValue == "" || descriptionValue== "" || priorityValue == "" ||duedateValue == ""){
    alert ("Please enter all the details for the task");
  }else{
    let current = createTask(titleValue, descriptionValue, priorityValue, categoryValue, duedateValue, allLists, currentCategory);
   displayTasks(current, allLists, currentCategory);
  }
  

})








// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }