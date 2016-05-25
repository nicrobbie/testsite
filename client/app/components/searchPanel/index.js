// Import Style
import './searchPanel.scss';


import angular from 'angular';

// Import internal modules
import controller from './searchPanel.controller';
import directive from './searchPanel.directive';
import run from './searchPanel.run';

import config from './searchPanel.config';


export default angular.module("searchPanel" , [])
.config(config)
.run(run)
  .controller(controller.UID, controller)
  .directive("searchPanel", directive)
  .name;
