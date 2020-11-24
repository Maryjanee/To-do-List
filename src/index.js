import List from './lists';
import TodoItem from './todoitems';
import addBtn from './assets/plus.svg';

import './styles.scss';

const navBar = document.querySelector('nav');
const img = document.createElement('img');
img.src = addBtn;

navBar.appendChild(img);

const allLists = [];
const defaultList = new List('Tasks');
allLists.push(defaultList);
