class vdpSimilarController {
  static get UID(){
    return "vdpSimilarController"
  }

  /* @ngInject */
  constructor($scope, $http) {

  	$scope.similarRecords = [];
  	$scope.similarRecordsImages = [];


  	// Get related vehicle records
  	for(var i = 0; i < this.item.similar_records.length; i++) {
      $scope.similarRecords.push($http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${this.item.similar_records[i]}?callback=JSON_CALLBACK`));
    }

    
    angular.element(document).ready(function () {

    	// Get images of related vehicles
		for(var i = 0; i < $scope.similarRecords.length; i++) {
			try {
				$scope.similarRecordsImages.push($scope.similarRecords[i].$$state.value.data[0].primary_photo);
			} catch(err) {
				
			}
		}

        console.log($scope.similarRecordsImages);
    });

  }


}

vdpSimilarController.$inject = ['$scope', '$http'];
export default vdpSimilarController;
