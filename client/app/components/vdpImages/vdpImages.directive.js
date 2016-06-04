import controller from './vdpImages.controller'

export default function vdpImages(){
  return {
    restrict: 'EA',
    scope: {
        item: '='
    },
    template: require("./vdpImages.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
