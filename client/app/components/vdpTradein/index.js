// Import Style
import './vdpTradein.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpTradein.controller';
import directive from './vdpTradein.directive';
import run from './vdpTradein.run';

import config from './vdpTradein.config';


export default angular.module("vdpTradein" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpTradein", directive)
  .name;
