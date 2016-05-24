export default class footerController {
  static get UID(){
    return "footerController"
  }

  /* @ngInject */
  constructor() {
  	this.copyright = "Copyright © 2016 cDemo Mobile Solutions";
  	this.terms = "Terms of Use";
  	this.privacy = "Privacy Policy";
  	this.contact = "Contact Us";
  }
}
