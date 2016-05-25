import controller from './vdpTestdrive.controller'

export default function vdpTestdrive(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpTestdrive.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
