export default class vdpInfoController {
  static get UID(){
    return "vdpInfoController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpInfo component";
    var tabcontent = document.getElementsByClassName("tab-content");
    tabcontent[0].style.display = "block";
  }


  tabClick(num) {
  	console.log("tabclick");
  	
  	var tabcontent = document.getElementsByClassName("tab-content");
	for (var i = 0; i < tabcontent.length; i++) {
	   tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
    var tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }

	document.getElementById("tab" + num).style.display = "block";
	document.getElementById("a" + num).className += " is-active";
	//evt.currentTarget

/*
  	  $('.accordion-tabs').each(function(num) {
  	    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  	  });

  	  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
  	    if (!$(this).hasClass('is-active')) {
  	      event.preventDefault();
  	      var accordionTabs = $(this).closest('.accordion-tabs');
  	      accordionTabs.find('.is-open').removeClass('is-open').hide();

  	      $(this).next().toggleClass('is-open').toggle();
  	      accordionTabs.find('.is-active').removeClass('is-active');
  	      $(this).addClass('is-active');
  	    } else {
  	      event.preventDefault();
  	    }
  	  });
  	  */


  }
}
