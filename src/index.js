import List from './lists';
import addBtn from './assets/plus.svg';
import './styles.scss';
import modalObj from './dynamics'

let allLists = [];
let categoriesContainer = document.querySelector('.all-categories');

modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;

const createCategories = (arr) =>{
  arr.forEach(item => {
    let newCategory = document.createElement('button');
    newCategory.innerText = item.name;
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








// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }