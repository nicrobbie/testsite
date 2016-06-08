import controller from './gridView.controller'

export default function gridView(){
  return {
    restrict: 'EA',
    scope: {
        item: '='
    },
    template: require("./gridView.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {
        console.log(scope.vm.item);
    }
  }
}
