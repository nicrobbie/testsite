// Import Style
import './vdpInfo.scss';


import angular from 'angular';


// Import internal modules
import controller from './vdpInfo.controller';
import directive from './vdpInfo.directive';
import run from './vdpInfo.run';

import config from './vdpInfo.config';


export default angular.module("vdpInfo" , [])
  .config(config)
  .run(run)
  .service('InfoService', function ($http, $q) {
  	this.getInfo = function (id) {
  		return $http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${id}?callback=JSON_CALLBACK`);
  	};
  })
  .controller(controller.UID, controller)
  .directive("vdpInfo", directive)
  .name;
