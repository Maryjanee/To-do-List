const modalObj = {
  modal: () => {
    return document.getElementById("myModal") },
  btn: () => {
    return document.getElementById("new-list-btn") },
  span: () => {
    return document.getElementsByClassName("close")[0] } ,
  btnclick: function() {
    modalObj.modal().style.display = "block";
  },
  closeclick: function() {
    modalObj.modal().style.display = "none";
  } 
}




export default modalObj;