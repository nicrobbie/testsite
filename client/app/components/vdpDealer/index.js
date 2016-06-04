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
  .controller(controller.UID, controller)
  .directive("vdpDealer", directive)
  .name;
