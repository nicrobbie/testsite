
class recordsController {
  static get UID(){
    return "recordsController"
  }
  
  /* @ngInject */
  constructor($scope, item) {
  	this.item = item;
  	this.value="grid" //default view set to grid
  	//console.log(item);
  }
}

recordsController.$inject = ['$scope', 'item'];
export default recordsController;
