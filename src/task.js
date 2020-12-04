class Task {
  constructor(title, description, priority, category, duedate) {
    this.title = title;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.category = category;
    this.completeStatus = false;
  }

  editTitle(newTitle) {
    this.title = newTitle;
  }

  editDescription(newDesc) {
    this.description = newDesc;
  }

  editDate(newDate) {
    this.duedate = newDate;
  }

  editPriority(newPrio) {
    this.priority = newPrio;
  }

  assignList(list) {
    list.push(this);
  }
}

Task.prototype.toggleStatus = function () {
  if (this.completeStatus === false) {
    this.completeStatus = true;
  } else {
    this.completeStatus = false;
  }
};

const createTask = (title, description, priority, category, duedate, allLists, currentCategory) => {
  const task = new Task(title, description, priority, category, duedate);
  const all = allLists.find(e => e.name === 'All');
  const choice = allLists.find(e => e.name === category);
  all.todos.push(task);
  choice.todos.push(task);
  return currentCategory;
};

export { Task, createTask };