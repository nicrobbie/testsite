export default class gridViewController {
  static get UID(){
    return "gridViewController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a gridView component"
  }

  slideUp() {
  	var hide = document.getElementsByClassName("bringUp");
  	hide[0].style.display="none";

  	var slideD = document.getElementsByClassName("hover-tile hover-tile-visible");
  	slideD[0].style.height="55px";
  	
  	var slideU = document.getElementsByClassName("hover-tile hover-tile-hidden");
  	slideU[0].style.height="95%";

  	var show = document.getElementsByClassName("bringDown");
  	show[0].style.display="block";
  }
  
  slideDown() {
  	var hide = document.getElementsByClassName("bringDown");
  	hide[0].style.display="none";
  	
  	var slide = document.getElementsByClassName("hover-tile hover-tile-visible");
  	slide[0].style.height="inherit";

  	var show = document.getElementsByClassName("bringUp");
  	show[0].style.display="block";

  }
}
