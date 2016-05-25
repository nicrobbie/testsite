// Import Style
import './vdpActions.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpActions.controller';
import directive from './vdpActions.directive';
import run from './vdpActions.run';

import config from './vdpActions.config';


export default angular.module("vdpActions" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpActions", directive)
  .name;
