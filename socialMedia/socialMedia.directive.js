import controller from './socialMedia.controller'

export default function socialMedia(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./socialMedia.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
