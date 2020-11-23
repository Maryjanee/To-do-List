class List {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addToLists() {
    allLists.push(this);
  }

  assignToDos(todos) {
    this.todos.push(todos);
  }

  deleteList() {
    let list = allLists.find(e => e.name == this.name)
    let index = allLists.indexOf(list);
    if (index > -1) {
      allLists.splice(index, 1);
    }
  }
}

const allLists = new Array();
const defaultList = new List("Tasks");
allLists.push(defaultList);

const newList = new List('Work');
newList.addToLists()
newList.deleteList()


console.log(allLists)
