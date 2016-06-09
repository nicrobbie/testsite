class vdpSimilarController {
  static get UID(){
    return "vdpSimilarController"
  }

  /* @ngInject */
  constructor($scope, $http) {

  	$scope.similarRecords = [];
  	$scope.similarRecordsImages = [];
  	/*
"http://static.cdemo.com/614234/1024/automobiles-used-2011-chevrolet-camaro-2dr-cpe-2ss-sold-1670635-primary-listing-photo-Image.jpg",
"http://static.cdemo.com/20151105xvcqqffh/1155416.jpg",
"http://static.cdemo.com/20151005vijlneoh/2274729.jpg",
"http://static.cdemo.com/20151002uiwgmjcm/3454632.jpg",
"http://static.cdemo.com/20151002kghclrux/5021636.jpg",
"http://static.cdemo.com/20151001bmcfngdw/4043080.jpg",
"http://static.cdemo.com/20151001iivgtflg/7570941.jpg",
"http://static.cdemo.com/20150930nubnstbq/5185879.jpg",
"http://static.cdemo.com/20150813pswleolv/5432610.jpg"];*/


  	// Get related vehicle records
  	for(var i = 0; i < this.item.similar_records.length; i++) {
      $scope.similarRecords.push($http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${this.item.similar_records[i]}?callback=JSON_CALLBACK`));
    }



    this.getItem(this.item.record_id).success(function(data) {
    	console.log(data);
    });


    
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
