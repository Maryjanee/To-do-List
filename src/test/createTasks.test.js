import { createTask, Task } from '../task'
import List from '../lists'

describe('Create a task', () => {
  let allLists = []
  const all = new List('All')
  const defaultCat = new List('Default');
  const work = new List ('Work');
  allLists.push(all)
  allLists.push(defaultCat)
  allLists.push(work)
  let currentCategory = allLists[0]
  
  test('it creates and adds task to all list', () => {
    createTask('title', 'description', 'priority', 'Default', 'duedate', allLists, currentCategory);
    const task = new Task('title', 'description', 'priority', 'Default', 'duedate');
    expect(allLists[0].todos).toContainEqual(task);
    
  });
  
  test('it creates and adds task to default list', () => {
    createTask('title', 'description', 'priority', 'Default', 'duedate', allLists, currentCategory);
    const task = new Task('title', 'description', 'priority', 'Default', 'duedate');
    expect(allLists[1].todos).toContainEqual(task);
    
  });
  
    test('it creates a task but the task should not be added to work', () => {
    createTask('title', 'description', 'priority', 'Default', 'duedate', allLists, currentCategory);
    const task = new Task('title', 'description', 'priority', 'Default', 'duedate');
    expect(allLists[0].todos).toContainEqual(task);
    expect(allLists[2].todos).not.toContainEqual(task);
    
  });
  
  
})



