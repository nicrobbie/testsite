class vdpDealerController {
  static get UID(){
    return "vdpDealerController"
  }

  /* @ngInject */
  constructor($scope, InfoService) {

    this.recordId = 625165;
    this.record = {};
    InfoService.getInfo(this.recordId).then( (response) => { 
      this.record = response.data[0]; 
      console.log(this.record);
    });

    this.hours = ['9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','Closed','Closed'];
    this.phone = "(403)-555-1234";
    this.fax = "(403)-555-5678";
    this.email = "chev@email.com";
    this.dealerHomePage = "www.homepage.com";

    this.street = "1700A Waverley Street";
    this.address = "Winnipeg MB, R3T 5V7";
  }
}

vdpDealerController.$inject = ['$scope', 'InfoService'];
export default vdpDealerController;