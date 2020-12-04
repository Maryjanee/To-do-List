import List from '../lists';


describe('Create a category', () => {
  const category = new List('New category');

  test('it has name property', () => {
    expect(category.name).toEqual('New category');
  });

  test('it contains todos array', () => {
    expect(typeof category.todos).toEqual('object');
  });
});