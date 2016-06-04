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
    this.slideIndex = 1;


    // Load the first picture when page is ready
    angular.element(document).ready(function () {
        var x = document.getElementsByClassName("mySlides");
        x[0].style.display = "block";  
    });
  }

 
  // Show the image in the modal
  showImage(element) {

    // Get the selected image
    var x = this.item.general_photo_list[this.slideIndex - 1];


    // Show it in modal
    document.getElementById("modal-image").src = this.item.general_photo_list[this.slideIndex - 1].src_set;
    document.getElementById("image-modal").style.display = "block";
  }


  // Increment the image counter
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }


  // Show the image
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
  

  // Increments the modal image
  plusModal(n) {

    // Increment slide index
    this.slideIndex += n
    var x = document.getElementsByClassName("mySlides");
    if (this.slideIndex > x.length) {this.slideIndex = 1}    
    if (this.slideIndex < 1) {this.slideIndex = x.length};


    // Update the modal image
    document.getElementById("modal-image").src = this.item.general_photo_list[this.slideIndex - 1].src_set;
  }


  // Closes the modal
  closeModal() {
    document.getElementById("image-modal").style.display = "none";
  }
}

vdpImagesController.$inject = ['$scope'];
export default vdpImagesController;