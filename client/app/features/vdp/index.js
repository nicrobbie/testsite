// Import Style
import './vdp.scss';


import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from './vdp.controller';
import routes from './vdp.routes';
import run from './vdp.run';

import config from './vdp.config';
import vdpReserve from '../../components/vdpReserve';
import vdpTradein from '../../components/vdpTradein';
import vdpTestdrive from '../../components/vdpTestdrive';

export default angular.module("vdp" , [uirouter, vdpReserve, vdpTradein, vdpTestdrive])
  .config(config)
  .config(routes)
  .run(run)
  .service('ItemService', function ($http, $q) {
  	this.getItem = function (id) {
  		return $http.jsonp(`http://live-uat.cdemo.com/jsonp/detail/${id}?callback=JSON_CALLBACK`);
  	};
  })
  .controller(controller.UID, controller)
  .name;
