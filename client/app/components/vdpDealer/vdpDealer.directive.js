import controller from './vdpDealer.controller'

export default function vdpDealer(){
  return {
    restrict: 'EA',
    scope: {
        item: '='
    },
    template: require("./vdpDealer.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
