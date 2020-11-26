import List from './lists'
import './styles.scss'
import modalObj from './modal'
import displayTasks from './displaytasks'
import {Task, createTask} from './task'
import  {allLists, allTasks, unlisted, currentCategory, updateCurrent} from './variables';

let categoriesContainer = document.querySelector('.all-categories');
let myListsContainer = document.querySelector('#my-lists');
let moreInfoBtn = document.querySelector('.info-btn');
let taskCategory = document.querySelector('#task-category'); 
let createTaskForm = document.getElementById('create-task-form')

const createCategories = (arr, dom) =>{
  if(dom == categoriesContainer) {
    arr = arr.slice(2);
  }

  arr.forEach(item => {
    let newCategory = document.createElement('button');
    let newOption = document.createElement('option')
    newCategory.innerText = item.name;
    newCategory.className = "list";
    newCategory.onclick = () => {
      updateCurrent(item.name);
      displayTasks(item);
    }
    newOption.innerText = item.name;
    newOption.value = item.name;
    taskCategory.appendChild(newOption);
    dom.appendChild(newCategory);
  });

  return dom
} 

createCategories(allLists, myListsContainer);



modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;



modalObj.submit().addEventListener('click', () => {
  let newProject = modalObj.input().value;
   modalObj.input().value = "";
   let list = new List(newProject);
   console.log(allLists)
   allLists.push(list);
   console.log(allLists)
   createCategories(allLists, categoriesContainer);   
})

let todoInfo = document.querySelector('.task-hidden');

moreInfoBtn.addEventListener("click", ()=>{
  if(todoInfo.style.display == 'none'){
    todoInfo.style.display = 'block';
    todoInfo.style.display = 'flex';
  }else{
    todoInfo.style.display = 'none'; 
  } 
})

createTaskForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let titleValue = document.getElementById('task-title').value;
  let descriptionValue = document.getElementById('task-description').value;
  let priorityValue = document.getElementById('task-priority').value;
  let duedateValue = document.getElementById('task-duedate').value;
  let changedCat = document.getElementById('task-category').value
  let categoryValue = changedCat.charAt(0).toUpperCase() + changedCat.slice(1);
  let current = createTask(titleValue, descriptionValue, priorityValue, duedateValue, categoryValue);
   displayTasks(current);
  
  
})









// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }