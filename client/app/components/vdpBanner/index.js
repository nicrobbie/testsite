// Import Style
import './vdpBanner.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpBanner.controller';
import directive from './vdpBanner.directive';
import run from './vdpBanner.run';

import config from './vdpBanner.config';


export default angular.module("vdpBanner" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpBanner", directive)
  .name;
