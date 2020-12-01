export default class List {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  assignToDos(todos) {
    this.todos.push(todos);
  }

  deleteList(allLists) {
    const list = allLists.find(e => e.name === this.name);
    const index = allLists.indexOf(list);
    if (index > -1) {
      allLists.splice(index, 1);
    }
  }
}
