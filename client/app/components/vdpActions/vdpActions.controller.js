export default class vdpActionsController {
  static get UID(){
    return "vdpActionsController"
  }

  /* @ngInject */
  constructor() {
    this.reserveShow = false;
    this.tradeShow = false;
    this.testShow = false;
  }

  toggleContent(num) {

    // Hide/show the correct content area
    if(num == 1) {
      this.reserveShow = !this.reserveShow;
      this.tradeShow = false;
      this.testShow = false;
    }

    if(num == 2) {
      this.reserveShow = false;
      this.tradeShow = !this.tradeShow;
      this.testShow = false;
    }

    if(num == 3) {
      this.reserveShow = false;
      this.tradeShow = false;
      this.testShow = !this.testShow;
    }
  }

/*
  openModal(num) {
    
    
  	var modal = document.getElementById("action" + num);
  	modal.style.display = "block";

    var modal = document.getElementById("action" + num);
    modal.style.display = "block";
    
  }

  closeModal(num) {
  	var modal = document.getElementById("action" + num);
  	modal.style.display = "none";
  }
*/
}
