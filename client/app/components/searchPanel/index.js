// Import Style
import './searchPanel.scss';


import angular from 'angular';
import slider from 'angularjs-slider';
console.log(slider);

// Import internal modules
import controller from './searchPanel.controller';
import directive from './searchPanel.directive';
import run from './searchPanel.run';

import config from './searchPanel.config';


export default angular.module("searchPanel" , [slider.name])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("searchPanel", directive)
  .name;
