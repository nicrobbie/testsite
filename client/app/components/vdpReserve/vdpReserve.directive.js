import controller from './vdpReserve.controller'

export default function vdpReserve(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpReserve.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
