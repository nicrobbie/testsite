class listViewController {
  static get UID(){
    return "listViewController"
  }

  /* @ngInject */
  constructor($scope) {
    this.title = "I am a listView component"
  }
}
listViewController.$inject = ['$scope'];
export default listViewController;