import localStorageVals from './localStorage';

const editForm = document.getElementById('edit-task-form');

const displayTasks = (array, allLists, currentCategory) => {
  let taskList = document.getElementById('task-listing');
  taskList.innerHTML = '';
  array.todos.forEach( (element, i) => {

    let task = document.createElement('div');
    task.className = "task";
    task.id = element.title
    let taskBody = document.createElement('div');
    taskBody.className = "task-body";
    let taskHidden = document.createElement('div');
    taskHidden.className = "task-hidden";
    taskHidden.id = `task${i}`
  
    taskBody.innerHTML = `<div class="task-body-text">
                            <input type="checkbox" name="check" id="checkbox">
                            <p>${element.title}</p>
                          </div>
                          <div class="task-body-end">
                            <button class="info-btn" id=info${i}>More Info</button>
                            <button class="edit-btn" id=edit${i}>Edit</button>
                            <button class="delete-btn" id=del${i}>Delete</button>
                          </div>`;
    taskHidden.innerHTML = `<div class="task-hidden-desc">
                              <h5>Description:</h5>
                              <p>${element.description}</p>
                            </div>
                            <div class="task-hidden-priority">
                              <h5>Priority</h5>
                              <p>${element.priority}</p>
                            </div>
                            <div class="task-hidden-date">
                              <h5>Due Date</h5>
                              <p>${element.duedate}</p>
                            </div>`;

    task.appendChild(taskBody);
    task.appendChild(taskHidden);
    taskList.appendChild(task);

    let info = document.getElementById(`info${i}`);
    let deleteBtn = document.getElementById(`del${i}`);
    let editBtn = document.getElementById(`edit${i}`);

   deleteBtn.addEventListener('click', () =>{
    deleteTask(element.title, element.category, allLists, currentCategory)
   } )
    info.addEventListener('click', () => showInfo(`task${i}`));
    editBtn.addEventListener('click',() => editFunction(element, allLists, currentCategory));
    localStorageVals(allLists);
  })


}

const showInfo = (index) => {
  let element =  document.getElementById(index);

  if(element.style.display ==='none'){
    element.style.display = 'flex';
  }else{
    element.style.display = 'none'; 
  } 

}

const changeObjParams = (obj, title, description, priority, category, duedate) => {

  obj.title = title;
  obj.description = description;
  obj.priority = priority;
  obj.category = category;
  obj.duedate = duedate;
  return obj;
}

const editFunction = (element, allLists, currentCategory) => {
  console.log(element.category)
  // editForm.style.display = "block";
  editForm.addEventListener('submit', (e)=> {
    console.log(allLists,currentCategory)
    e.preventDefault()
    let editTitle = document.getElementById('edit-task-title').value;
    let editDescription = document.getElementById('edit-task-description').value;
    let editCategory = document.getElementById('edit-task-category').value;
    let editPriority = document.getElementById('edit-task-priority').value
    let editDuedate = document.getElementById('edit-task-duedate').value;
    if(editTitle == "" || editDescription == "" ||editDuedate == ""){
      alert ("Please enter all the details to update the task");
    }else{
      let tasks =  findTask(element, allLists);
   

      if (element.category !== editCategory) {
        let previousList = allLists.find(e => e.name == element.category);
        let editIndex = previousList.todos.findIndex(e => e.title == element.title);
        let nextList = allLists.find(e => e.name == editCategory);
        tasks[1] = previousList.todos.splice(editIndex, 1);      
        // nextList.todos.push(tasks[1])
      } 
  
  
      // changeObjParams(task, editTitle, editDescription, editPriority,editCategory,editDuedate );
      changeObjParams(tasks[0], editTitle, editDescription, editPriority, editCategory,editDuedate );
      changeObjParams(tasks[1], editTitle, editDescription, editPriority,editCategory,editDuedate );
      
      console.log(currentCategory, allLists) 
      displayTasks(currentCategory, allLists, currentCategory);
    }
    
    })


}


const findTask = (task, allLists) =>{
  
  let allTasks = allLists.find(e => e.name == 'All');
  let foundinAll =  allTasks.todos.find(e => e.title == task.title);

  let found = allLists.find(e => e.name == task.category);
  let foundincat = found.todos.find(e => e.title == task.title);
  return [foundinAll, foundincat]

}


const deleteTask = (taskTitle, category, allLists, currentCategory) =>{
  console.log(category, allLists, currentCategory )
  let choice = allLists.find(e => e.name == category)
  let delIndex = choice.todos.findIndex(e => e.title == taskTitle);
  choice.todos.splice(delIndex, 1);
  
  let allTasks = allLists.find(e => e.name == 'All')
  let allTasksIndex = allTasks.todos.findIndex(e => e.title == taskTitle);
  allTasks.todos.splice(allTasksIndex, 1);
  displayTasks(currentCategory, allLists, currentCategory)
}



export default displayTasks;