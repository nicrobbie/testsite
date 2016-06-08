// Import Style
import './records.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from './records.controller';
import routes from './records.routes';
import run from './records.run';

import config from './records.config';



export default angular.module("records" , [uirouter])
	.config(config)
  .config(routes)
	.run(run)
	.service('RecordsService', function ($http, $q) {
	  	this.getItem = function (id) {
	  		return $http.jsonp(`http://live-uat.cdemo.com/jsonp/${id}?callback=JSON_CALLBACK`);
  		};
  	})
  .controller(controller.UID, controller)
  .name;
