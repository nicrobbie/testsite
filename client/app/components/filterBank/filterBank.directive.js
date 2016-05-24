import controller from './filterBank.controller'

export default function filterBank(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./filterBank.tpl.html"),
    controller: controller.UID,
    controllerAs: "fb",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
