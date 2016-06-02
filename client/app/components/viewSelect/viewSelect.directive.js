import controller from './viewSelect.controller'

export default function viewSelect(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./viewSelect.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
