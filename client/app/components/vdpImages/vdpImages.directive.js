import controller from './vdpImages.controller'

export default function vdpImages(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./vdpImages.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
