export default class TodoItem {
  
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.myLists = [];
  }

  editTitle(newTitle){
    this.title = newTitle;
  }
  editDescription(newDesc){
    this.title = newDesc;
  }
  editDate(newDate){
    this.title = newDate;
  }
  editPriority(newPrio){
    this.title = newPrio;
  }
  
  assignLists(lists){
    this.myLists.push(lists);
  }

}