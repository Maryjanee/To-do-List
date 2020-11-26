import List from "./lists";

let allLists = [];
let allTasks = new List('All');
let unlisted = new List('Unlisted');
allLists.push(allTasks);
allLists.push(unlisted);

let currentCategory = allTasks;

const updateCurrent = (name) =>{
  currentCategory = allLists.find(e => e.name == name);  
}


export {allLists, allTasks, unlisted, currentCategory, updateCurrent}