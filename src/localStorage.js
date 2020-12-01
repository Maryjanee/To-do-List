const localStorageVals = (item) => {
  localStorage.setItem('allLists', JSON.stringify(item));
};

export default localStorageVals;