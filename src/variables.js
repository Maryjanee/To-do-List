import List from "./lists";

let allLists = [];
let all = new List('All');
let unlisted = new List('Unlisted');
allLists.push(all);
allLists.push(unlisted);

let currentCategory = []; 
export default allLists;