// Import Style
import './vdpTestdrive.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpTestdrive.controller';
import directive from './vdpTestdrive.directive';
import run from './vdpTestdrive.run';

import config from './vdpTestdrive.config';


export default angular.module("vdpTestdrive" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpTestdrive", directive)
  .name;
