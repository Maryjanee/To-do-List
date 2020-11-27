import displayTasks from './displaytasks';
import {allLists, currentCategory } from './variables'

class Task {
  
  constructor(title, description, priority, category, duedate){
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.category = category;
    this.completeStatus = false;
  }

  editTitle(newTitle){
    this.title = newTitle;
  }
  editDescription(newDesc){
    this.description = newDesc;
  }
  editDate(newDate){
    this.duedate = newDate;
  }
  
  editPriority(newPrio){
    this.priority = newPrio;
  }
  
  assignList(list){
    list.push(this);
  }
  
  toggleStatus() {
    if(this.completeStatus == false){
      this.completeStatus = true;
    }else{
      this.completeStatus = false
    }
  }
}

const createTask = (title, description, priority, category, duedate) => {
  let task = new Task(title, description, priority, category, duedate);
  let all = allLists.find(e => e.name == 'All');
  let choice = allLists.find(e => e.name == category);
  all.todos.push(task);
  choice.todos.push(task);
  return currentCategory
}


export {Task, createTask}