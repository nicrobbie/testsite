import controller from './vdpActions.controller'

export default function vdpActions(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpActions.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
