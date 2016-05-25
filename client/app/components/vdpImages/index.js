// Import Style
import './vdpImages.scss';


import angular from 'angular';

// Import internal modules
import controller from './vdpImages.controller';
import directive from './vdpImages.directive';
import run from './vdpImages.run';

import config from './vdpImages.config';


export default angular.module("vdpImages" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("vdpImages", directive)
  .name;
