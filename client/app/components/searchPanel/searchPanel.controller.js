export default class searchPanelController {
  static get UID(){
    return "searchPanelController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a searchPanel component"
    this.priceRangeSlider = {
        minValue: 0,
        maxValue: 100000,
        options: {
            floor: 0,
            ceil: 100000,
            step: 10000,
            enforceStep: false,
            enforceRange: true
        }
    };
    this.kmRangeSlider = {
        minValue: 0,
        maxValue: 500000,
        options: {
            floor: 0,
            ceil: 500000,
            step: 10000,
            enforceStep: false,
            enforceRange: true
        }
    };

    this.yearRangeSlider = {
        minValue: 1980,
        maxValue: 2017,
        options: {
            floor: 1980,
            ceil: 2017,
            step: 1,
            enforceStep: false,
            enforceRange: true
        }
    };
  }

  openModal() {
  	var modal = document.getElementById("myModal");
  	modal.style.display = "block";
  	var content = document.getElementById("myContent");
    content.style.display = "block";
  }

  closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    var content = document.getElementById("myContent");
    content.style.display = "none";
  }
}
