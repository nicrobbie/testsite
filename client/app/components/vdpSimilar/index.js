// Import Style
import './vdpSimilar.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpSimilar.controller';
import directive from './vdpSimilar.directive';
import run from './vdpSimilar.run';

import config from './vdpSimilar.config';


export default angular.module("vdpSimilar" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpSimilar", directive)
  .name;
