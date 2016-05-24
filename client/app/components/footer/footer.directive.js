import controller from './footer.controller'

export default function footer(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./footer.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
