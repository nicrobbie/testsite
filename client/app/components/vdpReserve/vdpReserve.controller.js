export default class vdpReserveController {
  static get UID(){
    return "vdpReserveController"
  }

  /* @ngInject */
  constructor() {
    this.date = new Date().toISOString().substring(0, 10);
    this.hour = 3;
    this.hours = [];
    this.minutes = [];
    this.minute = 25;
    this.ampm = ["AM", "PM"];
    for(var i = 12; i >= 1; i--) {
    	this.hours.push(i);
    	this.minutes.push(i * 5);
    }
  }

  formatDate(date) {
      function pad(n) {
          return n < 10 ? '0' + n : n;
      }

      return date && date.getFullYear()
          + '-' + pad(date.getMonth() + 1)
          + '-' + pad(date.getDate());
  }

  parseDate(s) {
      var tokens = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);

      return tokens && new Date(tokens[1], tokens[2] - 1, tokens[3]);
  }
}
