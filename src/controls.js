import  {allLists, all, unlisted, currentCategory} from './variables'



const updateCurrent = (name) =>{
  let foundList = allLists.find(e => e.name == name);
  currentCategory = foundList;
}

export default updateCurrent;