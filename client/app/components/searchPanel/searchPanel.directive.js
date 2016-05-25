import controller from './searchPanel.controller'

export default function searchPanel(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./searchPanel.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
