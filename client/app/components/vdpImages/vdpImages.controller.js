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
      console.log(this.pictures);
    });

    ImageService.getInfo(this.recordId).then( (response) => { 
      this.record = response.data[0]; 
      console.log(this.record);
    });

    // Current slide index
    this.slideIndex = 1;
  }


  showImage(element) {
    var x = this.pictures[this.slideIndex - 1];
    console.log(x);
    document.getElementById("image-content").src = `http://static.cdemo.com/${this.recordId}/1024/${x.photo_name}`;
    document.getElementById("image-modal").style.display = "block";
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
    console.log("SlideIndex=" + this.slideIndex);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[this.slideIndex-1].style.display = "block";  
  }
  
}

vdpImagesController.$inject = ['$scope', 'ImageService'];
export default vdpImagesController;