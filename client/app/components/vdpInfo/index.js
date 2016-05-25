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
  .controller(controller.UID, controller)
  .directive("vdpInfo", directive)
  .name;
