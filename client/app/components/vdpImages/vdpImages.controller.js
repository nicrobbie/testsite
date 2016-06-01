class vdpImagesController {
  static get UID(){
    return "vdpImagesController"
  }

  /* @ngInject */
  constructor($scope, InfoService) {
    //this.title = "2016 Toyota Tundra 4WD";

    this.recordId = 625165;
    this.record = {};
    InfoService.getInfo(this.recordId).then( (response) => { 
      this.record = response.data[0]; 
      console.log(this.record);
    });
  }
}

vdpImagesController.$inject = ['$scope', 'InfoService'];
export default vdpImagesController;