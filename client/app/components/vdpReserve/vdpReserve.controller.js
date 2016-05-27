
export default class vdpReserveController {
  static get UID(){
    return "vdpReserveController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a vdpReserve component";
    this.date = "";
    this.hour = 5;
    this.hours = [];
    this.minutes = [];
    this.ampm = ["AM", "PM"];
    for(var i = 12; i >= 1; i--) {
    	this.hours.push(i);
    	this.minutes.push(i * 5);
    }
    console.log("hours: " + this.hours[0]);
  }
}
