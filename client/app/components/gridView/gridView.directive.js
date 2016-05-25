import controller from './gridView.controller'

export default function gridView(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./gridView.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
