// Import Style
import './gridView.scss';


import angular from 'angular';

// Import internal modules
import controller from './gridView.controller';
import directive from './gridView.directive';
import run from './gridView.run';

import config from './gridView.config';


export default angular.module("gridView" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("gridView", directive)
  .name;
