import controller from './vdpTradein.controller'

export default function vdpTradein(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpTradein.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
