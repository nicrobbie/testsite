// Import Style
import './filterBank.scss';


import angular from 'angular';

// Import internal modules
import controller from './filterBank.controller';
import directive from './filterBank.directive';
import run from './filterBank.run';

import config from './filterBank.config';


export default angular.module("filterBank" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("filterBank", directive)
  .name;
