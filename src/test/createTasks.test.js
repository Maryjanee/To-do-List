import { createTask, Task } from '../task'
import List from '../lists'

describe('Create a task', () => {
  let allLists = []
  const all = new List('All')
  const defaultCat = new List('Default')
  allLists.push(all)
  allLists.push(defaultCat)
  let currentCategory = allLists[0]
  
  test('it creates and adds task to all list', () => {
    createTask('title', 'description', 'priority', 'Default', 'duedate', allLists, currentCategory);
    const task = new Task('title', 'description', 'priority', 'Default', 'duedate');
    expect(allLists[0].todos).toContainEqual(task);
    
  });
})