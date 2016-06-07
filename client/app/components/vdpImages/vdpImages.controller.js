class vdpImagesController {
  static get UID(){
    return "vdpImagesController"
  }

  /* @ngInject */
  constructor($scope) {
    // Format the photo strings (they did not work by default)
    for(var i = 0; i < this.item.general_photo_list.length; i++) {
      this.item.general_photo_list[i].src_set = `http://static.cdemo.com/${this.item.record_id}/1024/${this.item.general_photo_list[i].photo_name}`; 
    }


    // Current slide index
    $scope.slideIndex = 1;


    // Load the first picture when page is ready
    angular.element(document).ready(function () {
        var x = document.getElementsByClassName("mySlides");
        x[0].style.display = "block";  
    });
    
  }
}

vdpImagesController.$inject = ['$scope'];
export default vdpImagesController;