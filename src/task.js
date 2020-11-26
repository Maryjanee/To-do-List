import displayTasks from './displaytasks';
import {allLists, currentCategory } from './variables'

class Task {
  
  constructor(title, description, dueDate, priority, category, completeStatus){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
    this.dueDate = newDate;
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

const createTask = (title, description, duedate, priority,  category) => {
  let task = new Task(title, description, duedate, priority, category, false);
  let all = allLists.find(e => e.name == 'All');
  let choice = allLists.find(e => e.name == category);
  all.todos.push(task);
  choice.todos.push(task);
  console.log(currentCategory)
  return currentCategory
}


export {Task, createTask}