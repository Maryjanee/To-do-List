const localStorageVals = (item) =>{
  localStorage.setItem("AllLists", JSON.stringify(item) )
}

export default localStorageVals;