export default class vdpActionsController {
  static get UID(){
    return "vdpActionsController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpActions component"
  }

  openModal(num) {
  	var modal = document.getElementById("modal" + num);
  	modal.style.display = "block";
  }

  closeModal(num) {
  	var modal = document.getElementById("modal" + num);
  	modal.style.display = "none";
  }
}
