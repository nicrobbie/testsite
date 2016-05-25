import controller from './vdpBanner.controller'

export default function vdpBanner(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpBanner.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
