// Import Style
import './main.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

//import productService from '../../shared/productService';

// Import internal modules
import controller from './main.controller';
import routes from './main.routes';
import run from './main.run';



export default angular.module("main" , [uirouter])
  .config(routes)
  .run(run)
  .service('ProductService', function ($http) {
  	this.getProducts = function () {
  		return $http.get("http://localhost:3004/products");
  	};
  	this.getProductCategories = function (id) {
  		return $http.get(`http://localhost:3004/products/${id}`);
  	}
  })
  .controller(controller.UID, controller)
  .name;
