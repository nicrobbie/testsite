class vdpDealerController {
  static get UID(){
    return "vdpDealerController"
  }

  /* @ngInject */
  constructor($scope) {
    this.hours = ['9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','9:00am - 5:00pm','Closed','Closed'];
  }
}

vdpDealerController.$inject = ['$scope'];
export default vdpDealerController;