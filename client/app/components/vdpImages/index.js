// Import Style
import './vdpImages.scss';


import angular from 'angular';


// Import internal modules
import controller from './vdpImages.controller';
import directive from './vdpImages.directive';
import run from './vdpImages.run';

import config from './vdpImages.config';


export default angular.module("vdpImages" , [])
	.config(config)
	.run(run)
	.service('ImageService', function ($http, $q) {

		this.getImages = function(id) {
			return $http.jsonp(`http://live-uat.cdemo.com/jsonp/photos/${id}?callback=JSON_CALLBACK`);
		};
		
		this.getInfo = function (id) {
			return $http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${id}?callback=JSON_CALLBACK`);
		};
		
	})
  .controller(controller.UID, controller)
  .directive("vdpImages", directive)
  .name;
