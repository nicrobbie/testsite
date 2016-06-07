import controller from './vdpSimilar.controller'

export default function vdpSimilar(){
  return {
    restrict: 'EA',
    scope: {
        item: '='
    },
    template: require("./vdpSimilar.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
