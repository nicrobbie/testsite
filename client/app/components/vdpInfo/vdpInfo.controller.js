class vdpInfoController {
  static get UID(){
    return "vdpInfoController"
  }

  /* @ngInject */
  constructor($scope) {

    // Set the first tab to open
    document.getElementById("tab-1-content").style.display = "block";
  }



  tabClick(num) {

  	// Declare all variables
    var i, tabcontent, tablinks;


    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }


    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById("tab-" + num + "-content").style.display = "block";
    document.getElementById("tab-" + num).className = "tab-link is-active";
  }
}

vdpInfoController.$inject = ['$scope'];
export default vdpInfoController;
