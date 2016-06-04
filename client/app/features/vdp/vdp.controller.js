
class vdpController {
  static get UID(){
    return "vdpController"
  }
  
  /* @ngInject */
  constructor($scope, item) {
  	this.item = item;
  }
}

vdpController.$inject = ['$scope', 'item'];
export default vdpController;