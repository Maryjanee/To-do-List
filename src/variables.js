import List from "./lists";

let allLists = [];
let all = new List('All');
let unlisted = new List('Unlisted');
allLists.push(all);
allLists.push(unlisted);

let currentCategory = all; 
export {allLists, all, unlisted, currentCategory}