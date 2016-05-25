export default class vdpReserveController {
  static get UID(){
    return "vdpReserveController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpReserve component";

    $(function() {
    	$( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
    });
    //$(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  }
}
