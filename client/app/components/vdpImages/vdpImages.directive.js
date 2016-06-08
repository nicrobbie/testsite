import controller from './vdpImages.controller'

export default function vdpImages(){
  return {
    restrict: 'EA',
    scope: {
        item: '='
    },
    template: require("./vdpImages.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

        scope.showImage = function() {

          // Get the selected image
          var x = scope.vm.item.general_photo_list[scope.slideIndex - 1];

          // Show it in modal
          document.getElementById("modal-image").src = scope.vm.item.general_photo_list[scope.slideIndex - 1].src_set;
          document.getElementById("image-modal").style.display = "block";
        }
        

        // Increment the image counter
        scope.plusDivs = function(n) {
          scope.showDivs(scope.slideIndex += n);
        }


        // Show the image
        scope.showDivs = function(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");

          // Set the slideIndex (can wrap around)
          if (n > x.length) { scope.slideIndex = 1; }    
          if (n < 1) {scope.slideIndex = x.length; }


          // Hide all images
          for (i = 0; i < x.length; i++) {
            //console.log(x[i]);
             x[i].style.display = "none";  
          }

          // Show the selected image
          x[scope.slideIndex-1].style.display = "block";  
        }
        

        // Increments the modal image
        scope.plusModal = function(n) {

          // Increment slide index
          scope.slideIndex += n
          var x = document.getElementsByClassName("mySlides");
          if (scope.slideIndex > x.length) {scope.slideIndex = 1}    
          if (scope.slideIndex < 1) {scope.slideIndex = x.length};


          // Update the modal image
          document.getElementById("modal-image").src = scope.vm.item.general_photo_list[scope.slideIndex - 1].src_set;

          // Update the regular image
          scope.showDivs(scope.slideIndex);
        }


        // Closes the modal
        scope.closeModal = function() {
          document.getElementById("image-modal").style.display = "none";
        }
    }
  }
}
