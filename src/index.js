import List from './lists';
import addBtn from './assets/plus.svg';
import './styles.scss';
import modalObj from './modal';

let allLists = [];
let categoriesContainer = document.querySelector('.all-categories');
let moreInfoBtn = document.querySelector('.info-btn');
let taskCategory = document.querySelector('#task-category'); 



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

moreInfoBtn.addEventListener("click", ()=>{
  if(todoInfo.style.display == 'none'){
    todoInfo.style.display = 'block';
    todoInfo.style.display = 'flex';
  }else{
    todoInfo.style.display = 'none'; 
  } 
})









// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }