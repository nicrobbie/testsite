
import controller from './vdp.controller'

/**
 * Routing function for vdp
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("vdp", {
    url: "/vdp",
    template: require("./vdp.tpl.html"),
    controller: controller.UID,
    controllerAs: "vdp",
    resolve: {
    	item: [
	    	'ItemService',
	    	function (ItemService) {
	    		return ItemService.getItem(625165)
	    			.then(response => {
	    				return response.data[0];
	    			});
	    	}
    	]
	}
  });
}
