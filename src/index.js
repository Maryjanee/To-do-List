import List from './lists'
import './styles.scss'
import modalObj from './modal'
import displayTasks from './displaytasks'
import {Task, createTask} from './task'
import allLists from './variables'



let categoriesContainer = document.querySelector('.all-categories');
let moreInfoBtn = document.querySelector('.info-btn');
let taskCategory = document.querySelector('#task-category'); 
let createTaskForm = document.getElementById('create-task-form')


// TESTING 
// let allList = document.getElementById('all-list');
// let customListArray = new List('All');
// customListArray.addToLists(allLists);
// let newTask = createTask("Test","Testing","This date","Low","any");

// let allListArray = allLists.find(e => e.name == "All");
// console.log(allListArray)
// allList.addEventListener('click', () => {
//   displayTasks(allListArray)
// });



// createTaskBtn.onclick = () => { createTask(titleValue, descriptionValue, descriptionValue,priorityValue, categoryValue) }
// TESTING END

modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;

const createCategories = (arr) =>{
  arr.forEach(item => {
    let newCategory = document.createElement('button');
    let newOption = document.createElement('option')
    newCategory.innerText = item.name;
    newCategory.className = "list";
    newOption.innerText = item.name;
    newOption.value = item.name;
    
    taskCategory.appendChild(newOption);
    categoriesContainer.appendChild(newCategory);

    
  });
  return categoriesContainer
} 

modalObj.submit().addEventListener('click', () => {
  let newProject = modalObj.input().value;
  modalObj.input().value = "";
   let list = new List(newProject);
   list.addToLists(allLists);
   createCategories(allLists)
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
  let newTask = createTask(titleValue, descriptionValue, priorityValue, duedateValue, categoryValue);
   displayTasks(newTask);
  
  
})









// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }