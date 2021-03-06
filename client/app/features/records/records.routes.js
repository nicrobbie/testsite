
import controller from './records.controller'

/**
 * Routing function for records
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("records", {
    url: "/records",
    template: require("./records.tpl.html"),
    controller: controller.UID,
    controllerAs: "records",
    resolve: {
            item: [
            'RecordsService',
            function (RecordsService) {
                return RecordsService.getItem(20077)
                .then(response => {
                    return response.data;
                });
            }
            ]
        }
  }).state("records.state2", {
    url: "/state2",
    template: "<h1>State 2</h1>"
  });
}
