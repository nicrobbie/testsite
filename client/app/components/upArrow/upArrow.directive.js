import controller from './upArrow.controller'

export default function upArrow(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./upArrow.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
