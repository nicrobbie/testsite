export default class vdpDealerController {
  static get UID(){
    return "vdpDealerController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpDealer component";

    this.hours = ['9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','Closed','Closed'];
    this.phone = "(403)-555-1234";
    this.fax = "(403)-555-5678";
    this.email = "chev@email.com";
    this.dealerHomePage = "www.homepage.com";

    this.street = "1700A Waverley Street";
    this.address = "Winnipeg MB, R3T 5V7";
  }
}
