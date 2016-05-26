// Import Style
import './vdpReserve.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpReserve.controller';
import directive from './vdpReserve.directive';
import run from './vdpReserve.run';

import config from './vdpReserve.config';

//import $ from '../../../../bower_components/jquery/src/jquery.js';


export default angular.module("vdpReserve" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpReserve", directive)
  .name;
