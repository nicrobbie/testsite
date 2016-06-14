class vdpSimilarController {
  static get UID(){
    return "vdpSimilarController"
  }

  /* @ngInject */
  constructor($scope, $http) {

  	$scope.similarRecords = [];


  	// Get related vehicle images
  	for(var i = 0; i < this.item.similar_records.length; i++) {
  		$http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${this.item.similar_records[i]}?callback=JSON_CALLBACK`)
  			.success(function(data) {
  				$scope.similarRecords.push(data[0]);
  			});
    }
  }
}

vdpSimilarController.$inject = ['$scope', '$http'];
export default vdpSimilarController;
