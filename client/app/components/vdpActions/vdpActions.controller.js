export default class vdpActionsController {
  static get UID(){
    return "vdpActionsController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpActions component"
  }

  openModal() {
  	var modal = document.getElementById("myModal");
  	modal.style.display = "block";
  }

  closeModal() {
  	var modal = document.getElementById("myModal");
  	modal.style.display = "none";
  }
/*
  openModal(num) {
  	var modal = document.getElementsByClassName("mi" + num);
  	modal[0].style.display = "block";
  	modal = document.getElementsByClassName("modal-fade-screen");
  	modal[0].style.display = "block";
  	console.log("open");
  }

  exitModal(num) {
  	var modal = document.getElementsByClassName("mi" + num);
  	modal[0].style.display = "none";
  	modal = document.getElementsByClassName("modal-fade-screen");
  	for(var i = 0; i < modal.length; i++) {
  		modal[i].style.display = "none";
  	}
  	console.log("exit");
  }
*/
}
