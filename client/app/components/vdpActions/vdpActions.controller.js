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

    document.getElementById("action1").style.display = "none";
    document.getElementById("action2").style.display = "none";
    document.getElementById("action3").style.display = "none";

    // Hide/show the correct content area
    if(num == 1) {
      document.getElementById("action1").style.display = "block";
      this.reserveShow = !this.reserveShow;
      this.tradeShow = false;
      this.testShow = false;
    }

    if(num == 2) {
      document.getElementById("action2").style.display = "block";
      this.reserveShow = false;
      this.tradeShow = !this.tradeShow;
      this.testShow = false;
    }

    if(num == 3) {
      document.getElementById("action3").style.display = "block";
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
