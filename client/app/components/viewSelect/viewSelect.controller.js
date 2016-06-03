export default class viewSelectController {
  static get UID(){
    return "viewSelectController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a viewSelect component"
    this.value="grid" //default view set to grid
  }
}
