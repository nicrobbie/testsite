import controller from './listView.controller'

export default function listView(){
  return {
    restrict: 'EA',
    scope: {

    },
    template: require("./listView.tpl.html"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
