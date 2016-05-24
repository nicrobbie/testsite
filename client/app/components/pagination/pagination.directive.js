import controller from './pagination.controller'

export default function pagination(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./pagination.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
