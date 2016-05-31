export default class searchPanelController {
  static get UID(){
    return "searchPanelController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a searchPanel component"
  }

  openModal() {
  	var modal = document.getElementById("myModal");
  	modal.style.display = "block";
  	var content = document.getElementById("myContent");
    content.style.display = "block";
  }

  closeModal() {
  	var modal = document.getElementById("myModal");
  	modal.style.display = "none";
  	var content = document.getElementById("myContent");
  	content.style.display = "none";
  }

}
