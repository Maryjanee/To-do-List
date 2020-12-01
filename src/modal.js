const modalObj = {
  modal: () => document.getElementById('myModal'),
  btn: () => document.getElementById('new-list-btn'),
  span: () => document.getElementsByClassName('close')[0],
  input: () => document.getElementById('modal-text'),
  submit: () => document.getElementById('modal-submit-btn'),
  btnclick() {
    modalObj.modal().style.display = 'block';
  },
  closeclick() {
    modalObj.modal().style.display = 'none';
  },
};

export default modalObj;