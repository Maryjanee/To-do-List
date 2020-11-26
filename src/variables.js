import List from "./lists";

let allLists = [];
let all = new List('All');
let unlisted = new List('Unlisted');
allLists.push(all);
allLists.push(unlisted);

let currentCategory = all;

const updateCurrent = (name) =>{
  currentCategory = allLists.find(e => e.name == name);  
}


export {allLists, all, unlisted, currentCategory, updateCurrent}