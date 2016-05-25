import controller from './vdpInfo.controller'

export default function vdpInfo(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpInfo.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
