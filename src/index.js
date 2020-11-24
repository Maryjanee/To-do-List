import List from './lists';
import addBtn from './assets/plus.svg';
import './styles.scss';
import modalObj from './dynamics'

const allLists = [];
const defaultList = new List('Tasks');
allLists.push(defaultList);

modalObj.btn().onclick = modalObj.btnclick;
modalObj.span().onclick = modalObj.closeclick;



// window.click = function(event) {
//   if (event.target == modalObj.modal()) {
//     modalObj.modal().style.display = "none";
//   }
// }