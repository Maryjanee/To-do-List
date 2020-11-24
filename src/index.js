import List from './lists';
import TodoItem from './todoitems';
import addBtn from './assets/plus.svg';

import './styles.scss';

const categories = document.querySelector('#categories-container');
const img = document.createElement('img');
img.src = addBtn;

categories.appendChild(img);

const allLists = [];
const defaultList = new List('Tasks');
allLists.push(defaultList);
