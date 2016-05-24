import angular from 'angular';
import service from './service';


export default angular.module('testsite')
	.service("ProductService", service);