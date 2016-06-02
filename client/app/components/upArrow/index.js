// Import Style
import './upArrow.scss';


import angular from 'angular';

// Import internal modules
import controller from './upArrow.controller';
import directive from './upArrow.directive';
import run from './upArrow.run';

import config from './upArrow.config';


export default angular.module("upArrow" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("upArrow", directive)
  .name;
