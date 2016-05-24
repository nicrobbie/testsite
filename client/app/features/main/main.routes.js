
import controller from './main.controller'

/**
 * Routing function for main
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("main", {
    url: "/",
    template: require("./main.tpl.html"),
    controller: controller.UID,
    controllerAs: "main",
    resolve: {
    	products: [
	    	'ProductService',
	    	function (ProductService) {
	    		return ProductService.getProducts()
	    			.then(response => response.data);
	    	}
    	]
	}
  });
}
