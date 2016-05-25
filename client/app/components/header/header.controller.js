export default class headerController {
  static get UID(){
    return "headerController"
  }

  /* @ngInject */
  constructor() {
    this.title = "I am a header component"
  }
}
