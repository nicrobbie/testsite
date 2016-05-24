// Import Style
import './pagination.scss';


import angular from 'angular';

// Import internal modules
import controller from './pagination.controller';
import directive from './pagination.directive';
import run from './pagination.run';

import config from './pagination.config';


export default angular.module("pagination" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("pagination", directive)
  .name;
