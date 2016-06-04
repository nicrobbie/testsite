class vdpImagesController {
  static get UID(){
    return "vdpImagesController"
  }

  /* @ngInject */
  constructor($scope, ImageService) {
    //this.title = "2016 Toyota Tundra 4WD";

    this.recordId = 625165;
    this.record = {};
    this.pictures = {};

    // Get images
    ImageService.getImages(this.recordId).then( (response) => { 
      this.pictures = response.data;
    });

    ImageService.getInfo(this.recordId).then( (response) => { 
      this.record = response.data[0]; 
    });

    // Current slide index
    this.slideIndex = 1;


    // Load the first picture when page is ready
    angular.element(document).ready(function () {
        var x = document.getElementsByClassName("mySlides");
        x[0].style.display = "block";  
    });
  }

 

  showImage(element) {
    // Get the selected image
    var x = this.pictures[this.slideIndex - 1];

    // Show it in modal
    document.getElementById("modal-image").src = `http://static.cdemo.com/${this.recordId}/1024/${x.photo_name}`;
    document.getElementById("image-modal").style.display = "block";
  }


  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }


  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    // Set the slideIndex (can wrap around)
    if (n > x.length) { this.slideIndex = 1; }    
    if (n < 1) {this.slideIndex = x.length; }

    // Hide all images
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }

    // Show the selected image
    x[this.slideIndex-1].style.display = "block";  
  }
  

  plusModal(n) {

    // Increment slide index
    this.slideIndex += n
    var x = document.getElementsByClassName("mySlides");
    if (this.slideIndex > x.length) {this.slideIndex = 1}    
    if (this.slideIndex < 1) {this.slideIndex = x.length};

    // Update the modal image
    x = this.pictures[this.slideIndex - 1];
    console.log(this.slideIndex);
    document.getElementById("modal-image").src = `http://static.cdemo.com/${this.recordId}/1024/${x.photo_name}`;
  }


  closeModal() {
    document.getElementById("image-modal").style.display = "none";
  }
}

vdpImagesController.$inject = ['$scope', 'ImageService'];
export default vdpImagesController;