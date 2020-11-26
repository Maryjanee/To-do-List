

const displayTasks = (array) => {
  let taskList = document.getElementById('task-listing');
  taskList.innerHTML = '';
  array.todos.forEach( (element, i) => {

    let task = document.createElement('div');
    task.className = "task";
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
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
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
    info.addEventListener('click', () => showInfo(`task${i}`));
  })


}

const showInfo = (index) => {
  let element =  document.getElementById(index);
  console.log(element)
  if(element.style.display == 'none'){
    element.style.display = 'flex';
  }else{
    element.style.display = 'none'; 
  } 
  console.log(element)
}


export default displayTasks;