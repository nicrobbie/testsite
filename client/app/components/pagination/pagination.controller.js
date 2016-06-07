export default class paginationController {
  static get UID(){
    return "paginationController"
  }

  /* @ngInject */
  constructor() {
  	//this.pageSize= 10;
    //this.per=[{id:"1", label:"5"},{id:"10", label:"10"},{id:"15", label:"15"},{id:"20", label:"20"}];
  }
  pageChangeHandler = function(num) {
      console.log('Page changed to ' + num);
  };
}
