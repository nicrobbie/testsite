import controller from './header.controller'

export default function header(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./header.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
