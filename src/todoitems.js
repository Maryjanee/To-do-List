export default class TodoItem {
  
  constructor(title, description, dueDate, priority, completeStatus){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.myLists = [];
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
  
  assignLists(lists){
    this.myLists.push(lists);
  }
  
  toggleStatus() {
    if(this.completeStatus == false){
      this.completeStatus = true;
    }else{
      this.completeStatus = false
    }
  }

}