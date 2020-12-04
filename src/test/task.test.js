import { Task } from '../task'

describe('Create a task', () => {
  const task = new Task('title', 'description', 'priority', 'category', 'duedate', 'allLists', 'currentCategory');

  test('it has title property', () => {
    expect(task.title).toEqual('title');
  });

  test('it has description property', () => {
    expect(task.description).toEqual('description');
  });

  test('it has priority property', () => {
    expect(task.priority).toEqual('priority');
  });

  test('it has category property', () => {
    expect(task.category).toEqual('category');
  });

  test('it has duedate property', () => {
    expect(task.duedate).toEqual('duedate');
  });
});