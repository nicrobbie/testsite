// Import Style
import './vdpDealer.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpDealer.controller';
import directive from './vdpDealer.directive';
import run from './vdpDealer.run';

import config from './vdpDealer.config';


export default angular.module("vdpDealer" , [])
  .config(config)
  .run(run)
  .service('InfoService', function ($http, $q) {
  	this.getInfo = function (id) {
  		return $http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${id}?callback=JSON_CALLBACK`);
  	};
  })
  .controller(controller.UID, controller)
  .directive("vdpDealer", directive)
  .name;
